import { useDispatch, useSelector } from "react-redux";
import { addUpComingMovies } from "../slice/movieSlice";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";

const useUpComingMovies = () => {
  //fetch Data from TMDB API and update store
  const dispatch = useDispatch();
  const nowUpComingMovies = useSelector(
    (store) => store.movie.nowUpComingMovies,
  );

  const fetchMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS,
    );
    const data = await response.json();
    dispatch(addUpComingMovies(data.results));
  };
  useEffect(() => {
    !nowUpComingMovies && fetchMovies();
  }, []);
};
export default useUpComingMovies;
