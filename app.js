import express from "express";
import logger from "morgan";

import quizRouter from "./quiz/quiz.router.js";

const app = express();

app.use(logger("dev"));
app.use(express.json());
// app.use(express.static("public"));

app.use("/api/quiz", quizRouter);

app.use(function (_req, res, _next) {
  res.status(404).json({
    success: false,
    error:
      "We couldn't find what you were looking for 😞. Did you send the request to the right path?",
  });
});

app.use(function (err, _req, res, _next) {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    error: "Something went wrong, please try again later",
  });
});

export default app;
