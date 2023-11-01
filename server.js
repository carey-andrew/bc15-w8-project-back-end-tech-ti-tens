import { app } from "./app.js";

const PORT = process.env.PORT ?? 5500;

const HOST = process.env.HOST ?? '0.0.0.0';

app.listen(PORT, HOST, function () {
    console.log("Port is running");
  });