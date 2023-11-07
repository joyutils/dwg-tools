import { getRequiredEnv } from "@joyutils/dwg-utils";
import { Alert, AlertsElastic } from "./elastic";
import { AlertsStore } from "./store";
import { fetch } from "undici";
import cron from "cron";

class Alerter {
  private es: AlertsElastic;
  private store: AlertsStore;
  private discordWebhookUrl: string;

  protected constructor(
    es: AlertsElastic,
    store: AlertsStore,
    discordWebhookUrl: string
  ) {
    this.es = es;
    this.store = store;
    this.discordWebhookUrl = discordWebhookUrl;
  }

  static async init(): Promise<Alerter> {
    const discordWebhookUrl = getRequiredEnv("DISCORD_WEBHOOK_URL");
    const es = await AlertsElastic.init();
    const store = await AlertsStore.init();

    return new Alerter(es, store, discordWebhookUrl);
  }

  async handleAlert(alert: Alert) {
    console.log(`Handling alert ${alert.id}`);
    try {
      const response = await fetch(this.discordWebhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: "DWG alert",
          content: `<@&979001667934646272> New incident involving operator ${alert.operator}`,
        }),
      });
      if (response.status !== 204) {
        throw new Error(
          `Discord webhook responded with status ${response.status}`
        );
      }
      console.log("Sent Discord alert");
    } catch (e) {
      console.error("Failed to send Discord alert");
      console.error(e);
    }
    await this.store.addAlert(alert.id);
  }

  async run() {
    console.log(`Starting alerter run at ${new Date().toISOString()}`);

    const elasticAlerts = await this.es.getAlerts();
    const handledAlerts = await this.store.getHandledAlertsIds();
    const handledAlertsLookup = handledAlerts.reduce(
      (acc, id) => {
        acc[id] = true;
        return acc;
      },
      {} as Record<string, boolean>
    );
    const unhandledAlerts = elasticAlerts.filter(
      (a) => !handledAlertsLookup[a.id]
    );
    if (unhandledAlerts.length === 0) {
      console.log("Done - no unhandled alerts");
      return;
    }
    console.log("Found unhandled alerts", unhandledAlerts);
    for (const alert of unhandledAlerts) {
      await this.handleAlert(alert);
    }

    console.log("Done");
  }
}

const alerter = await Alerter.init();
await alerter.run();
// start cron job every 5 minutes
const cronJob = new cron.CronJob("*/5 * * * *", async () => {
  await alerter.run();
});
cronJob.start();
console.log("Cron job started");
