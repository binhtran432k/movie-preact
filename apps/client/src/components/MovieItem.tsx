import { MovieContext } from "@/store/MovieProvider";
import { getSmallImageUrlFromPath } from "@/utils/api";
import { Movie } from "@/utils/definitions";
import clsx from "clsx/lite";
import { useCallback, useContext } from "preact/hooks";

export default function MovieItem({
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
  const { coordinate, setCoordinate } = useContext(MovieContext);
  const imagePath = isPoster ? movie.poster_path : movie.backdrop_path;
  const imageUrl = imagePath && getSmallImageUrlFromPath(imagePath);
  const active = coordinate.x === x && coordinate.y === y;

  const handleClick = useCallback(
    () => (active ? setCoordinate(-1, -1) : setCoordinate(x, y)),
    [active],
  );

  return (
    <button type="button" onClick={handleClick}>
      <img
        src={imageUrl}
        alt={movie.title ?? movie.name ?? "Movie Name"}
        className={clsx(
          "hover:scale-110 transition-transform object-cover",
          isPoster ? "w-[8.25rem] h-[12rem]" : "w-[10rem] h-[6rem]",
          active && "brightness-50",
        )}
      />
    </button>
  );
}
