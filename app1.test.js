const request = require("supertest");
const app = require("./app1");

describe("Testing", () => {

  test("Testing 1", async () => {
    const response = await request(app).get("/");
    expect(response.text).toBe("slash");
  });

  test("Testing 2", async () => {
    const response = await request(app).get("/hello/a");
    expect(response.text).toBe("hello a");
  });

  test("Testing 3", async () => {
    const response = await request(app).get("/hello/b");
    expect(response.text).toBe("hello b");
  });

});