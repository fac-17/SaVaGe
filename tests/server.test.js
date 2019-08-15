const router = require("../src/router");
const test = require("tape");
const supertest = require("supertest");
const fs = require("fs");
const path = require("path");

test("Not found route test", t => {
    supertest(router)
      .get("/hi")
      .expect(404)
      .end((err, res) => {
        t.equal(res.text, "404: File not found");
        t.end();
      });
  });

  test("Is the / route link to /public/html", t => {
    supertest(router)
      .get("/")
      .expect(200)
      .expect("content-type", /html/)
      .end((err, res) => {
        fs.readFile(
          path.join(__dirname, "..", "/public/indexUnprotected.html"),
          "utf8",
          (err, content) => {
            t.equal(res.text, content, "Should have the same content");
            t.end();
          }
        );
      });
  });


