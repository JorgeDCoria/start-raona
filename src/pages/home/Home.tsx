import { useEffect } from "react";
import LayoutHome from "../../components/layout-home/LayoutHome";
import { useAppDispatch, useAppSelector } from "../../hooks/useStore";
import {
  actionGetMovies,
  actionGetMovieById,
  actionGetMoviesByTitle,
} from "../../redux/actions/moviesActions";
import { PrimaryButton } from "@fluentui/react";
import CardMovie from "../../components/card-movie/CardMovie";
// Una página "Inicio" con el listado de Peliculas
//(visualmente con la imagen, el título y el año de la película) con un buscador por texto en el título.
const Home = () => {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.movies);
  useEffect(() => {
    dispatch(actionGetMoviesByTitle("rambo"));
    // dispatch(actionGetMovieById(614479));
  }, [dispatch]);
  console.log(data);

  return (
    <LayoutHome>
      <h1>HOla mundo</h1>
      <PrimaryButton text="Cambios" className="button-primary" />
      {data && (
        <div className="home-containercards">
          <CardMovie movie={data.results[0]} />
          <CardMovie movie={data.results[2]} />
          <CardMovie movie={data.results[0]} />
          <CardMovie movie={data.results[2]} />
        </div>
      )}
    </LayoutHome>
  );
};

export default Home;
