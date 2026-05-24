import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../slice/movieSlice";
import { useEffect } from "react";

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();
  const trailerId = useSelector((store) => store.movie?.trailerId);
  const getMovieById = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS,
    );
    const data = await response.json();
    const filterVideos = data.results.filter(
      (videos) => videos.type === "Trailer",
    );
    const trailer = filterVideos.length ? filterVideos[0] : data[0];
    dispatch(addTrailerVideo(trailer?.key));
  };
  useEffect(() => {
    !trailerId && getMovieById();
  }, []);

  return trailerId;
};

export default useTrailerVideo;
