import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../slice/userSlice";
import movieSlice from "../slice/movieSlice";
import gptSlice from "../slice/gptSlice";
import configSlice from "../slice/configSlice";
const store = configureStore({
  reducer: {
    user: userSlice,
    movie: movieSlice,
    gpt: gptSlice,
    config: configSlice,
  },
});

export default store;
