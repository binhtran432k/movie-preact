import { MovieContext } from "@/store/MovieProvider";
import { Movie } from "@/utils/definitions";
import { useContext, useMemo } from "preact/hooks";
import Banner from "./Banner";

export default function RandomBanner({ movies }: { movies: Movie[] }) {
  const { coordinate } = useContext(MovieContext);
  const randomIdx = useMemo(() => getRandomIdx(movies.length), [movies.length]);

  const movie = movies[coordinate.y !== -1 ? coordinate.y : randomIdx];
  return (
    <Banner
      imagePath={movie?.backdrop_path || movie?.poster_path}
      name={movie?.title ?? movie?.name}
      overview={movie?.overview}
    />
  );
}

function getRandomIdx(n: number) {
  return Math.floor(Math.random() * n);
}
