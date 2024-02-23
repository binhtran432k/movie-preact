import { Movie } from "@/utils/definitions";
import MovieItem from "./MovieItem";

export default function PosterList({ movies }: { movies: Movie[] }) {
  return (
    <div className="container mx-auto">
      <div className="scrollbar-transparent px-3 pt-8 pb-6 flex gap-2 h-[16rem] overflow-x-auto">
        {movies.map(
          (movie, i) =>
            movie.poster_path && (
              <MovieItem
                x={0}
                y={i}
                key={movie.id}
                imagePath={movie.poster_path}
                alt={movie.name ?? "Movie Name"}
              />
            ),
        )}
      </div>
    </div>
  );
}
