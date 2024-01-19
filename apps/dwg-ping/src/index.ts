import { request as graphqlRequest } from "graphql-request";
import { fetch } from "undici";
import { CronJob } from "cron";
import fs from "node:fs/promises";
import { ElasticClient } from "@joyutils/dwg-utils";
import {
  getDistributionOperatorsQueryDocument,
  getStorageOperatorsQueryDocument,
} from "./query.js";
import {
  AssetType,
  DistributionOperatorNodeStatus,
  DistributionOperatorPingResult,
  OperatorNodeStatus,
  OperatorPingResult,
  OperatorType,
  RawOperatorData,
  StorageOperatorNodeStatus,
  StorageOperatorPingResult,
} from "./types.js";
import {
  DEBUG,
  GRAPHQL_URL,
  SINGLE_RUN,
  SOURCE_ID,
  TEST_INTERVAL_MIN,
} from "./config.js";
import { runAssetBenchmark } from "@joyutils/dwg-utils";

const packageJson = JSON.parse(
  await fs.readFile(new URL("../package.json", import.meta.url), "utf-8"),
);
const packageVersion = packageJson.version;
const userAgent = `dwg-ping/${packageVersion}`;

const MEDIA_DOWNLOAD_SIZE = 5 * 1e6; // 5MB
const DISTRIBUTOR_THUMBNAIL_TEST_OBJECT_ID = "1343";
const DISTRIBUTOR_MEDIA_TEST_OBJECT_ID = "552149";
const STORAGE_THUMBNAIL_TEST_OBJECT_ID = "273094";
const STORAGE_MEDIA_TEST_OBJECT_ID = "273093";

function getTestObjectId(operatorType: OperatorType): [AssetType, string] {
  const assetType = new Date().getMinutes() < 10 ? "media" : "thumbnail";

  let testObjectId: string;
  if (operatorType === "distribution") {
    if (assetType === "media") {
      testObjectId = DISTRIBUTOR_MEDIA_TEST_OBJECT_ID;
    } else {
      testObjectId = DISTRIBUTOR_THUMBNAIL_TEST_OBJECT_ID;
    }
  } else {
    if (assetType === "media") {
      testObjectId = STORAGE_MEDIA_TEST_OBJECT_ID;
    } else {
      testObjectId = STORAGE_THUMBNAIL_TEST_OBJECT_ID;
    }
  }

  return [assetType, testObjectId];
}

const esClient = await ElasticClient.initFromEnv();

async function sendResults(results: OperatorPingResult[]) {
  const body = results.flatMap((result) => [
    { index: { _index: "distributors-status" } },
    result,
  ]);
  try {
    await esClient.nativeClient.bulk({ body });
    console.log("Sent the results to Elasticsearch");
  } catch (e) {
    console.error("Failed to send results to Elasticsearch");
    console.error(e);
  }
}

async function runTest() {
  console.log(`Running test at ${new Date()}`);

  if (!DEBUG) {
    const sleepTime = Math.random() * 100000;
    console.log(`Sleeping for ${sleepTime / 1000} seconds`);
    await new Promise((resolve) => setTimeout(resolve, sleepTime));
  }

  try {
    const [distributionOperators, storageOperators] = await Promise.all([
      getDistributionOperators(),
      getStorageOperators(),
    ]);
    const operators = [...distributionOperators, ...storageOperators];

    const results = await Promise.all(
      operators.map((operator) => getOperatorStatus(operator)),
    );

    const resultsWithDegradations = await findOperatorDegradations(results);

    await sendResults(resultsWithDegradations);

    console.log(resultsWithDegradations);
  } catch (e) {
    console.error("Test failed");
    console.error(e);
  }
}

