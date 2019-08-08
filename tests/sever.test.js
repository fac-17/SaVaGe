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

