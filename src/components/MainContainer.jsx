import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import SecondaryContainer from "./SecondaryContainer";

const MainContainer = () => {
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);
  const popularMovies = useSelector((store) => store.movie?.nowPopularMovies);
  const topRatedMovies = useSelector((store) => store.movie?.nowTopRatedMovies);
  const upComingMovies = useSelector((store) => store.movie?.nowUpComingMovies);
  console.log(topRatedMovies);
  //   if (movies === null) return (if movies value is null return immediately);
  if (!movies) return;
  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie;
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
      <SecondaryContainer
        moviesData={movies}
        popularMovies={popularMovies}
        topRatedMovies={topRatedMovies}
        upComingMovies={upComingMovies}
      />
    </div>
  );
};

export default MainContainer;
