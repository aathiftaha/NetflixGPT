import { useDispatch, useSelector } from "react-redux";
import { addNowPopularMovies } from "../slice/movieSlice";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";

const useNowPopularMovies = () => {
  //fetch Data from TMDB API and update store
  const dispatch = useDispatch();
  const nowPopularMovies = useSelector((store) => store.movie.nowPopularMovies);

  const fetchMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS,
    );
    const data = await response.json();
    dispatch(addNowPopularMovies(data.results));
  };
  useEffect(() => {
    !nowPopularMovies && fetchMovies();
  }, []);
};
export default useNowPopularMovies;
