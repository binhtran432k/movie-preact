import { MovieContext } from "@/store/MovieProvider";
import { Movie } from "@/utils/definitions";
import clsx from "clsx/lite";
import { useContext } from "preact/hooks";
import MovieDetail from "./MovieDetail";
import MovieItem from "./MovieItem";

export default function BackdropList({
  x,
  title,
  movies,
}: {
  x: number;
  title: string;
  movies: Movie[];
}) {
  const { coordinate } = useContext(MovieContext);
  const active = coordinate.x === x;

  return (
    <div className="container mx-auto mt-12">
      <h3 className="px-1 font-bold text-xl">{title}</h3>
      <div className="scrollbar-transparent px-3 py-4 flex items-start gap-3 overflow-x-auto">
        {movies.map(
          (movie, i) =>
            movie.backdrop_path && (
              <MovieItem
                x={x}
                y={i}
                key={movie.id}
                imagePath={movie.backdrop_path}
                alt={movie.title ?? movie.name ?? "Movie Name"}
              />
            ),
        )}
      </div>
      <div
        className={clsx(
          "m-4 transition-opacity duration-500",
          !active && "opacity-0",
        )}
      >
        {active && <MovieDetail movie={movies[coordinate.y]} />}
      </div>
    </div>
  );
}
