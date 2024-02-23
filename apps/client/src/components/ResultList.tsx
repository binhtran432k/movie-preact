import { searchMovies } from "@/services/searchService";
import { MovieContext } from "@/store/MovieProvider";
import { SearchContext } from "@/store/SearchProvider";
import { Movie } from "@/utils/definitions";
import { memo, useContext, useEffect, useState } from "preact/compat";
import MovieItemWithDetail from "./MovieItemWithDetail";

// This component is used to avoid rerender movies when typing
const CachedMovies = memo(({ movies }: { movies: Movie[] }) => {
  return (
    <div className="relative p-4 flex flex-wrap gap-2 items-start justify-center">
      {movies.length === 0 && (
        <h4 className="w-full text-center text-2xl">No Results Found</h4>
      )}
      {movies.map(
        (movie, i) =>
          movie.poster_path && (
            <MovieItemWithDetail x={0} y={i} movie={movie} isPoster />
          ),
      )}
      {
        // Fake items to apply left align to last items
        [...Array(10)].map(() => (
          <div className="w-[8.25rem]" />
        ))
      }
    </div>
  );
});

export default function ResultList() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const { value } = useContext(SearchContext);
  const { setCoordinate } = useContext(MovieContext);

  useEffect(() => {
    const debounceId = setTimeout(() => {
      setCoordinate(-1, -1);
      if (value) {
        searchMovies(value)
          .then((res) => {
            setMovies(res.data.results);
          })
          .catch((err) => {
            console.error(err);
          });
      } else {
        setMovies([]);
      }
    }, 500);
    return () => clearTimeout(debounceId);
  }, [value]);

  return (
    <section>
      <h3 className="text-lg font-bold">Search Result</h3>
      <CachedMovies movies={movies} />
    </section>
  );
}
