import { describe, expect, test } from "bun:test";
import { api } from "./api";

describe("api", () => {
  test("get data", async () => {
    const res = await api.get("/genre/movie/list");
    expect(res.status).toBe(200);
    expect(res.data.genres).toBeArray();
    expect(res.data.genres.length).toBePositive();
  });
});
