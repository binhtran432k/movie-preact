export interface Page<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

export interface Movie {
  backdrop_path?: string;
  name?: string;
  overview?: string;
}
