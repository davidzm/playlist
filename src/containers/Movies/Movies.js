import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMovie } from "./moviesSlice";

const Movies = () => {
  const dispatch = useDispatch();
  const { moviesList } = useSelector((state) => state.movies);

  const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const onAddMovie = () => {
    const random = getRandom(1, 100);
    dispatch(addMovie(random));
  };

  return (
    <div>
      <button onClick={onAddMovie}>Add</button>
      {moviesList.map((x) => (
        <div>{x}</div>
      ))}
    </div>
  );
};

export default Movies;
