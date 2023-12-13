import { BenchmarkResult } from "@joyutils/dwg-utils";
import { GetDistributorOperatorsQuery } from "./gql/graphql.js";

export type OperatorMetadata =
  GetDistributorOperatorsQuery["distributionBucketOperators"][number]["metadata"];

export type AssetType = "thumbnail" | "media";

export type OperatorPingResult = {
  time: Date;
  operatorId: string;
  distributionBucketId: string;
  workerId: number;
  nodeEndpoint: string;
  statusEndpoint: string;
  distributingStatus: "distributing" | "not-distributing";
  source: string;
  version: string;
} & (
  | {
      pingStatus: "ok" | "asset-download-failed";
      assetDownloadType: AssetType;
      assetDownloadResult: BenchmarkResult;
      nodeStatus: DistributionOperatorStatus;
      opereatorMetadata: OperatorMetadata;
      chainHeadDiff?: number;
      blocksProcessedDiff?: number;
    }
  | {
      pingStatus: "degraded";
      assetDownloadType: AssetType;
      assetDownloadResult: BenchmarkResult;
      nodeStatus: DistributionOperatorStatus;
      opereatorMetadata: OperatorMetadata;
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
