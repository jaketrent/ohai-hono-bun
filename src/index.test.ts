import { describe, expect, test } from "bun:test";

import app from ".";

describe("index", () => {
  test("200s", async () => {
    const req = new Request("http://localhost/");
    const res = await app.fetch(req);
    expect(res.status).toBe(200);
  });
});
