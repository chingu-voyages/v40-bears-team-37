// grab sensitive information from .env file
require("dotenv").config();

const getEnvSafely = (envKey: string) => {
  const envValue = process.env[envKey];

  if (!envValue) {
    throw new Error(`Couldn't get environment variable:: ${envKey}`);
  }
  return envValue;
};

// from .env file
export const BACKEND_URL = getEnvSafely("BACKEND_URL");
export const FRONTEND_URL = getEnvSafely("FRONTEND_URL");
export const MONGO_URL = getEnvSafely("MONGO_URL");
export const COOKIE_NAME = getEnvSafely("COOKIE_NAME");
export const COOKIE_SECRET = getEnvSafely("COOKIE_SECRET");

// default env stuffs
export const IS_PROD = process.env.NODE_ENV === "production";
export const PORT = process.env.PORT || 4000;
