import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    // HACK: Use gzip to solve bun brotli issue in testing, see https://github.com/oven-sh/bun/issues/267
    "Accept-Encoding": process.env.NODE_ENV === "test" ? "gzip" : undefined,
    Accept: "application/json",
    Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
  },
});
