import { fetchMovieDetail } from "@/services/browseService";
import { Movie, MovieVideo } from "@/utils/definitions";
import { memo } from "preact/compat";
import { useEffect, useState } from "preact/hooks";

const MovieDetail = memo(({ movie }: { movie: Movie }) => {
  const [video, setVideo] = useState<MovieVideo>();
  const movieName = movie.title ?? movie.name;

  useEffect(() => {
    if (movie.id) {
      setVideo(undefined);
      fetchMovieDetail(movie.id)
        .then((res) => {
          const trailer = getYouTubeTrailerVideo(res.data.results);
          setVideo(trailer);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [movie.id]);

  return (
    <article className="flex flex-col md:flex-row">
      <div className="p-4 max-h-[25rem] overflow-auto grow">
        <h3 className="text-2xl font-bold pb-4 border-gray-200 border-b-2">
          {movieName}
        </h3>
        <ul className="text-sm font-bold my-3">
          <li>Release Date: {movie.release_date}</li>
          <li>Vote: {movie.vote_average} / 10</li>
        </ul>
        <p className="text-sm">{movie.overview}</p>
      </div>
      {video && (
        <div className="md:w-1/2 h-[18rem] md:h-[25rem] shrink-0 p-2">
          <iframe
            title={movieName}
            src={`https://www.youtube.com/embed/${video.key}`}
            width="100%"
            height="100%"
            frameborder="0"
          />
        </div>
      )}
    </article>
  );
});

function getYouTubeTrailerVideo(videos: MovieVideo[]) {
  const youtubeVideos = videos.filter((m) => m.site === "YouTube");
  const trailerVideo = youtubeVideos.find((m) => m.type === "Trailer");
  if (trailerVideo) {
    return trailerVideo;
  }
  const teaserVideo = youtubeVideos.find((m) => m.type === "Teaser");
  if (teaserVideo) {
    return teaserVideo;
  }
  return undefined;
}

export default MovieDetail;
