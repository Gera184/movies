import React from "react";
import "./MovieCard.css";

export const MovieCard = ({
  imdbVotes,
  imdbRating,
  Year,
  Runtime,
  Plot,
  Language,
  Genre,
  Director,
  Country,
  Awards,
  Actors,
}) => {
  return (
    <div class="wrapper">
      <div class="main_card">
        <div class="card_left">
          <div class="card_datails">
            <h1>{Genre}</h1>
            <div class="card_cat">
              <p class="PG">{Country}</p>
              <p class="year">{Year}</p>
              <p class="genre">{Language} </p>
              <p class="time">{Runtime} </p>
            </div>
            <p class="disc">{Plot}</p>
            <p>{Actors}</p>
            <p>Director: {Director}</p>
            <p>{Awards}</p>

            <div class="social-btn">
              <button className="movie-card-btn">
                <i class="fas fa-play"></i> SEE TRAILER
              </button>

              <button className="movie-card-btn">
                <i class="fas fa-download"></i> DOWNLOAD
              </button>

              <button className="movie-card-btn">
                <i class="fas fa-thumbs-up"></i> {imdbVotes}
              </button>

              <button className="movie-card-btn">
                <i class="fas fa-star"></i> {imdbRating}
              </button>
            </div>
          </div>
        </div>
        <div class="card_right">
          <div class="play_btn">
            <a href="https://www.imdb.com/title/tt4912910/" target="_blank"></a>
          </div>
        </div>
      </div>
    </div>
  );
};
