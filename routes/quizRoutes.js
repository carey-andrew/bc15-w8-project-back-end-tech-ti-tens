import express from "express";

import * as quizController from "../controllers/quizController.js";

export const quizRoutes = express.Router();

quizRoutes.get("/", quizController.getAllQuestions);

quizRoutes.get("/:id", quizController.getQuestionById);