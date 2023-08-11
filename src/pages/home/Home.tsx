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
    dispatch(actionGetMoviesByTitle("rambo"));
    // dispatch(actionGetMovieById(614479));
  }, [dispatch]);
  console.log(data);

  return (
    <>
      <h1>HOla mundo</h1>
      <PrimaryButton text="Cambios" className="button-primary" />
      <div className="home-containercards">
        {data &&
          data.results.map((movie) => (
            <CardMovie key={movie.id} movie={movie} handleClick={handleClick} />
          ))}
      </div>

      {isModalOpen && idMovie ? (
        <Modal isOpen={isModalOpen} onDismiss={hideModal} isBlocking={false}>
          <MovieDetail idMovie={idMovie} />
        </Modal>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Home;
