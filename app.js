// Import express and morgan to host the server.
import express from "express";
import logger from "morgan";
import cors from "cors";

import { quizRoutes } from "./routes/quizRoutes.js";

// Initialise the express app
export const app = express();

app.use(cors());

// initialise morgan app
app.use(logger("dev"));

app.use("/quiz", quizRoutes);

/**
 * Useful for checking whether the server itself is running and can provide a simple response to a simple request.
 */
app.get("/api/health", (req, res) => {
    res.json({
      success: true,
      payload: "API is running correctly",
    });
  });
