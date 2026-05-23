import React from "react";
import { MOVIE_IMAGE_URL } from "../utils/constant";

const MovieCard = ({ movie }) => {
  if (!movie) return null;

  const { title, poster_path } = movie;

  return (
    <div className="w-48 pr-4">
      <img
        className="w-full aspect-[2/3] object-cover rounded-md"
        src={poster_path ? MOVIE_IMAGE_URL + poster_path : ""}
        alt={title}
      />
    </div>
  );
};

export default MovieCard;
