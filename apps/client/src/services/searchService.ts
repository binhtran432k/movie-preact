import { api } from "@/utils/api";
import { Movie, Page } from "@/utils/definitions";

export async function searchMovies(query: string) {
  return api.get<Page<Movie>>("/search/movie", {
    params: {
      query,
      language: "en-US",
    },
  });
}
