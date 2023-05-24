import React from "react";
import classes from "./Movie.module.css";


function Movie(props) {
  return (
    <section className={classes.main}>
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>ReleaseDate: {props.releaseDate}</h3>
      <p>Openingtext: {props.openingText}</p>
      <i>DirecterName: {props.directorName}</i>
    </li>
    </section>
  );
}

export default Movie;
