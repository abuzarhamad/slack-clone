import dns from "node:dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);


import express from "express";
import dotenv from "dotenv";
import Connectdb from "./config/db.js";
import { ENV } from "./config/env.js";

dotenv.config();


const app = express();

app.get("/api/test", (req, res) => {
  res.send("Hello, World!");
});

Connectdb()
  .then(() => {
    app.listen(ENV.PORT, () => {
      console.log(`Server is running on http://localhost:${ENV.PORT}`);
    });
  })

  .catch(() => {
    console.log("internal server error");
  });
