import { BenchmarkResult } from "./benchmark.js";
import { GetDistributorOperatorsQuery } from "./gql/graphql.js";

export type Operator =
  GetDistributorOperatorsQuery["distributionBucketOperators"][number];
export type OperatorAvailabilityResult = {
  time: Date;
  operatorId: string;
  distributionBucketId: string;
  workerId: number;
  nodeEndpoint: string;
  statusEndpoint: string;
  distributingStatus: "distributing" | "not-distributing";
  source: string;
  version: string;
  videoSpeed?: BenchmarkResult
} & (
    | {
      pingStatus: "ok" | "asset-download-failed";
      assetDownloadStatusCode?: number;
      assetDownloadResponseTimeMs?: number;
      nodeStatus: DistributionOperatorStatus;
      opereatorMetadata: Operator["metadata"];
      chainHeadDiff?: number;
      blocksProcessedDiff?: number;
    }
    | {
      pingStatus: "degraded";
      nodeStatus: DistributionOperatorStatus;
      opereatorMetadata: Operator["metadata"];
      refChainHead: number;
      refBlocksProcessed: number;
    }
    | { pingStatus: "dead"; error: string }
  );

export type DistributionOperatorQueryNodeStatus = {
  url: string;
  chainHead: number;
  blocksProcessed: number;
};

export type DistributionOperatorStatus = {
  id: string;
  version: string;
  objectsInCache: number;
  storageLimit: number;
  storageUsed: number;
  uptime: number;
  downloadsInProgress: number;
  queryNodeStatus: DistributionOperatorQueryNodeStatus;
};

export type SampleAssetTestResult = {
  ok: boolean;
  statusCode?: number;
  responseTimeMs?: number;
};
