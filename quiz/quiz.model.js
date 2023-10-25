import { pool } from "../db/index.js";

// Function to retrieve statement and answer object from database by ID
export async function getQuestionById(id) {
  const data = await pool.query(`SELECT * FROM "quiz" 
    WHERE id = $1 RETURNING *;`);
  const result = await pool.query(data, [id]);
  return result.rows[0] || null;
}

// getStatementAndAnswerById(1);
