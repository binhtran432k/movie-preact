import BackdropList from "@/components/BackdropList";
import Banner from "@/components/Banner";
import Navbar from "@/components/NavBar";
import PosterList from "@/components/PosterList";
import {
  fetchActionMovies,
  fetchComedyMovies,
  fetchDiscoverMovies,
  fetchDocumentaries,
  fetchHorrorMovies,
  fetchRomanceMovies,
  fetchTopRated,
  fetchTrendingMovies,
} from "@/services/browseService";
import { Movie, Page } from "@/utils/definitions";
import { AxiosResponse } from "axios";
import { StateUpdater, useEffect, useMemo, useState } from "preact/hooks";

function getRandomIdx(n: number) {
  return Math.floor(Math.random() * n);
}

function fetchMovie(
  fetchFunc: () => Promise<AxiosResponse<Page<Movie>>>,
  setFunc: StateUpdater<Movie[]>,
) {
  fetchFunc()
    .then((res) => {
      setFunc(res.data.results);
    })
    .catch((err) => {
      console.error(err);
    });
}

export default function Browse() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [trending, setTrendingMovies] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);
  const [actionMovies, setActionMovies] = useState<Movie[]>([]);
  const [comedyMovies, setComedyMovies] = useState<Movie[]>([]);
  const [horrorMovies, setHorrorMovies] = useState<Movie[]>([]);
  const [romanceMovies, setRomanceMovies] = useState<Movie[]>([]);
  const [documentaries, setDocumentaries] = useState<Movie[]>([]);
  const [idx, setIdx] = useState(-1);
  const randomIdx = useMemo(() => getRandomIdx(movies.length), [movies.length]);

  useEffect(() => {
    // Get Movies and store it to state
    fetchMovie(fetchDiscoverMovies, setMovies);
    fetchMovie(fetchTrendingMovies, setTrendingMovies);
    fetchMovie(fetchTopRated, setTopRated);
    fetchMovie(fetchActionMovies, setActionMovies);
    fetchMovie(fetchComedyMovies, setComedyMovies);
    fetchMovie(fetchHorrorMovies, setHorrorMovies);
    fetchMovie(fetchRomanceMovies, setRomanceMovies);
    fetchMovie(fetchDocumentaries, setDocumentaries);
  }, []);

  const movie = movies[idx !== -1 ? idx : randomIdx];

  return (
    <div className="mb-16">
      <Navbar />
      <Banner
        imagePath={movie?.backdrop_path || movie?.poster_path}
        name={movie?.name}
        overview={movie?.overview}
      />
      <PosterList movies={movies} idx={idx} setIdx={setIdx} />
      <BackdropList title="Trending" movies={trending} />
      <BackdropList title="Top Rated" movies={topRated} />
      <BackdropList title="Action Movies" movies={actionMovies} />
      <BackdropList title="Comedy Movies" movies={comedyMovies} />
      <BackdropList title="Horror Movies" movies={horrorMovies} />
      <BackdropList title="Romance Movies" movies={romanceMovies} />
      <BackdropList title="Documentaries" movies={documentaries} />
    </div>
  );
}
