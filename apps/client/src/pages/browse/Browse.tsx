import Banner from "@/components/Banner";
import Navbar from "@/components/NavBar";
import PosterList from "@/components/PosterList";
import { getDiscoverMovies } from "@/services/browseService";
import { Movie } from "@/utils/definitions";
import { useEffect, useMemo, useState } from "preact/hooks";

function getRandomIdx(n: number) {
  return Math.floor(Math.random() * n);
}

export default function Browse() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [idx, setIdx] = useState(-1);
  const randomIdx = useMemo(() => getRandomIdx(movies.length), [movies.length]);

  useEffect(() => {
    getDiscoverMovies()
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const movie = movies[idx !== -1 ? idx : randomIdx];

  return (
    <>
      <Navbar />
      <Banner
        imagePath={movie?.backdrop_path || movie?.poster_path}
        name={movie?.name}
        overview={movie?.overview}
      />
      <PosterList movies={movies} idx={idx} setIdx={setIdx} />
    </>
  );
}
