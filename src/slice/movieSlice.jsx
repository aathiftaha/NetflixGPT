import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: null,
    nowPopularMovies: null,
    nowTopRatedMovies: null,
    nowUpComingMovies: null,
    trailerId: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerId = action.payload;
    },
    addNowPopularMovies: (state, action) => {
      state.nowPopularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.nowTopRatedMovies = action.payload;
    },
    addUpComingMovies: (state, action) => {
      state.nowUpComingMovies = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addNowPopularMovies,
  addTopRatedMovies,
  addUpComingMovies,
} = movieSlice.actions;
export default movieSlice.reducer;
