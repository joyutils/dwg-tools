import { request as graphqlRequest } from "graphql-request";
import { fetch } from "undici";
import { CronJob } from "cron";
import fs from "node:fs/promises";
import { ElasticClient } from "@joyutils/dwg-utils";
import { getOperatorsDataQueryDocument } from "./query.js";
import { GetDistributorOperatorsQuery } from "./gql/graphql.js";
import {
  AssetType,
  DistributionOperatorStatus,
  OperatorPingResult,
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
const THUMBNAIL_TEST_OBJECT_ID = "1343";
const MEDIA_TEST_OBJECT_ID = "552149";
const TEST_OBJECT_TYPE: AssetType =
  new Date().getMinutes() < 10 ? "media" : "thumbnail";
const TEST_OBJECT_ID =
  TEST_OBJECT_TYPE === "media"
    ? MEDIA_TEST_OBJECT_ID
    : THUMBNAIL_TEST_OBJECT_ID;

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
    const operators = await getDistributionOperators();

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
  operator: GetDistributorOperatorsQuery["distributionBucketOperators"][0],
): Promise<OperatorPingResult> {
  const distributingStatus: OperatorPingResult["distributingStatus"] = operator
    .distributionBucket.distributing
    ? "distributing"
    : "not-distributing";
  const commonFields = {
    time: new Date(),
    source: SOURCE_ID,
    version: packageVersion,
    operatorId: operator.id,
    distributionBucketId: operator.distributionBucket.id,
    workerId: operator.workerId,
    nodeEndpoint: operator?.metadata?.nodeEndpoint ?? "",
    statusEndpoint: `${operator?.metadata?.nodeEndpoint}api/v1/status`,
    distributingStatus,
  };

  if (!operator?.metadata?.nodeEndpoint) {
    return { ...commonFields, pingStatus: "dead", error: "No node endpoint" };
  }
  const nodeStatus = await getDistributionOpearatorStatus(
    operator?.metadata?.nodeEndpoint,
  );
  if (!nodeStatus) {
    return {
      ...commonFields,
      pingStatus: "dead",
      error: "Failed to fetch status",
    };
  }

  const sampleAssetResult = await runAssetBenchmark(
    `${operator?.metadata?.nodeEndpoint}api/v1/assets/${TEST_OBJECT_ID}`,
    MEDIA_DOWNLOAD_SIZE,
    1,
    DEBUG,
  );

  return {
    ...commonFields,
    pingStatus:
      sampleAssetResult.status === "success" ? "ok" : "asset-download-failed",
    assetDownloadResult: sampleAssetResult,
    assetDownloadType: TEST_OBJECT_TYPE,
    nodeStatus,
    opereatorMetadata: operator.metadata,
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

  const medianBlocksProcessed = getMedian(
    operatorsResults
      .filter(
        (result) =>
          result.pingStatus === "ok" &&
          result.distributingStatus === "distributing",
      )
      .map(
        (result) =>
          ((result as any).nodeStatus as DistributionOperatorStatus)
            .queryNodeStatus.blocksProcessed,
      ),
  );

  const medianChainHead = getMedian(
    operatorsResults
      .filter(
        (result) =>
          result.pingStatus === "ok" &&
          result.distributingStatus === "distributing",
      )
      .map(
        (result) =>
          ((result as any).nodeStatus as DistributionOperatorStatus)
            .queryNodeStatus.chainHead,
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
    document: getOperatorsDataQueryDocument,
    url: GRAPHQL_URL,
    requestHeaders: {
      "User-Agent": userAgent,
    },
  });
  return data.distributionBucketOperators;
}

async function getDistributionOpearatorStatus(
  nodeEndpoint: string,
): Promise<DistributionOperatorStatus | null> {
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
    return json as DistributionOperatorStatus;
  } catch (error) {
    console.error(`Failed to fetch status from ${nodeEndpoint}`);
    console.error(error);
    return null;
  }
}

console.log(`Starting dwg-ping v${packageVersion}`);
if (!SINGLE_RUN) {
  new CronJob(`0 */${TEST_INTERVAL_MIN} * * * *`, runTest, null, true);
  console.log(
    `Started cron job to run the test every ${TEST_INTERVAL_MIN} minutes`,
  );
} else {
  await runTest();
}
