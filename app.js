// Import express and morgan to host the server.
import express from "express";
import logger from "morgan";

// Initialise the express app
const app = express();
// Retrieve the port number
const PORT = process.env.PORT;

app.listen(PORT, function () {
  console.log("Port is running");
});
