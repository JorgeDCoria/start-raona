import { useEffect } from "react";
import LayoutHome from "../../components/layout-home/LayoutHome";
import { useAppDispatch, useAppSelector } from "../../hooks/useStore";
import {
  getActionGetMovies,
  actionGetMovieById,
} from "../../redux/actions/moviesActions";
// Una página "Inicio" con el listado de Peliculas
//(visualmente con la imagen, el título y el año de la película) con un buscador por texto en el título.
const Home = () => {
  const dispatch = useAppDispatch();
  const { movies } = useAppSelector((state) => state.movies);
  useEffect(() => {
    //dispatch(getActionGetMovies());
    dispatch(actionGetMovieById(614479));
  }, []);
  console.log(movies);

  return (
    <LayoutHome>
      <h1>HOla mundo</h1>
    </LayoutHome>
  );
};

export default Home;
