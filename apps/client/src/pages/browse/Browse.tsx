import Banner from "@/components/Banner";
import Navbar from "@/components/NavBar";
import { getDiscoverMovies } from "@/services/browseService";
import { Movie } from "@/utils/definitions";
import { useEffect, useState } from "preact/hooks";

function getRandomMovieFromList(movies: Movie[]) {
  return movies[Math.floor(Math.random() * movies.length - 1)];
}

export default function Browse() {
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    getDiscoverMovies()
      .then((res) => {
        const validMovies = res.data.results.filter(
          (movie) => movie.backdrop_path && movie.name,
        );
        validMovies.length > 0 && setMovie(getRandomMovieFromList(validMovies));
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Banner
        backdrop_path={movie?.backdrop_path}
        name={movie?.name}
        overview={movie?.overview}
      />
    </>
  );
}
