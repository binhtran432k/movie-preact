import { Movie } from "@/utils/definitions";
import MovieItem from "./MovieItem";

export default function PosterList({ movies }: { movies: Movie[] }) {
  return (
    <div className="container mx-auto">
      <div className="scrollbar-transparent px-3 pt-8 pb-6 flex items-start gap-2 overflow-x-auto">
        {movies.map(
          (movie, i) =>
            movie.poster_path && (
              <div className="shrink-0">
                <MovieItem x={0} y={i} key={movie.id} movie={movie} isPoster />
              </div>
            ),
        )}
      </div>
    </div>
  );
}
