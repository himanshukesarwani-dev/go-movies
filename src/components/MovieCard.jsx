import React from "react";
import shawshank from "../images/shawshank.jpg";
import dark_knight from "../images/dark_knight.jpg";
import fight_club from "../images/fight_club.jpg";
import forrest_gump from "../images/forrest_gump.jpg";
import godfather from "../images/godfather.jpg";
import good_bad_ugly from "../images/good_bad_ugly.jpg";
import inception from "../images/inception.jpg";
import lotr_fellowship from "../images/lotr_fellowship.jpg";
import lotr_return_king from "../images/lotr_return_king.jpg";
import pulp_fiction from "../images/pulp_fiction.jpg";

const images = [
  shawshank,
  godfather,
  dark_knight,
  pulp_fiction,
  lotr_return_king,
  good_bad_ugly,
  fight_club,
  lotr_fellowship,
  forrest_gump,
  inception,
];

function MovieCard({ movie }) {
  return (
    <div key={movie?.id} className="movie-card">
      <div className="movie-card-img-container">
        <img className="movie-card-image" src={images[movie?.id - 1]} />
      </div>
      <div className="movie-card-details-container">
        <h3>{movie.movie}</h3>
        <p>Rating: {movie.rating}/10</p>
        <a style={{ display: "block" }} href={movie?.imdb_url} target="_blank">
          Know More!
        </a>
      </div>
    </div>
  );
}

export { MovieCard };
