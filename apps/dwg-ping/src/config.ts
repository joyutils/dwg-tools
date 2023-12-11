import { getEnv, getRequiredEnv } from "@joyutils/dwg-utils";

export const GRAPHQL_URL = "https://query.joystream.org/graphql";

export const SOURCE_ID = getRequiredEnv("SOURCE_ID");
export const TEST_INTERVAL_MIN = getEnv("TEST_INTERVAL_MIN", "5");
export const SINGLE_RUN = getEnv("SINGLE_RUN", undefined) === "true";
