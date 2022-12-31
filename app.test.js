const request = require("supertest");
const app = require("./app.js");

describe("TODOs API", () => {
  it("GET /todos --> array todos", () => {
    return request(app)
      .get("/todos")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              name: expect.any(String),
              completed: expect.any(Boolean),
            }),
          ])
        );
      });
  });

  it("GET /todos/id --> specific todo by ID", () => {
    return request(app).get('/todos/123123').expect(404)
  });

  it("GET /todos/id --> 404 if not found", () => {});

  it("POST /todos --> created todos", () => {});

  it("GET /todos --> validates request body", () => {});
});
