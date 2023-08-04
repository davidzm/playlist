import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  moviesList: [],
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      if (state.moviesList) {
        state.moviesList.push(action.payload);
      }
    },
  },
});

export const { addMovie } = moviesSlice.actions;

export default moviesSlice.reducer;
