import React from "react";
import classes from "./MovieList.module.css";
import Movie from "./Movie";

function MovieList(props) {
  return (
    <>
      <ul className={classes.movielist}>
        {props.movies.map((movie) => (
          <Movie
            key={movie.id}
            title={movie.title}
            releaseDate={movie.releaseDate}
            openingText={movie.openingText}
            directorName={movie.directorName}
            
          />
        ))}
      </ul>
    </>
  );
}

export default MovieList;
