import { BenchmarkResult } from "@joyutils/dwg-utils";
import {
  GetDistributorOperatorsQuery,
  GetStorageOperatorsQuery,
} from "./gql/graphql.js";

export type AssetType = "thumbnail" | "media";

export type RawOperatorData =
  | GetDistributorOperatorsQuery["distributionBucketOperators"][number]
  | GetStorageOperatorsQuery["storageBuckets"][number];

export type OperatorType = "distribution" | "storage";

export type GenericOperatorPingResult = {
  time: Date;
  operatorId: string;
  workerId: number;
  bucketId: string;
  nodeEndpoint: string;
  statusEndpoint: string;
  source: string;
  version: string;
  operatorType: OperatorType;
} & (
  | {
      pingStatus: "ok" | "asset-download-failed";
      assetDownloadType: AssetType;
      assetDownloadResult: BenchmarkResult;
      nodeStatus: OperatorNodeStatus;
      chainHeadDiff?: number;
      blocksProcessedDiff?: number;
    }
  | {
      pingStatus: "degraded";
      assetDownloadType: AssetType;
      assetDownloadResult: BenchmarkResult;
      nodeStatus: OperatorNodeStatus;
      refChainHead: number;
      refBlocksProcessed: number;
    }
  | { pingStatus: "dead"; error: string }
);

export type DistributionOperatorPingResult = GenericOperatorPingResult & {
  operatorType: "distribution";
  distributingStatus: "distributing" | "not-distributing";
};

export type StorageOperatorPingResult = GenericOperatorPingResult & {
  operatorType: "storage";
};

export type OperatorQueryNodeStatus = {
  url: string;
  chainHead: number;
  blocksProcessed: number;
};

export type DistributionOperatorNodeStatus = {
  id: string;
  version: string;
  objectsInCache: number;
  storageLimit: number;
  storageUsed: number;
  uptime: number;
  downloadsInProgress: number;
  queryNodeStatus: OperatorQueryNodeStatus;
};

export type StorageOperatorNodeStatus = {
  version: string;
  downloadBuckets: string[];
  uploadBuckets: string[];
  sync: {
    enabled: boolean;
    interval: number;
  };
  cleanup: {
    enabled: boolean;
    interval: number;
  };
  queryNodeStatus: OperatorQueryNodeStatus;
};

export type OperatorNodeStatus =
  | DistributionOperatorNodeStatus
  | StorageOperatorNodeStatus;

export type OperatorPingResult =
  | DistributionOperatorPingResult
  | StorageOperatorPingResult;
