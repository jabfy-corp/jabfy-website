import express from "express";
import cors from "cors";
import helmet from "helmet";

import { env } from "./config/env.js";
import { projectRouter } from "./routes/project.routes.js";
import { contactRouter } from "./routes/contact.routes.js";
import { newsletterRouter } from "./routes/newsletter.routes.js";
import { notFoundMiddleware } from "./middlewares/not-found.middleware.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";

export const app = express();

app.use(helmet());

app.use(
  cors({
    origin: env.frontendUrl
  })
);

app.use(express.json({ limit: "1mb" }));

app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    service: "jabfy-website-backend",
    environment: env.nodeEnv
  });
});

app.use("/api/project", projectRouter);
app.use("/api/contact", contactRouter);
app.use("/api/newsletter", newsletterRouter);

app.use(notFoundMiddleware);
app.use(errorMiddleware);