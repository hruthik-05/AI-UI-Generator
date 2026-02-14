import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import express from "express";
import cors from "cors";

import planRoute from "./routes/plan.js";
import generateRoute from "./routes/generate.js";
import explainRoute from "./routes/explain.js";

const app = express();

app.use(
  cors({
    origin: [
      "https://ai-ui-generator-seven.vercel.app"
    ],
    methods: ["GET", "POST"],
    credentials: true
  })
);
app.use(express.json());

app.use("/plan", planRoute);
app.use("/generate", generateRoute);
app.use("/explain", explainRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});