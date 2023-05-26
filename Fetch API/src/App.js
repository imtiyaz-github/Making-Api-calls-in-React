import React, { useState, useEffect } from "react";
// import MovieList from "./components/MovieList";
// import "./App.css";

function App() {
  //   const [movies, setMovies] = useState([]);
  //   const [error, setError] = useState(null);
  //   const [isLoading, setIsLoading] = useState(false);

  //   const fetchMoviesHandler = useCallback(async () => {
  //     setIsLoading(true);
  //     setError(null);

  //     try {
  //       const response = await fetch("https://swapi.dev/api/films");
  //       if (!response.ok) {
  //         throw new Error("Something Went Wrong...Retrying");
  //       }

  //       const data = await response.json();

  //       const transformedMovies = data.results.map((movieData) => {
  //         return {
  //           id: movieData.episode_id,
  //           title: movieData.title,
  //           openingText: movieData.opening_crawl,
  //           releaseDate: movieData.release_date,
  //           directorName: movieData.producer,
  //         };
  //       });

  //       setMovies(transformedMovies);
  //     } catch (error) {
  //       setError(error.message);
  //     }
  //     setIsLoading(false);
  //   }, []);

  //   useEffect(() => {
  //     fetchMoviesHandler();
  //   }, [fetchMoviesHandler]);

  //   let content = <p>Found no movies.</p>;

  //   if (movies.length > 0) {
  //     content = <MovieList movies={movies} />;
  //   }

  //   if (error) {
  //     content = <p>{error}</p>;
  //   }

  //   if (isLoading) {
  //     content = <p>Loading....</p>;
  //   }

  //   return (
  //     <React.Fragment>
  //       <section>
  //         <button onClick={fetchMoviesHandler} className="button">
  //           Fetch Movies
  //         </button>
  //       </section>
  //       <section>{content}</section>
  //     </React.Fragment>
  //   );
  // }

  const [data, setData] = useState([]);

  // exmaple 1:fetching data from on API
  useEffect(() => {
    fetch("https://api.example.com/data")
      .then((response) => response.json())
      .then((data) => setData(data));

    //cleaup function (optional)
    return () => {
      console.log("component will unmount");
    };
  }, []);

  //exmaple 2 subscriibing to events

  useEffect(() => {
    const handleClick = () => {
      console.log("Button clicked");
    };
    window.addEventListener("click", handleClick);

    //clean up function

    return () =>{
      
    }
  });

  return <div></div>;
}
export default App;
