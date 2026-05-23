import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../slice/movieSlice";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  //fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const fetchMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS,
    );
    const data = await response.json();
    dispatch(addTopRatedMovies(data.results));
  };
  useEffect(() => {
    fetchMovies();
  }, []);
};
export default useTopRatedMovies;
