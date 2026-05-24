import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGPTSearch: false,
    MovieNames: null,
    MovieResults: null,
  },
  reducers: {
    toggleGPTSearchView: (state, action) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
    addGPTMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.MovieNames = movieNames;
      state.MovieResults = movieResults;
    },
    clearGPTMovieResult: (state, action) => {
      state.MovieNames = null;
      state.MovieResults = null;
    },
  },
});

export const { toggleGPTSearchView, addGPTMovieResult, clearGPTMovieResult } =
  gptSlice.actions;
export default gptSlice.reducer;
