import React, { useEffect, useState } from "react";
import axios from "axios";
import { MovieCard } from "../movie-card/MovieCard";

const API_KEY = "f3a08985";

export const Deatils = () => {
  const [movie, setMovie] = useState([]);
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);

  const onClick = () => {
    axios
      .request(`https://www.omdbapi.com/?apikey=${API_KEY}&t=${query.trim()}`)
      .then(function (response) {
        setMovie(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
    setShowResults(true);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Movie name"
        className="movie-name-input"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <button className="search-btn" type="button" onClick={onClick}>
        Search
      </button>
      {showResults ? (
        <MovieCard
          imdbVotes={movie.imdbVotes}
          imdbRating={movie.imdbRating}
          Year={movie.Year}
          Runtime={movie.Runtime}
          Plot={movie.Plot}
          Language={movie.Language}
          Genre={movie.Genre}
          Director={movie.Director}
          Country={movie.Country}
          Awards={movie.Awards}
          Actors={movie.Actors}
          image={movie.Poster}
        />
      ) : null}
    </div>
  );
};
