import React from "react";
import classes from "./Movie.module.css";


function Movie(props) {
  return (
    <li className={classes.movie}>
      <h2>Title: {props.title}</h2>
      <h3>ReleaseDate: {props.releaseDate}</h3>
      <p>Openingtext: {props.openingText}</p>
      <i>DirecterName: {props.directorName}</i>
    </li>
  );
}

export default Movie;