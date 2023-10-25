import express from "express";
const router = express.Router();

import { getQuestionById } from "./quiz.model.js";

router.get("/:id", async function (req, res) {
  const id = Number(req.params.id);
  const result = await getQuestionById(id);
  res.json({ success: true, payload: result });
});

export default router;
