import { app } from "./app.js";

const PORT = process.env.PORT;

const HOST = process.env.HOST ?? '0.0.0.0';

app.listen(PORT, HOST, function () {
    console.log("Port is running");
  });