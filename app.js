// Import express and morgan to host the server.
import express from "express";
import logger from "morgan";

import { getQuestionById } from "./quiz/quiz.js";

// Initialise the express app
const app = express();
// Retrieve the port number
const PORT = process.env.PORT;

// Endpoint to retrieve a specific artist by id
app.get("/quiz/:id", async function (req, res) {
  const id = req.params.id;
  const question = await getQuestionById(id);
  // Assume 404 status if the question is not found
  if (!question) {
    return res
      .status(404)
      .json({ status: "fail", data: { msg: "Statement not found" } });
  }
  res.status(200).json({ status: "success", data: question });
});

app.listen(PORT, function () {
  console.log("Port is running");
});
