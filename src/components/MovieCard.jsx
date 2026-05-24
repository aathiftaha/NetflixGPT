import React from "react";
import { MOVIE_IMAGE_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addMovieId } from "../slice/movieSlice";
const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  if (!movie) return null;

  const { title, poster_path, id } = movie;

  if (!poster_path) return null;
  const handleShowMovie = (id) => {
    dispatch(addMovieId(id));
  };

  return (
    <div onClick={() => handleShowMovie(id)} className="w-48 pr-4">
      <img
        className="w-full aspect-[2/3] object-cover rounded-md"
        src={poster_path ? MOVIE_IMAGE_URL + poster_path : ""}
        alt={title}
      />
    </div>
  );
};

export default MovieCard;
