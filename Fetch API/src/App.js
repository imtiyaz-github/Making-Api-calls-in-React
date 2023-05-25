import React, { useState, useEffect } from "react";
import MovieList from "./components/MovieList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const [retryTimer, setRetryTimer] = useState(null);

  useEffect(() => {
    if (retryCount > 0) {
      // Start the retry timer
      const timer = setTimeout(fetchMoviesHandler, 5000);
      setRetryTimer(timer);
    }

    return () => {
      // Clear the retry timer on component unmount or when retryCount changes
      clearTimeout(retryTimer);
    };
  }, [retryCount]);

  async function fetchMoviesHandler() {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://swapi.dev/api/film");

      if (!response.ok) {
        throw new Error("Something Went Wrong...Retrying");
      }

      const data = await response.json();

      const transformedMovies = data.results.map((movieData) => ({
        id: movieData.episode_id,
        title: movieData.title,
        openingText: movieData.opening_crawl,
        releaseDate: movieData.release_date,
        directorName: movieData.producer,
      }));

      setIsLoading(false);
      setError(null);
      setMovies(transformedMovies);
      setRetryCount(0); // Reset retry count on successful response
    } catch (error) {
      setError(error.message);
      setRetryCount((prevCount) => prevCount + 1); // Increment retry count on error
    }
    setIsLoading(false);
  }

  function cancelRetryHandler() {
    clearTimeout(retryTimer);
    setRetryCount(0);
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler} className="button">
          Fetch Movies
        </button>
        {retryCount > 0 && (
          <button onClick={cancelRetryHandler} className="button">
            Cancel Retry
          </button>
        )}
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MovieList movies={movies} />}
        {!isLoading && movies.length === 0 && !error && <p>Found no movies</p>}
        {isLoading && <p>Loading...</p>}
        {!isLoading && error && <p>{error}</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
