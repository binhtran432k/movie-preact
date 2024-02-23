import { MovieContext } from "@/store/MovieProvider";
import { Movie } from "@/utils/definitions";
import clsx from "clsx/lite";
import { useContext } from "preact/hooks";
import MovieDetail from "./MovieDetail";
import MovieItem from "./MovieItem";

export default function MovieItemWithDetail({
  x,
  y,
  movie,
  isPoster,
}: {
  x: number;
  y: number;
  movie: Movie;
  isPoster?: boolean;
}) {
  const { coordinate } = useContext(MovieContext);
  const active = coordinate.x === x && coordinate.y === y;

  return (
    <div className={clsx(active && "mb-[45rem] md:mb-[27rem]")}>
      <MovieItem x={x} y={y} movie={movie} isPoster={isPoster} />
      {active && (
        <div className="absolute container left-0 w-full mt-4 px-3">
          <MovieDetail movie={movie} />
        </div>
      )}
    </div>
  );
}
