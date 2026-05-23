import MovieList from "./MovieList";
const SecondaryContainer = ({
  moviesData,
  popularMovies,
  topRatedMovies,
  upComingMovies,
}) => {
  console.log(topRatedMovies);
  {
    /* MovieList - Popular
      MovieCards in Horizontal
        MovieList - Now Playing
        MovieList - Trending
        */
  }
  return (
    <div className="-mt-10">
      <MovieList title="Now Playing" moviesData={moviesData} />
      <MovieList title="Popular" moviesData={popularMovies} />
      <MovieList title="Top 10" moviesData={topRatedMovies} />
      <MovieList title="Up Coming Movies" moviesData={upComingMovies} />
    </div>
  );
};

export default SecondaryContainer;
