
import dns from "node:dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

import express from "express";
import dotenv from "dotenv";
import Connectdb from "./config/db.js";
import { ENV } from "./config/env.js";
import { clerkMiddleware } from "@clerk/express";
import { serve } from "inngest/express";

import { inngests } from "./inngest/client.js";
import { functions } from "./inngest/functions.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(clerkMiddleware());

app.use(
  "/api/inngest",
  serve({
    client: inngests,
    functions,
  })
);

app.get("/api/test", (req, res) => {
  res.send("Hello, World!");
});

const startServer = async () => {
  try {
    await Connectdb();

    if (ENV.Node_ENV !== "production") {
      app.listen(ENV.PORT, () => {
        console.log(`Server is running on http://localhost:${ENV.PORT}`);
      });
    }
  } catch (error) {
    console.log("Error in Starting server", error);
    process.exit(1);
  }
};

startServer();

export default app;
