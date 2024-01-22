import { Client } from "@elastic/elasticsearch";
import { getRequiredEnv } from "./env";

export class ElasticClient {
  nativeClient: Client;
  protected constructor(nativeClient: Client) {
    this.nativeClient = nativeClient;
  }

  static async init(config: ElasticConfig): Promise<ElasticClient> {
    const esClient = new Client({
      node: config.url,
      auth: {
        username: config.username,
        password: config.password,
      },
    });
    const pingOk = await esClient.ping();

    if (!pingOk) {
      throw new Error("Elastic ping failed");
    }

    return new ElasticClient(esClient);
  }

  static async initFromEnv(): Promise<ElasticClient> {
    return await ElasticClient.init(getEnvElasticConfig());
  }

  async writeDocuments(
    indexName: string,
    documents: object[],
  ): Promise<boolean> {
    const body = documents.flatMap((d) => [
      { index: { _index: indexName } },
      d,
    ]);
    try {
      await this.nativeClient.bulk({ body });
      return true;
    } catch (e) {
      console.error("Failed to send results to Elasticsearch");
      console.error(e);
      return false;
    }
  }
}

export type ElasticConfig = {
  url: string;
  username: string;
  password: string;
};

function getEnvElasticConfig(): ElasticConfig {
  return {
    url: getRequiredEnv("ELASTICSEARCH_URL"),
    username: getRequiredEnv("ELASTICSEARCH_USERNAME"),
    password: getRequiredEnv("ELASTICSEARCH_PASSWORD"),
  };
}
