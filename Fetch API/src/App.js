import React, { useState } from "react";
import MovieList from "./components/MovieList";
// import Movie from "./components/Movie";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);

  async function fetchMoviesHandler() {
    try {
      const respose = await fetch("https://swapi.dev/api/films/");
      const data = await respose.json();

      const transFormMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
          directorName: movieData.producer,
        };
      });
      setMovies(transFormMovies);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MovieList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
