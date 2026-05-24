import React from "react";
import { useSelector } from "react-redux";
import useWatchVideo from "../hooks/useWatchVideo";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Play } from "lucide-react";

const WatchMovie = () => {
  const { id } = useParams();

  useWatchVideo(id);

  const watchMovieData = useSelector((store) => store.movie.watchMovieId);

  if (!watchMovieData) {
    return (
      <div className="w-screen h-screen bg-black flex items-center justify-center">
        <div className="text-white text-2xl font-bold animate-pulse">
          Loading Trailer...
        </div>
      </div>
    );
  }

  const filterWatchMovie = watchMovieData.find(
    (watchMovie) => watchMovie.type === "Trailer",
  );

  if (!filterWatchMovie) {
    return (
      <div className="w-screen h-screen bg-black flex items-center justify-center text-white text-2xl">
        No Trailer Available
      </div>
    );
  }

  return (
    <div className="relative w-screen h-screen bg-black overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black z-10"></div>

      {/* Back Button */}
      <Link
        to="/browse"
        className="absolute top-6 left-6 z-30 flex items-center gap-2 bg-black/70 hover:bg-red-600 text-white px-5 py-3 rounded-full transition duration-300 backdrop-blur-md shadow-lg"
      >
        <ArrowLeft size={20} />
        Back
      </Link>

      {/* Movie Player */}
      <iframe
        className="w-full h-full aspect-video"
        src={`https://www.youtube.com/embed/${filterWatchMovie.key}?autoplay=1&mute=0&controls=1&showinfo=0&rel=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      {/* Bottom Overlay */}
      <div className="absolute bottom-0 left-0 w-full z-20 bg-gradient-to-t from-black via-black/70 to-transparent px-6 md:px-14 py-10">
        <div className="flex items-center gap-3 mb-3">
          <div className="bg-red-600 p-3 rounded-full shadow-lg">
            <Play size={20} fill="white" />
          </div>

          <h1 className="text-white text-3xl md:text-5xl font-extrabold drop-shadow-lg">
            Watch Trailer
          </h1>
        </div>

        <p className="text-gray-300 text-sm md:text-lg max-w-3xl leading-relaxed">
          Enjoy the official trailer experience with immersive full-screen
          playback.
        </p>
      </div>
    </div>
  );
};

export default WatchMovie;
