import { getRequiredEnv } from "@joyutils/dwg-utils";
import { Alert, AlertsElastic } from "./elastic.js";
import { AlertsStore } from "./store.js";
import { fetch } from "undici";
import cron from "cron";

class Alerter {
  private es: AlertsElastic;
  private store: AlertsStore;
  readonly dwgDiscordWebhookUrl: string;
  readonly swgDiscordWebhookUrl: string;

  protected constructor(
    es: AlertsElastic,
    store: AlertsStore,
    discordWebhookUrl: string,
    swgDiscordWebhookUrl: string,
  ) {
    this.es = es;
    this.store = store;
    this.dwgDiscordWebhookUrl = discordWebhookUrl;
    this.swgDiscordWebhookUrl = swgDiscordWebhookUrl;
  }

  static async init(): Promise<Alerter> {
    const dwgDiscordWebhookUrl = getRequiredEnv("DWG_DISCORD_WEBHOOK_URL");
    const swgDiscordWebhookUrl = getRequiredEnv("SWG_DISCORD_WEBHOOK_URL");
    const es = await AlertsElastic.init();
    const store = await AlertsStore.init();

    return new Alerter(es, store, dwgDiscordWebhookUrl, swgDiscordWebhookUrl);
  }

  async handleAlert(alert: Alert, type: "dwg" | "swg") {
    console.log(`Handling ${type} alert ${alert.id}`);
    try {
      const response = await fetch(
        type === "dwg" ? this.dwgDiscordWebhookUrl : this.swgDiscordWebhookUrl,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: type === "dwg" ? "DWG Alert" : "SWG Alert",
            content: `<@&${
              type === "dwg" ? "979001667934646272" : "979001488481353819"
            }> New incident involving operator ${alert.operator}`,
          }),
        },
      );
      if (response.status !== 204) {
        throw new Error(
          `Discord webhook responded with status ${response.status}`,
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

    const handledAlerts = await this.store.getHandledAlertsIds();
    const handledAlertsLookup = handledAlerts.reduce(
      (acc, id) => {
        acc[id] = true;
        return acc;
      },
      {} as Record<string, boolean>,
    );

    const dwgAlerts = await this.es.getDistributionAlerts();
    const unhandledDwgAlerts = dwgAlerts.filter(
      (alert) => !handledAlertsLookup[alert.id],
    );
    if (unhandledDwgAlerts.length === 0) {
      console.log("No unhandled DWG alerts");
    }
    for (const alert of unhandledDwgAlerts) {
      await this.handleAlert(alert, "dwg");
    }

    const swgAlerts = await this.es.getStorageAlerts();
    const unhandledSwgAlerts = swgAlerts.filter(
      (alert) => !handledAlertsLookup[alert.id],
    );
    if (unhandledSwgAlerts.length === 0) {
      console.log("No unhandled SWG alerts");
    }
    for (const alert of unhandledSwgAlerts) {
      await this.handleAlert(alert, "swg");
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
