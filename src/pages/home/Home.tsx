import { useEffect, useState } from "react";
import LayoutHome from "../../components/layout-home/LayoutHome";
import { useAppDispatch, useAppSelector } from "../../hooks/useStore";
import {
  actionGetMovies,
  actionGetMovieById,
  actionGetMoviesByTitle,
} from "../../redux/actions/moviesActions";
import { PrimaryButton, Modal } from "@fluentui/react";
import { useBoolean } from "@fluentui/react-hooks";
import CardMovie from "../../components/card-movie/CardMovie";
import MovieDetail from "./components/movie-detail/MovieDetail";
import Loading from "../../components/loading/Loading";
import Paginate from "../../components/paginate/Paginate";
// Una página "Inicio" con el listado de Peliculas
//(visualmente con la imagen, el título y el año de la película) con un buscador por texto en el título.
const Home = () => {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.movies);
  const [isModalOpen, { setTrue: showModal, setFalse: hideModal }] =
    useBoolean(false);
  const [idMovie, setIdMovie] = useState<number | null>(null);

  const handleClick = (id: number) => {
    setIdMovie(id);
    showModal();
  };
  useEffect(() => {
    dispatch(actionGetMovies());
  }, [dispatch]);

  return (
    <>
      <Paginate />
      <div className="home-containercards">
        {data &&
          data.results.map((movie) => (
            <CardMovie key={movie.id} movie={movie} handleClick={handleClick} />
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
};

export default Home;
