// import test
import { test, expect } from "vitest";

import app from "../app.js";

// import Supertest function and call it request
import request from "supertest";

// import our function to reset database
import { resetDatabase } from "../DB/scripts/reset-database.js";

import { pool } from "../DB/index.js";

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

test("/quiz/:id", async () => {
  //   await resetDatabase();
  const response = await request(app)
    .get("/api/quiz/1")
    .set("Accept", "application/json");
  //console.log(response.body)
  console.log(response.body);
  expect(response.body.success).toEqual(true);
  //      assert that response body.payload is an array
  expect(response.body.payload.id).toBeTypeOf("number");
  //          assert that user object.username is a string
  expect(response.body.payload.statment).toBeTypeOf("string");
  expect(response.status).toEqual(200);
  //Assert response header - should be json
  expect(response.header["content-type"]).toMatch(/json/);
});
