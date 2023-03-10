const request = require("supertest");
const app = require("./app");

describe("Test the root path", () => {
  test("It should response the GET method", async () => {
    const response = await request(app).get("/");
    console.log(response)
    expect(response.text).toBe("hi");
    expect(response.statusCode).toBe(200);
  });
});