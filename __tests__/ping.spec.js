const request = require("supertest");
const app = require("../src/server");

const SUCCESS_RESPONSE_CODE = 200;

describe("ping", () => {
  it("should return with a 200 response code", () => {
    return request(app)
      .get("/ping")
      .expect(SUCCESS_RESPONSE_CODE)
      .then((res) => {
        expect(res.text).toEqual("pong");
      });
  });
});
