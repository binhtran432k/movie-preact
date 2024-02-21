export interface Page<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

export interface Movie {
  id?: string;
  backdrop_path?: string;
  poster_path?: string;
  name?: string;
  overview?: string;
}
