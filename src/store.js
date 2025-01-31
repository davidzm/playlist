import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./containers/Movies/moviesSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});
