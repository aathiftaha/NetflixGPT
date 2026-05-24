import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addWatchMovie } from "../slice/movieSlice";
const useWatchVideo = (movieId) => {
  const dispatch = useDispatch();
  
  const fetchWatchMovies = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS,
      );
      const data = await response.json();
      dispatch(addWatchMovie(data.results));
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchWatchMovies();
  }, []);
};

export default useWatchVideo;
