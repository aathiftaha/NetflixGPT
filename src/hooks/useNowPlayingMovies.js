import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../slice/movieSlice";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  //fetch Data from TMDB API and update store
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector((store) => store.movie.nowPlayingMovies);

  const fetchMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS,
    );
    const data = await response.json();
    dispatch(addNowPlayingMovies(data.results));
  };
  useEffect(() => {
    !nowPlayingMovies && fetchMovies();
  }, []);
};
export default useNowPlayingMovies;
