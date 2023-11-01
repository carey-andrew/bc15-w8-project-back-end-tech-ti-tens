// import test
import { test, expect } from "vitest";

import { app } from "../app.js";

// import Supertest function and call it request
import request from "supertest";

// import our function to reset database
import { resetDatabase } from "../DB/scripts/reset-database.js";

import { pool } from "../DB/index.js";

// Test 1 - Health Check
test("Check health of app", async function () {
  //    call `request` and pass in the Express app as an argument
  //    await the overall expression and assign it to a `response` constant
  //    send a GET request to the /api/health endpoint
  const response = await request(app)
    .get("/api/health")
    .set("Accept", "application/json");

  //    console.log `response.body` for now to at least see a result
  //console.log(response.header)

  // write assertion for headers to match json
  expect(response.header["content-type"]).toMatch(/json/);
  // write assertion for status response toEqual(200)
  expect(response.status).toEqual(200);
  // write assertion for response.body toEqual response
  expect(response.body).toEqual({
    success: true,
    payload: "API is running correctly",
  });
});

// Test 2 Get Question By ID
test("/quiz/:id", async () => {
  // await resetDatabase();
  const response = await request(app).get("/quiz/8");
  // .set("Accept", "application/json");
  console.log(response.body.status);

  expect(response.status).toEqual(200);
  // Assert response header - should be JSON
  expect(response.get("content-type")).toMatch(/json/);
  // Check the structure and data types of the response
  expect(response.body).toBeTypeOf("object")
  expect(response.body.status).toEqual("success");
  expect(typeof response.body.data.id).toEqual("number");
  expect(typeof response.body.data.statement).toEqual("string");
  expect(typeof response.body.data.answer).toEqual("string");
});
