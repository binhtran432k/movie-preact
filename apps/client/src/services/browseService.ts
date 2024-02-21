import { api } from "@/utils/api";
import { Movie, Page } from "@/utils/definitions";

export async function fetchTrendingMovies() {
  return api.get<Page<Movie>>("/trending/all/week", {
    params: {
      language: "en-US",
    },
  });
}

export async function fetchTopRated() {
  return api.get<Page<Movie>>("/movie/top_rated", {
    params: {
      language: "en-US",
    },
  });
}

export async function fetchActionMovies() {
  return api.get<Page<Movie>>("/discover/movie", {
    params: {
      with_genres: 28,
    },
  });
}

export async function fetchComedyMovies() {
  return api.get<Page<Movie>>("/discover/movie", {
    params: {
      with_genres: 35,
    },
  });
}

export async function fetchHorrorMovies() {
  return api.get<Page<Movie>>("/discover/movie", {
    params: {
      with_genres: 27,
    },
  });
}

export async function fetchRomanceMovies() {
  return api.get<Page<Movie>>("/discover/movie", {
    params: {
      with_genres: 10749,
    },
  });
}

export async function fetchDocumentaries() {
  return api.get<Page<Movie>>("/discover/movie", {
    params: {
      with_genres: 99,
    },
  });
}

export async function fetchDiscoverMovies() {
  return await api.get<Page<Movie>>("/discover/tv", {
    params: {
      with_network: 123,
    },
  });
}
