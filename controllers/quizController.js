import * as quizModel from "../models/quizModel.js";

export async function getQuestionById(req, res) {
  const id = req.params.id;
  const question = await quizModel.getQuestionById(id);
  // Assume 404 status if the question is not found
  if (!question) {
    return res
      .status(404)
      .json({ status: "fail", data: { msg: "Statement not found" } });
  }
  res.status(200).json({ status: "success", data: question });
}
// Endpoint to retrieve a all questions

export async function getAllQuestions(req, res) {
  const allQuestions = await quizModel.getAllQuestions();
  res.status(200).json({ status: "success", data: allQuestions });
  // Assume 404 status if the question is not found
  if (!question) {
    return res
      .status(404)
      .json({ status: "fail", data: { msg: "Statement not found" } });
  }
  res.status(200).json({ status: "success", data: question });
}


