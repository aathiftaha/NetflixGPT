import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovieSuggestions = () => {
  const gpt = useSelector((store) => store.gpt);

  const { MovieResults, MovieNames } = gpt;

  if (!MovieNames || !MovieResults) return null;

  return (
    <div className="relative z-10 w-full min-h-screen px-4 md:px-10  bg-gradient-to-b from-black via-zinc-900 to-black text-white">
      {/* Heading */}
      <div className="mb-10 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-red-500 drop-shadow-lg">
          AI Movie Recommendations
        </h1>

        <p className="text-gray-400 mt-3 text-sm md:text-lg">
          Discover movies recommended by AI based on your search
        </p>
      </div>

      {/* Movie Lists */}
      <div className="space-y-12">
        {MovieNames.map((movieName, index) => (
          <div
            key={movieName}
            className="bg-zinc-900/70 backdrop-blur-md border border-zinc-800 rounded-2xl p-5 shadow-2xl hover:scale-[1.01] transition duration-300"
          >
            <MovieList title={movieName} moviesData={MovieResults[index]} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GPTMovieSuggestions;
