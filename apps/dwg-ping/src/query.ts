import { graphql } from "./gql/gql.js";

export const getOperatorsDataQueryDocument = graphql(/* GraphQL */ `
  query GetDistributorOperators {
    distributionBucketOperators(where: { status_eq: ACTIVE }) {
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
