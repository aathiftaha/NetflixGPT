import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video absolute text-white bg-gradient-to-r from-black via-black/70 to-transparent">
      {/* Content */}
      <div className="pt-56 px-16 md:px-24">
        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg w-1/2">
          {title}
        </h1>

        {/* Overview */}
        <p className="py-6 text-lg md:text-xl w-1/3 leading-7 text-gray-200">
          {overview}
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          {/* Play Button */}
          <button className="bg-white text-black px-8 py-3 text-xl font-semibold rounded-md hover:bg-gray-400 transition duration-300 cursor-pointer">
            ▶ Play
          </button>

          {/* More Info Button */}
          <button className="bg-gray-500/70 text-white px-8 py-3 text-xl font-semibold rounded-md hover:bg-gray-400/70 transition duration-300 cursor-pointer">
            ⓘ More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
