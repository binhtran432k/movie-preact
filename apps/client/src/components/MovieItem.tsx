import { MovieContext } from "@/store/MovieProvider";
import { getSmallImageUrlFromPath } from "@/utils/api";
import clsx from "clsx/lite";
import { useContext } from "preact/hooks";

export default function MovieItem({
  x,
  y,
  imagePath,
  alt,
}: {
  x: number;
  y: number;
  imagePath: string;
  alt: string;
}) {
  const { coordinate, setCoordinate } = useContext(MovieContext);
  const imageUrl = getSmallImageUrlFromPath(imagePath);
  const active = coordinate.x === x && coordinate.y === y;

  return (
    <button
      type="button"
      onClick={() => (active ? setCoordinate(-1, -1) : setCoordinate(x, y))}
      className="shrink-0"
    >
      <img
        src={imageUrl}
        alt={alt}
        className={clsx(
          "h-full max-w-[10rem] hover:scale-110 transition-transform",
          active && "brightness-50",
        )}
      />
    </button>
  );
}
