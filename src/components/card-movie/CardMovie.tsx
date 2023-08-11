import React from "react";
import { Movie } from "../../types/Movie";

interface CardMovieProps {
  movie: Movie;
}
const CardMovie: React.FC<CardMovieProps> = ({ movie }) => {
  return (
    <div className="cardmovie-container">
      <img className="cardmovie-img" src={movie.image} alt="" />

      <div className="cardmovie-container-description">
        <div className="subcontainer">
          <h1>{movie.title}</h1>
          <p>{movie.summary}</p>
          <p>Año: {movie.releaseDate}</p>
        </div>
      </div>
    </div>
  );
};

export default CardMovie;
