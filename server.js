import { app } from "./app.js";

const PORT = process.env.PORT;



app.listen(PORT, function () {
    console.log("Port is running");
  });