import React, { useCallback, useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import AddMovie from "./components/AddMovie";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log("ekstra");

  const fetchMoviHandler = useCallback(async () => {
    try {
      console.log("1");
      setIsLoading(true);
      setError(null);
      console.log("wait or not");
      const response = await fetch(
        "https://http-request-1cf75-default-rtdb.firebaseio.com/myMovies.json"
      );
      if (!response.ok) {
        throw new Error("somthing went wrong!");
      }
      console.log("2");
      const data = await response.json();
      console.log("3");

      let turnsToData = [];
      for (const key in data) {
        turnsToData.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }

      const movieList = turnsToData.map((movieItem) => {
        return {
          id: movieItem.episode_id,
          title: movieItem.title,
          openingText: movieItem.opening_crawl,
          releaseDate: movieItem.release_date,
        };
      });
      setMovies(movieList);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    console.log("useefect worked");
    fetchMoviHandler();
  }, [fetchMoviHandler]);

  console.log("4");
  console.log(isLoading);

  let content = <p>no found movies</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>loading...</p>;
  }

  const addMovieHandler = async (movie) => {
    const response = await fetch(
      "https://http-request-1cf75-default-rtdb.firebaseio.com/myMovies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: { "Content-type": "application-json" },
      }
    );
    const data = response.json();
    console.log(data);
  };
  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
      {console.log("5")}
    </React.Fragment>
  );
}

export default App;
