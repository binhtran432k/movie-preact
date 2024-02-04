import { Movie } from "@/utils/definitions";
import { useCallback } from "preact/hooks";
import SimpleBar from "simplebar-react";
import MovieItem from "./MovieItem";

export default function PosterList({
  movies,
  idx,
  setIdx,
}: { movies: Movie[]; idx: number; setIdx: (idx: number) => void }) {
  const getSetActiveOrResetById = useCallback((idx: number) => {
    return (active: boolean) => (!active ? setIdx(idx) : setIdx(-1));
  }, []);

  return (
    <SimpleBar className="container mx-auto">
      <div className="px-3 pt-8 pb-6 flex gap-2 h-[16rem]">
        {movies.map(
          (movie, i) =>
            movie.poster_path && (
              <MovieItem
                key={movie.id}
                imagePath={movie.poster_path}
                alt={movie.name ?? "Movie Name"}
                active={idx === i}
                onClick={getSetActiveOrResetById(i)}
              />
            ),
        )}
      </div>
    </SimpleBar>
  );
}
