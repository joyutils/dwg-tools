import { getEnv, getRequiredEnv } from "@joyutils/dwg-utils";
import { AssetType, OperatorType } from "./types";

export const GRAPHQL_URL = "https://query.joystream.org/graphql";

export const SOURCE_ID = getRequiredEnv("SOURCE_ID");
export const TEST_INTERVAL_MIN = getEnv("TEST_INTERVAL_MIN", "5");
export const SINGLE_RUN = getEnv("SINGLE_RUN", undefined) === "true";
export const DEBUG = getEnv("DEBUG", undefined) === "true";
export const MEDIA_DOWNLOAD_SIZE = parseInt(
  getEnv("MEDIA_DOWNLOAD_SIZE", 5 * 1e6) as string,
);

const DISTRIBUTOR_THUMBNAIL_TEST_OBJECT_ID = getEnv(
  "DISTRIBUTOR_THUMBNAIL_TEST_OBJECT_ID",
  "1343",
);
const DISTRIBUTOR_MEDIA_TEST_OBJECT_ID = getEnv(
  "DISTRIBUTOR_MEDIA_TEST_OBJECT_ID",
  "552149",
);
const STORAGE_THUMBNAIL_TEST_OBJECT_ID_MAPPING_RAW = getRequiredEnv(
  "STORAGE_THUMBNAIL_TEST_OBJECT_ID_MAPPING",
);
const STORAGE_MEDIA_TEST_OBJECT_ID_MAPPING_RAW = getRequiredEnv(
  "STORAGE_MEDIA_TEST_OBJECT_ID_MAPPING",
);
const STORAGE_THUMBNAIL_TEST_OBJECT_ID_MAPPING: Record<string, string> = {};
const STORAGE_MEDIA_TEST_OBJECT_ID_MAPPING: Record<string, string> = {};
STORAGE_THUMBNAIL_TEST_OBJECT_ID_MAPPING_RAW.split(";").forEach((mapping) => {
  const [objectId, bucketIds] = mapping.split(":");
  bucketIds.split(",").forEach((bucketId) => {
    STORAGE_THUMBNAIL_TEST_OBJECT_ID_MAPPING[bucketId] = objectId;
  });
});
STORAGE_MEDIA_TEST_OBJECT_ID_MAPPING_RAW.split(";").forEach((mapping) => {
  const [objectId, bucketIds] = mapping.split(":");
  bucketIds.split(",").forEach((bucketId) => {
    STORAGE_MEDIA_TEST_OBJECT_ID_MAPPING[bucketId] = objectId;
  });
});

export function getTestObjectId(
  operatorType: OperatorType,
  bucketId?: string,
): [AssetType, string | undefined] {
  if (operatorType === "storage" && !bucketId) {
    throw new Error("bucketId is required for storage operators");
  }

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
      testObjectId = STORAGE_MEDIA_TEST_OBJECT_ID_MAPPING[bucketId!];
    } else {
      testObjectId = STORAGE_THUMBNAIL_TEST_OBJECT_ID_MAPPING[bucketId!];
    }
  }

  return [assetType, testObjectId];
}
