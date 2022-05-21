import "./App.css";
import React, { useEffect, useState } from "react";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

// 3d592e2d

const API_URL = "http://www.omdbapi.com?apikey=3d592e2d";
// const movie1 = {
//   Poster: "N/A",
//   Title: "Amazing Spiderman Syndrome",
//   Type: "movie",
//   Year: "2012",
//   imdbID: "tt2586634",
// };

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("SpiderMan");
  }, []);

  return (
    <>
      <div className="app">
        <h1>Movie Land</h1>
      </div>
      <div className="search">
        <input
          placeholder="Search for Movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img src={SearchIcon} alt="search" onClick={() => searchMovies(searchTerm)} />
      </div>
      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies Found</h2>
        </div>
      )}
    </>
  );
};

export default App;
