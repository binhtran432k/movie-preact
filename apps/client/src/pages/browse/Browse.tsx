import BackdropList from "@/components/BackdropList";
import Navbar from "@/components/NavBar";
import PosterList from "@/components/PosterList";
import RandomBanner from "@/components/RandomBanner";
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
import { MovieProvider } from "@/store/MovieProvider";
import { Movie, Page } from "@/utils/definitions";
import { AxiosResponse } from "axios";
import { memo } from "preact/compat";
import { StateUpdater, useEffect, useState } from "preact/hooks";

const Browse = memo(() => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [trending, setTrendingMovies] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);
  const [actionMovies, setActionMovies] = useState<Movie[]>([]);
  const [comedyMovies, setComedyMovies] = useState<Movie[]>([]);
  const [horrorMovies, setHorrorMovies] = useState<Movie[]>([]);
  const [romanceMovies, setRomanceMovies] = useState<Movie[]>([]);
  const [documentaries, setDocumentaries] = useState<Movie[]>([]);

  useEffect(() => {
    // Get Movies and store it to state in asynchronous
    fetchMovies(fetchDiscoverMovies, setMovies);
    fetchMovies(fetchTrendingMovies, setTrendingMovies);
    fetchMovies(fetchTopRated, setTopRated);
    fetchMovies(fetchActionMovies, setActionMovies);
    fetchMovies(fetchComedyMovies, setComedyMovies);
    fetchMovies(fetchHorrorMovies, setHorrorMovies);
    fetchMovies(fetchRomanceMovies, setRomanceMovies);
    fetchMovies(fetchDocumentaries, setDocumentaries);
  }, []);

  const moviesByType: Array<[string, Movie[]]> = [
    ["Trending", trending],
    ["Top Rated", topRated],
    ["Action Movies", actionMovies],
    ["Comedy Movies", comedyMovies],
    ["Horror Movies", horrorMovies],
    ["Romance Movies", romanceMovies],
    ["Documentaries", documentaries],
  ];

  // There are 2 MovieProvider here
  // The first one is used for Poster List to store the position of poster in one row (x = 0)
  // The second one is used for Backdrop List to store the position of backdrop with:
  // - The Type of movie is used as x
  // - The Movie for each type is used as y
  return (
    <div className="mb-16">
      <Navbar />
      <MovieProvider>
        <RandomBanner movies={movies} />
        <PosterList movies={movies} />
      </MovieProvider>
      <MovieProvider>
        {moviesByType.map(([title, movies], i) => (
          <BackdropList x={i} title={title} movies={movies} />
        ))}
      </MovieProvider>
    </div>
  );
});

function fetchMovies(
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

export default Browse;
