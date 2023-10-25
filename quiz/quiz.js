import { pool } from "../../DB/index.js";

// Creating a function to return a question/answer by ID
export async function getQuestionById(id) {
  // Define query that returns a question from the quiz table - store in a variable
  const queryText = "SELECT * FROM quiz WHERE id = $1";
  // Send request to database by using the pool object using ID as parameter to prevent SQL injection
  const result = await pool.query(queryText, [id]);
  // Then return the result contain the the question and answer by selected id
  return result.rows[0] || null;
}
