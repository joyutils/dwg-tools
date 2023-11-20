import { request as graphqlRequest } from "graphql-request";
import { fetch } from "undici";
import { CronJob } from "cron";
import fs from "node:fs/promises";
import { ElasticClient } from "@joyutils/dwg-utils";
import { getOperatorsDataQueryDocument } from "./query.js";
import { GetDistributorOperatorsQuery } from "./gql/graphql.js";
import {
  DistributionOperatorStatus,
  OperatorAvailabilityResult,
  SampleAssetTestResult,
} from "./types.js";
import {
  GRAPHQL_URL,
  SINGLE_RUN,
  SOURCE_ID,
  TEST_INTERVAL_MIN,
} from "./config.js";

const packageJson = JSON.parse(
  await fs.readFile(new URL("../package.json", import.meta.url), "utf-8")
);
const packageVersion = packageJson.version;
const userAgent = `dwg-ping/${packageVersion}`;
const TEST_ASSET_ID = "1343";

const esClient = await ElasticClient.initFromEnv();

async function sendResults(results: OperatorAvailabilityResult[]) {
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
  try {
    const operators = await getDistributionOperators();
    const results = await Promise.all(
      operators.map((operator) => getOperatorStatus(operator))
    );
    const resultsWithDegradations = await findOperatorDegradations(results);

    await sendResults(resultsWithDegradations);

    console.log(JSON.stringify(resultsWithDegradations, null, 2));
  } catch (e) {
    console.error("Test failed");
    console.error(e);
  }
}

async function getOperatorStatus(
  operator: GetDistributorOperatorsQuery["distributionBucketOperators"][0]
): Promise<OperatorAvailabilityResult> {
  const distributingStatus: OperatorAvailabilityResult["distributingStatus"] =
    operator.distributionBucket.distributing
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
    operator?.metadata?.nodeEndpoint
  );
  if (!nodeStatus) {
    return {
      ...commonFields,
      pingStatus: "dead",
      error: "Failed to fetch status",
    };
  }

  const sampleAssetResult = await getSampleAssetFromDistributor(
    operator?.metadata?.nodeEndpoint
  );

  return {
    ...commonFields,
    pingStatus: sampleAssetResult.ok ? "ok" : "asset-download-failed",
    assetDownloadStatusCode: sampleAssetResult.statusCode,
    assetDownloadResponseTimeMs: sampleAssetResult.responseTimeMs,
    nodeStatus,
    opereatorMetadata: operator.metadata,
  };
}

async function findOperatorDegradations(
  operatorsResults: OperatorAvailabilityResult[]
): Promise<OperatorAvailabilityResult[]> {
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
          result.distributingStatus === "distributing"
      )
      .map(
        (result) =>
          ((result as any).nodeStatus as DistributionOperatorStatus)
            .queryNodeStatus.blocksProcessed
      )
  );

  const medianChainHead = getMedian(
    operatorsResults
      .filter(
        (result) =>
          result.pingStatus === "ok" &&
          result.distributingStatus === "distributing"
      )
      .map(
        (result) =>
          ((result as any).nodeStatus as DistributionOperatorStatus)
            .queryNodeStatus.chainHead
      )
  );

  return operatorsResults.map((result) => {
    if (result.pingStatus !== "ok") {
      return result;
    }
    const qnStatus = result.nodeStatus.queryNodeStatus;
    const blocksProcessedDiff = Math.abs(
      qnStatus.blocksProcessed - medianBlocksProcessed
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
  nodeEndpoint: string
): Promise<DistributionOperatorStatus | null> {
  try {
    const response = await fetch(`${nodeEndpoint}api/v1/status`, {
      headers: {
        "User-Agent": userAgent,
      },
    });
    if (response.status !== 200) {
      console.error(
        `Failed to fetch status from ${nodeEndpoint}, status code: ${response.status}`
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

async function getSampleAssetFromDistributor(
  nodeEndpoint: string
): Promise<SampleAssetTestResult> {
  try {
    const startTime = performance.now();
    const response = await fetch(
      `${nodeEndpoint}api/v1/assets/${TEST_ASSET_ID}`,
      {
        headers: {
          "User-Agent": userAgent,
        },
      }
    );
    await response.blob(); // get the fully body
    const endTime = performance.now();
    const responseTimeMs = endTime - startTime;
    if (response.status !== 200) {
      return {
        ok: false,
        statusCode: response.status,
        responseTimeMs,
      };
    }
    return {
      ok: true,
      responseTimeMs,
    };
  } catch (error) {
    return {
      ok: false,
    };
  }
}

console.log(`Starting dwg-ping v${packageVersion}`);
if (!SINGLE_RUN) {
  new CronJob(`0 */${TEST_INTERVAL_MIN} * * * *`, runTest, null, true);
  console.log(
    `Started cron job to run the test every ${TEST_INTERVAL_MIN} minutes`
  );
} else {
  await runTest();
}
