import { Movie } from "@/utils/definitions";
import { useCallback, useState } from "preact/hooks";
import SimpleBar from "simplebar-react";
import MovieItem from "./MovieItem";

export default function BackdropList({
  title,
  movies,
}: {
  title: string;
  movies: Movie[];
}) {
  const [idx, setIdx] = useState(-1);

  const getSetActiveOrResetById = useCallback((idx: number) => {
    return (active: boolean) => (!active ? setIdx(idx) : setIdx(-1));
  }, []);

  return (
    <div className="container mx-auto mt-12">
      <h3 className="px-1 font-bold text-xl">{title}</h3>
      <SimpleBar>
        <div className="px-3 py-4 flex gap-3 h-[8rem]">
          {movies.map(
            (movie, i) =>
              movie.backdrop_path && (
                <MovieItem
                  key={movie.id}
                  imagePath={movie.backdrop_path}
                  alt={movie.name ?? "Movie Name"}
                  active={idx === i}
                  onClick={getSetActiveOrResetById(i)}
                />
              ),
          )}
        </div>
      </SimpleBar>
    </div>
  );
}
