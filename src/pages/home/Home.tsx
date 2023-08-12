import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useStore";
import { actionGetMovies } from "../../redux/actions/moviesActions";
import { Modal } from "@fluentui/react";
import { useBoolean } from "@fluentui/react-hooks";
import CardMovie from "../../components/card-movie/CardMovie";
import MovieDetail from "./components/movie-detail/MovieDetail";
import Loading from "../../components/loading/Loading";
import Paginate from "../../components/paginate/Paginate";
import Error from "../../components/error/Error";

/**
 * Componente que representa la página principal de la aplicación.
 * Muestra una lista de películas y permite abrir detalles de una película en un modal.
 * @return {React.FC} componente principal
 */

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.movies);
  const { error } = useAppSelector((state) => state.error);
  const [isModalOpen, { setTrue: showModal, setFalse: hideModal }] =
    useBoolean(false);
  const [idMovie, setIdMovie] = useState<number | null>(null);

  /**
   * Manejador del clic en una película. Abre el modal con los detalles de la película.
   * @function
   * @param {number} id - El ID de la película.
   */
  const handleClick = (id: number) => {
    setIdMovie(id);
    showModal();
  };
  useEffect(() => {
    dispatch(actionGetMovies());
  }, [dispatch]);

  /**
   * Componente funcional que muestra un mensaje cuando no se encuentran resultados.
   * @function
   * @returns {React.FC} El componente del mensaje de "No se encontraron resultados".
   */
  const Empty: React.FC = () => (
    <div className="container-message-empty">
      <h2>No se encotraron Resultados</h2>
    </div>
  );

  if (error) return <Error />;
  else if (!data) return <Loading />;
  else if (!data.results.length) return <Empty />;
  else {
    return (
      <>
        <Paginate />
        <div className="home-containercards">
          {data &&
            data.results.map((movie) => (
              <CardMovie
                key={movie.id}
                movie={movie}
                handleClick={handleClick}
              />
            ))}
        </div>
        <Paginate />
        {isModalOpen && idMovie && (
          <Modal
            isOpen={isModalOpen}
            onDismiss={hideModal}
            isBlocking={false}
            className="home-modal"
          >
            <MovieDetail idMovie={idMovie} />
          </Modal>
        )}
      </>
    );
  }
};

export default Home;
