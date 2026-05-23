import MovieCard from "./MovieCard";

const MovieList = ({ title, moviesData }) => {
  if (!moviesData) return null;

  return (
    <div className="px-12 py-4 bg-black">
      {/* Title (make sure visible) */}
      <h1 className="text-4xl py-6 text-white">{title}</h1>
      <div className="flex overflow-x-scroll p-6">
        {/* Scroll row */}
        <div className="flex">
          {moviesData.length > 0
            ? moviesData.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))
            : "No Movies Available"}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
