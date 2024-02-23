import { searchMovies } from "@/services/searchService";
import { SearchContext } from "@/store/SearchProvider";
import { Movie } from "@/utils/definitions";
import { memo, useContext, useEffect, useState } from "preact/compat";
import MovieItem from "./MovieItem";

const ResultList = memo(() => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const { value } = useContext(SearchContext);
  useEffect(() => {
    const debounceId = setTimeout(() => {
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
      <div className="p-4 flex flex-wrap gap-2 items-start">
        {movies.map(
          (movie, i) =>
            movie.poster_path && (
              <MovieItem
                x={0}
                y={i}
                imagePath={movie.poster_path}
                alt={movie.title ?? movie.name ?? "Movie Name"}
                isPoster
              />
            ),
        )}
      </div>
    </section>
  );
});

export default ResultList;
