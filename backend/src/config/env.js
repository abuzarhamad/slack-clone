import dotenv from "dotenv";
dotenv.config();

export const ENV = {
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
  Node_ENV: process.env.NODE_ENV,
  STREAM_API_KEY: process.env.STREAM_API_KEY,
  STREAM_API_SECRET: process.env.STREAM_API_SECRET,
  CLERK_API_KEY: process.env.CLERK_API_KEY,
  CLERK_API_SECRET: process.env.CLERK_API_SECRET,
  INGEST_EVENTS_KEY: process.env.INGEST_EVENTS_KEY,
  INGEST_SIGNIN_KEY: process.env.INGEST_SIGNIN_KEY
};
