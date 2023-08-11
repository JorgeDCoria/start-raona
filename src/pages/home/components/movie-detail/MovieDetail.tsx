import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks/useStore";
import { actionGetMovieById } from "../../../../redux/actions/moviesActions";
import Loading from "../../../../components/loading/Loading";

interface MovieDetailProps {
  idMovie: number;
}
const MovieDetail: React.FC<MovieDetailProps> = ({ idMovie }) => {
  const dispatch = useAppDispatch();
  const { detail: movie } = useAppSelector((state) => state.movies);
  useEffect(() => {
    dispatch(actionGetMovieById(idMovie));
  }, []);
  return (
    <div className="modal-movie-detail">
      {movie ? (
        <div>
          <img src={movie?.image} alt="Imagen" />
          <div className="subcontainer">
            <h2>{movie.title}</h2>
            <p className="summary">{movie.summary}</p>
            <div className="data-container">
              <div className="more-info">
                <p className="label">
                  Companias:
                  <span className="data">{movie.productionCompanies}</span>
                </p>
                <p className="label">
                  presupuesto:<span className="data">{movie.budget}</span>
                </p>
                <p className="label">
                  Votos:<span className="data">{movie.voteCount}</span>
                </p>
              </div>
              <div>
                {" "}
                <p>
                  <span className="adult">{movie.adult ? "+16" : "Todos"}</span>
                  <span className="data">{movie.genre}</span>
                </p>
                <p className="label">
                  Fecha de Lanzamiento:{" "}
                  <span className="data">{movie.releaseDate}</span>{" "}
                </p>
                <p className="label">
                  Idioma: <span className="data">{movie.originalLanguage}</span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default MovieDetail;
