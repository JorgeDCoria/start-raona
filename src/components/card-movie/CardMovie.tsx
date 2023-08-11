import React from "react";
import { Movie } from "../../types/Movie";
import { DefaultButton } from "@fluentui/react";

import { useNavigate } from "react-router-dom";
interface CardMovieProps {
  movie: Movie;
  handleClick: (id: number) => void;
}
const CardMovie: React.FC<CardMovieProps> = ({ movie, handleClick }) => {
  const navigate = useNavigate();

  return (
    <div
      className="cardmovie-container"
      onTouchStart={() => handleClick(movie.id)}
    >
      <img className="cardmovie-img" src={movie.image} alt="" />

      <div className="cardmovie-container-description">
        <div className="subcontainer">
          <h1>{movie.title}</h1>
          <p>{movie.summary.slice(0, 400)}...</p>
          <DefaultButton
            text="Ver mas"
            onClick={() => handleClick(movie.id)}
            className="button-default"
          />
          <p>Año: {movie.releaseDate}</p>
        </div>
      </div>
    </div>
  );
};

export default CardMovie;
