import { ElasticClient } from "@joyutils/dwg-utils";
import { z } from "zod";

export type Alert = {
  id: string;
  timestamp: string;
  operator: string;
};

export class AlertsElastic {
  private es: ElasticClient;
  protected constructor(es: ElasticClient) {
    this.es = es;
  }

  static async init(): Promise<AlertsElastic> {
    const es = await ElasticClient.initFromEnv();
    console.log("Connected to Elasticsearch");
    return new AlertsElastic(es);
  }

  async getAlerts(): Promise<Alert[]> {
    const result = await this.es.nativeClient.search({
      index: "kibana-alert-history-distributors",
      body: {
        query: {
          range: {
            "@timestamp": {
              gte: "now-90h/h",
              lte: "now/h",
            },
          },
        },
      },
    });
    const alerts: Alert[] = [];
    for (const hit of result.hits.hits) {
      const parsed = rawAlertSchema.safeParse(hit);
      if (parsed.success) {
        alerts.push({
          id: parsed.data._id,
          timestamp: parsed.data._source["@timestamp"],
          operator: parsed.data._source.kibana.alert.id,
        });
      } else {
        console.error("Couldn't parse ES alert", parsed.error);
      }
    }
    return alerts;
  }
}

const rawAlertSchema = z.object({
  _id: z.string(),
  _source: z.object({
    "@timestamp": z.string(),
    kibana: z.object({
      alert: z.object({
        id: z.string(),
      }),
    }),
  }),
});
