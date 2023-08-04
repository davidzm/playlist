import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  isMoviesPanelExpanded: false,
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    expandMoviesPanel: (state, action) => {
      state.isMoviesPanelExpanded = action.payload;
    },
    addMovie: (state, action) => {
      state.movies.push(action.payload);
    },
  },
});

export const { expandMoviesPanel, addMovie } = moviesSlice.actions; //eslint-disable-line

export default moviesSlice.reducer;
