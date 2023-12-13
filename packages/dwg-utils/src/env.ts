import "dotenv/config";

export const getRequiredEnv = (name: string): string => {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required env var ${name}`);
  }
  return value;
};

export const getEnv = <T = undefined>(
  name: string,
  defaultValue: T,
): string | T => {
  const value = process.env[name];
  return value ?? defaultValue;
};
