import { getDiscoverMovies } from "@/services/browseService";
import { getImageUrlFromPath } from "@/utils/api";
import { Movie } from "@/utils/definitions";
import { truncateString } from "@/utils/string";
import { useEffect, useState } from "preact/hooks";

const BACK_DROP_IMAGE = "linear-gradient(#0000001f, #0000001f)";

export function Banner() {
  const [movie, setMovie] = useState<Movie>();
  const imageUrl = getImageUrlFromPath(movie?.backdrop_path);

  useEffect(() => {
    getDiscoverMovies()
      .then((res) => {
        const validMovies = res.data.results.filter(
          (movie) => movie.backdrop_path && movie.name,
        );
        setMovie(getRandomMovieFromList(validMovies));
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div
      className="h-[18rem] bg-[image:var(--bg-image)] bg-[position:center_30%] bg-cover flex items-end"
      style={{
        "--bg-image": `${BACK_DROP_IMAGE}, url('${imageUrl}')`,
      }}
    >
      {movie && getBannerBody(movie)}
    </div>
  );
}

function getRandomMovieFromList(movies: Movie[]) {
  return movies[Math.floor(Math.random() * movies.length - 1)];
}

function getBannerBody(movie: Movie) {
  return (
    <div className="container mx-auto pb-12 px-4">
      <div className="max-w-[20rem]">
        <h2 className="text-3xl font-bold mb-7">{movie.name}</h2>
        <div className="flex gap-x-2 text-sm font-bold mb-1">
          <button
            type="button"
            className="bg-gray-300 bg-opacity-30 hover:bg-opacity-50 py-0.5 px-4 rounded"
          >
            Play
          </button>
          <button
            type="button"
            className="bg-gray-300 bg-opacity-30 hover:bg-opacity-50 py-0.5 px-4 rounded"
          >
            My List
          </button>
        </div>
        <p className="text-xs font-bold">
          {truncateString(movie.overview, 150)}
        </p>
      </div>
    </div>
  );
}
