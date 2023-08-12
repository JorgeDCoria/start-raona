import React from "react";
import { Movie } from "../../types/Movie";
import { DefaultButton } from "@fluentui/react";

interface CardMovieProps {
  movie: Movie;
  handleClick: (id: number) => void;
}

/**
 * Componente para mostrar detalles de una película en una tarjeta.
 *
 * @component
 * @param {Object} props - Las propiedades del componente.
 * @param {CardMovieProps} props.movie - Los detalles de la película.
 * @param {function} props.handleClick - Función a llamar cuando se hace clic en la tarjeta.
 * @returns {React.FC} - El componente CardMovie.
 */
const CardMovie: React.FC<CardMovieProps> = ({ movie, handleClick }) => {
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
