export interface Page<T> {
  id?: number;
  page?: number;
  results: T[];
  total_pages?: number;
  total_results?: number;
}

export interface Movie {
  id?: number;
  title?: string;
  backdrop_path?: string;
  poster_path?: string;
  name?: string;
  overview?: string;
  vote_average?: number;
  release_date?: string;
}

export interface MovieVideo {
  key?: string;
  site: string;
  type: string;
}
