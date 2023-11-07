import { getRequiredEnv } from "@joyutils/dwg-utils";
import fs from "node:fs/promises";
import { z } from "zod";

const alertsSchema = z.array(z.string());

export class AlertsStore {
  private filePath: string;

  protected constructor(path: string) {
    this.filePath = path;
  }

  static async init(): Promise<AlertsStore> {
    const filePath = getRequiredEnv("ALERTS_FILE_PATH");
    try {
      await fs.access(filePath);
    } catch (e) {
      if ((e as any)?.code !== "ENOENT") {
        throw e;
      }
      console.log("Creating empty alerts file");
      await fs.writeFile(filePath, JSON.stringify([]));
    }
    return new AlertsStore(filePath);
  }

  async getHandledAlertsIds(): Promise<string[]> {
    const rawAlerts = await fs.readFile(this.filePath, "utf-8");
    const alerts = JSON.parse(rawAlerts);
    const parsed = alertsSchema.safeParse(alerts);
    if (parsed.success) {
      return parsed.data;
    } else {
      console.error(parsed.error);
      throw new Error("Couldn't parse alerts file");
    }
  }

  async addAlert(alert: string): Promise<void> {
    const alerts = await this.getHandledAlertsIds();
    alerts.push(alert);
    try {
      await fs.writeFile(this.filePath, JSON.stringify(alerts));
    } catch (e) {
      console.error("Failed to write alerts file");
      console.error(e);
    }
  }
}
