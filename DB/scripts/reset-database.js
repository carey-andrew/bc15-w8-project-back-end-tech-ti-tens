import { pool } from "../index.js";

async function resetDatabase() {
  try {
    // Drop existing tables if they exist
    await pool.query(`
      DROP TABLE IF EXISTS quiz CASCADE;
    `);

    // Create the artists table
    await pool.query(`
      CREATE TABLE quiz (
        id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        statement VARCHAR(255) NOT NULL,
        answer VARCHAR(255) NOT NULL
      );
    `);

    // Seed the quiz table
    await pool.query(`
      INSERT INTO quiz (statement, answer)
      VALUES 
      ('HTML stands for Hyper Text Markup Language.', 'True'),
    ('HTML is a programming language.', 'False'),
    ('HTML is used for structuring the content of a web page.', 'True'),
    ('The HTML <div> element is used to define a hyperlink.', 'False'),
    ('HTML tags are not case-sensitive.', 'False'),
    ('The <head> section of an HTML document typically contains metadata and links to external resources.', 'True'),
    ('HTML comments are visible on the web page when viewed in a web browser.', 'False');
    ('CSS stands for Cascading Style Sheets.', 'True'),
    ('CSS is used to define the structure of a web page.', 'False'),
    ('Inline styles take precedence over external styles in CSS.', 'True'),
    ('CSS can be applied to HTML elements using class and ID selectors.', 'True'),
    ('The box model in CSS consists of content, padding, border, and margin.', 'True'),
    ('CSS Flexbox is used for creating two-dimensional layouts.', 'True'),
    ('Media queries in CSS are used for making web pages responsive to different screen sizes.', 'True');
    ('JavaScript is a scripting language used for adding interactivity to web pages.', 'True'),
    ('JavaScript code can only be executed on the server-side.', 'False'),
    ('JavaScript variables must be declared using the "var" keyword.', 'False'),
    ('JavaScript is case-sensitive.', 'True'),
    ('JavaScript uses "==" for strict equality comparison.', 'False'),
    ('The "document.getElementById" method is used to manipulate the content of an HTML element with a specific ID.', 'True');
    `);

    console.log("Database reset successful");
  } catch (error) {
    console.error("Database reset failed: ", error);
  } finally {
    // End the pool
    await pool.end();
  }
}

await resetDatabase();
