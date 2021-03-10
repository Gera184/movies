import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
import data from "../data/data.json";
import { MovieCard } from "../movie-card/MovieCard";
import { Col, Container, Row } from "react-bootstrap";

const API_KEY = "f3a08985";

export const Home = () => {
  const [movieName, setMovieName] = useState([]);
  const [movieName2, setMovieName2] = useState([]);
  const [movieName3, setMovieName3] = useState([]);
  const [movieName4, setMovieName4] = useState([]);
  const [movieName5, setMovieName5] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [showResults2, setShowResults2] = useState(false);
  const [showResults3, setShowResults3] = useState(false);
  const [showResults4, setShowResults4] = useState(false);
  const [showResults5, setShowResults5] = useState(false);

  const movies = data;

  var i = Math.floor(Math.random() * movies.length);
  var a = Math.floor(Math.random() * movies.length);
  var h = Math.floor(Math.random() * movies.length);
  var j = Math.floor(Math.random() * movies.length);
  var k = Math.floor(Math.random() * movies.length);

  if (movies[i].MovieName === "") {
    var i = Math.floor(Math.random() * movies.length);
  }
  if (movies[a].MovieName === "") {
    var a = Math.floor(Math.random() * movies.length);
  }
  if (movies[h].MovieName === "") {
    var h = Math.floor(Math.random() * movies.length);
  }
  if (movies[j].MovieName === "") {
    var j = Math.floor(Math.random() * movies.length);
  }
  if (movies[k].MovieName === "") {
    var k = Math.floor(Math.random() * movies.length);
  }

  useEffect(() => {
    axios
      .request(
        `https://www.omdbapi.com/?apikey=${API_KEY}&t=${movies[i].MovieName}`
      )
      .then(function (response) {
        setMovieName(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
    axios
      .request(
        `https://www.omdbapi.com/?apikey=${API_KEY}&t=${movies[a].MovieName}`
      )
      .then(function (response) {
        setMovieName2(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
    axios
      .request(
        `https://www.omdbapi.com/?apikey=${API_KEY}&t=${movies[h].MovieName}`
      )
      .then(function (response) {
        setMovieName3(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
    axios
      .request(
        `https://www.omdbapi.com/?apikey=${API_KEY}&t=${movies[j].MovieName}`
      )
      .then(function (response) {
        setMovieName4(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
    axios
      .request(
        `https://www.omdbapi.com/?apikey=${API_KEY}&t=${movies[k].MovieName}`
      )
      .then(function (response) {
        setMovieName5(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const onClick = () => {
    setShowResults(true);
    setShowResults2(false);
    setShowResults3(false);
    setShowResults4(false);
    setShowResults5(false);
  };

  const onClick2 = () => {
    setShowResults2(true);
    setShowResults(false);
    setShowResults3(false);
    setShowResults4(false);
    setShowResults5(false);
  };
  const onClick3 = () => {
    setShowResults3(true);
    setShowResults2(false);
    setShowResults(false);
    setShowResults4(false);
    setShowResults5(false);
  };
  const onClick4 = () => {
    setShowResults4(true);
    setShowResults2(false);
    setShowResults(false);
    setShowResults3(false);
    setShowResults5(false);
  };
  const onClick5 = () => {
    setShowResults5(true);
    setShowResults2(false);
    setShowResults(false);
    setShowResults3(false);
    setShowResults4(false);
  };

  return (
    <div>
      <Container>
        <Row>
          <div>
            {showResults ? (
              <MovieCard
                imdbVotes={movieName.imdbVotes}
                imdbRating={movieName.imdbRating}
                Year={movieName.Year}
                Runtime={movieName.Runtime}
                Plot={movieName.Plot}
                Language={movieName.Language}
                Genre={movieName.Genre}
                Director={movieName.Director}
                Country={movieName.Country}
                Awards={movieName.Awards}
                Actors={movieName.Actors}
              />
            ) : null}
            {showResults2 ? (
              <MovieCard
                imdbVotes={movieName2.imdbVotes}
                imdbRating={movieName2.imdbRating}
                Year={movieName2.Year}
                Runtime={movieName2.Runtime}
                Plot={movieName2.Plot}
                Language={movieName2.Language}
                Genre={movieName2.Genre}
                Director={movieName2.Director}
                Country={movieName2.Country}
                Awards={movieName2.Awards}
                Actors={movieName2.Actors}
              />
            ) : null}
            {showResults3 ? (
              <MovieCard
                imdbVotes={movieName3.imdbVotes}
                imdbRating={movieName3.imdbRating}
                Year={movieName3.Year}
                Runtime={movieName3.Runtime}
                Plot={movieName3.Plot}
                Language={movieName3.Language}
                Genre={movieName3.Genre}
                Director={movieName3.Director}
                Country={movieName3.Country}
                Awards={movieName3.Awards}
                Actors={movieName3.Actors}
              />
            ) : null}
            {showResults4 ? (
              <MovieCard
                imdbVotes={movieName4.imdbVotes}
                imdbRating={movieName4.imdbRating}
                Year={movieName4.Year}
                Runtime={movieName4.Runtime}
                Plot={movieName4.Plot}
                Language={movieName4.Language}
                Genre={movieName4.Genre}
                Director={movieName4.Director}
                Country={movieName4.Country}
                Awards={movieName4.Awards}
                Actors={movieName4.Actors}
              />
            ) : null}
            {showResults5 ? (
              <MovieCard
                imdbVotes={movieName5.imdbVotes}
                imdbRating={movieName5.imdbRating}
                Year={movieName5.Year}
                Runtime={movieName5.Runtime}
                Plot={movieName5.Plot}
                Language={movieName5.Language}
                Genre={movieName5.Genre}
                Director={movieName5.Director}
                Country={movieName5.Country}
                Awards={movieName5.Awards}
                Actors={movieName5.Actors}
              />
            ) : null}
          </div>
        </Row>
      </Container>
      <div class="container">
        <a onClick={onClick} class="item">
          <img src={movieName.Poster} alt="" />
          <p>{movieName.Title} </p>
        </a>
        <a onClick={onClick2} class="item">
          <img src={movieName2.Poster} alt="" />
          <p>{movieName2.Title} </p>
        </a>
        <a onClick={onClick3} class="item">
          <img src={movieName3.Poster} alt="" />
          <p>{movieName3.Title} </p>
        </a>
        <a onClick={onClick4} class="item">
          <img src={movieName4.Poster} alt="" />
          <p>{movieName4.Title} </p>
        </a>
        <a onClick={onClick5} class="item">
          <img src={movieName5.Poster} alt="" />
          <p>{movieName5.Title} </p>
        </a>
      </div>
    </div>
  );
};
