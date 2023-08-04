import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./containers/donationHistoryPanelSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer
  }
});
