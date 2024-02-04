import { api } from "@/utils/api";
import { Movie, Page } from "@/utils/definitions";

export async function getTrendingMovies() {
  return api.get<Page<Movie>>("/trending/all/week", {
    params: {
      language: "en-US",
    },
  });
}

export async function getDiscoverMovies() {
  return await api.get<Page<Movie>>("/discover/tv", {
    params: {
      with_network: 123,
    },
  });
}
