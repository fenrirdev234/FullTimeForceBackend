import dotenv from "dotenv";
import fs from "fs";

if (fs.existsSync(".env")) {
  dotenv.config({ path: ".env" });
} else {
  console.error(".env file not found.");
}

export const ENVIRONMENT = process.env.NODE_ENV;

const prod = ENVIRONMENT === "production";

export const PORT = process.env.PORT || 3001;
export const COOKIE_KEY = process.env.COOKIE_KEY;
export const NODE_ENV = process.env.NODE_ENV;
export const MONGO_USER = process.env.MONGO_USER;
export const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
export const MONGO_HOSTNAME = process.env.MONGO_HOSTNAME;
export const MONGO_DATABASE = process.env.MONGO_DATABASE;
export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
export const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
export const GOOGLE_CALLBACK = process.env.GOOGLE_CALLBACK;
export const FRONTEND_REDIRECT = process.env.FRONTEND_REDIRECT;
