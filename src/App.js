import React, { useEffect, useState } from "react";
import "./style.css";
import searchIcon from "./assets/search-icon.webp";
import { MovieCard } from "./components/MovieCard";
import { Navbar } from "./components/Navbar";

const apiURL = `https://dummyapi.online/api/movies`;

const getData = async () => {
  const response = await fetch(apiURL);
  const res = await response.json();
  return res;
};

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setMovies(data);
    };

    fetchData();
  }, []);

  console.log(movies);
  return (
    <div className="App">
      <Navbar />
      <div className="movies-container">
        {movies.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
