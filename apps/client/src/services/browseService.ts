import { api } from "@/utils/api";
import { Movie, Page } from "@/utils/definitions";

export async function getDiscoverMovies() {
  return await api.get<Page<Movie>>("/discover/tv", {
    params: {
      with_network: 123,
    },
  });
}
