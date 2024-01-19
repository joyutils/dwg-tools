import { graphql } from "./gql/gql.js";

export const getDistributionOperatorsQueryDocument = graphql(/* GraphQL */ `
  query GetDistributorOperators {
    distributionBucketOperators(where: { status_eq: ACTIVE }) {
      __typename
      id
      workerId
      distributionBucket {
        id
        distributing
        acceptingNewBags
      }
      metadata {
        nodeEndpoint
      }
    }
  }
`);

export const getStorageOperatorsQueryDocument = graphql(/* GraphQL */ `
  query GetStorageOperators {
    storageBuckets(
      where: {
        operatorStatus_json: {
          isTypeOf_eq: "StorageBucketOperatorStatusActive"
        }
      }
    ) {
      __typename
      id
      operatorStatus {
        __typename
        ... on StorageBucketOperatorStatusActive {
          workerId
        }
      }
      operatorMetadata {
        nodeEndpoint
      }
    }
  }
`);