async function getOperatorStatus(
  operatorOrBucket: RawOperatorData,
): Promise<OperatorPingResult> {
  let pingResult: DistributionOperatorPingResult | StorageOperatorPingResult;

  if (operatorOrBucket.__typename === "DistributionBucketOperator") {
    const distributingStatus: DistributionOperatorPingResult["distributingStatus"] =
      operatorOrBucket.distributionBucket.distributing
        ? "distributing"
        : "not-distributing";

    pingResult = {
      time: new Date(),
      source: SOURCE_ID,
      version: packageVersion,
      operatorId: operatorOrBucket.id,
      bucketId: operatorOrBucket.distributionBucket.id,
      workerId: operatorOrBucket.workerId,
      nodeEndpoint: operatorOrBucket?.metadata?.nodeEndpoint ?? "",
      statusEndpoint: `${operatorOrBucket?.metadata?.nodeEndpoint}api/v1/status`,
      distributingStatus,
      operatorType: "distribution",
    } as DistributionOperatorPingResult;
  } else if (operatorOrBucket.__typename === "StorageBucket") {
    if (
      operatorOrBucket.operatorStatus.__typename !==
      "StorageBucketOperatorStatusActive"
    ) {
      throw new Error(
        `Unknown operator status: ${operatorOrBucket.operatorStatus.__typename}`,
      );
    }

    const nodeEndpoint = operatorOrBucket.operatorMetadata?.nodeEndpoint ?? "";

    pingResult = {
      time: new Date(),
      source: SOURCE_ID,
      version: packageVersion,
      operatorId: operatorOrBucket.operatorStatus.workerId.toString(),
      bucketId: operatorOrBucket.id,
      workerId: operatorOrBucket.operatorStatus.workerId,
      nodeEndpoint,
      statusEndpoint: `${nodeEndpoint}api/v1/status`,
      operatorType: "storage",
    } as StorageOperatorPingResult;
  } else {
    throw new Error("Unknown operator type");
  }

  if (!pingResult.nodeEndpoint) {
    return { ...pingResult, pingStatus: "dead", error: "No node endpoint" };
  }
  const nodeStatus = await getOperatorNodeStatus(pingResult.nodeEndpoint);
  if (!nodeStatus) {
    return {
      ...pingResult,
      pingStatus: "dead",
      error: "Failed to fetch status",
    };
  }

  const [assetDownloadType, testAssetId] = getTestObjectId(
    pingResult.operatorType,
  );

  const assetUrl =
    pingResult.operatorType === "distribution"
      ? `${pingResult.nodeEndpoint}api/v1/assets/${testAssetId}`
      : `${pingResult.nodeEndpoint}api/v1/files/${testAssetId}`;

  const sampleAssetResult = await runAssetBenchmark(
    assetUrl,
    MEDIA_DOWNLOAD_SIZE,
    1,
    DEBUG,
  );

  return {
    ...pingResult,
    pingStatus:
      sampleAssetResult.status === "success" ? "ok" : "asset-download-failed",
    assetDownloadResult: sampleAssetResult,
    assetDownloadType,
    nodeStatus,
  };
}

async function findOperatorDegradations(
  operatorsResults: OperatorPingResult[],
): Promise<OperatorPingResult[]> {
  const getMedian = (values: number[]) => {
    const sorted = values.sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);
    return sorted[middle];
  };

  const okResults = operatorsResults.filter(
    (result) =>
      result.pingStatus === "ok" &&
      (result.operatorType !== "distribution" ||
        result.distributingStatus === "distributing"),
  );

  const medianBlocksProcessed = getMedian(
    okResults.map(
      (result) =>
        ((result as any).nodeStatus as OperatorNodeStatus).queryNodeStatus
          .blocksProcessed,
    ),
  );

  const medianChainHead = getMedian(
    okResults.map(
      (result) =>
        ((result as any).nodeStatus as OperatorNodeStatus).queryNodeStatus
          .chainHead,
    ),
  );

  return operatorsResults.map((result) => {
    if (result.pingStatus !== "ok") {
      return result;
    }
    const qnStatus = result.nodeStatus.queryNodeStatus;
    const blocksProcessedDiff = Math.abs(
      qnStatus.blocksProcessed - medianBlocksProcessed,
    );
    const chainHeadDiff = Math.abs(qnStatus.chainHead - medianChainHead);
    const THRESHOLD = 10;

    if (blocksProcessedDiff > THRESHOLD || chainHeadDiff > THRESHOLD) {
      return {
        ...result,
        pingStatus: "degraded",
        refBlocksProcessed: medianBlocksProcessed,
        refChainHead: medianChainHead,
      };
    }
    return {
      ...result,
      blocksProcessedDiff,
      chainHeadDiff,
    };
  });
}

async function getDistributionOperators() {
  const data = await graphqlRequest({
    document: getDistributionOperatorsQueryDocument,
    url: GRAPHQL_URL,
    requestHeaders: {
      "User-Agent": userAgent,
    },
  });
  return data.distributionBucketOperators;
}

async function getStorageOperators() {
  const data = await graphqlRequest({
    document: getStorageOperatorsQueryDocument,
    url: GRAPHQL_URL,
    requestHeaders: {
      "User-Agent": userAgent,
    },
  });
  return data.storageBuckets;
}

async function getOperatorNodeStatus(
  nodeEndpoint: string,
): Promise<DistributionOperatorNodeStatus | StorageOperatorNodeStatus | null> {
  try {
    const response = await fetch(`${nodeEndpoint}api/v1/status`, {
      headers: {
        "User-Agent": userAgent,
      },
    });
    if (response.status !== 200) {
      console.error(
        `Failed to fetch status from ${nodeEndpoint}, status code: ${response.status}`,
      );
      return null;
    }
    const json = await response.json();
    return json as DistributionOperatorNodeStatus | StorageOperatorNodeStatus;
  } catch (error) {
    console.error(`Failed to fetch status from ${nodeEndpoint}`);
    console.error(error);
    return null;
  }
}

console.log(`Starting dwg-ping v${packageVersion}`);
await runTest();
if (!SINGLE_RUN) {
  new CronJob(`0 */${TEST_INTERVAL_MIN} * * * *`, runTest, null, true);
  console.log(
    `Started cron job to run the test every ${TEST_INTERVAL_MIN} minutes`,
  );
}
