import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../slice/userSlice";
import movieSlice from "../slice/movieSlice";
const store = configureStore({
  reducer: {
    user: userSlice,
    movie: movieSlice,
  },
});

export default store;
