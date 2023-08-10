import { Movie } from "../types/Movie";

/**
 * Funcion definida para mapear un objeto movie de la api a un
 * objeto Movie.
 *
 * @param data objeto que contiene propiedades de una pelicula de la api
 * @returns Object de tipo Movie
 */
const mapApiToMovie = (data: any): Movie => {
  return {
    id: data.id,
    image: data.poster_path,
    releaseDate: data.release_date,
    summary: data.overView,
    title: data.title,
  };
};

/**
 * Funcion que recibe por parametro un array con los datos de peliculas
 * de la api y retorna un array con objetos de tipo Movie.
 * @param data Array de objetos con datos de las peliculas de la api.
 * @returns Movie[] array con objetos mapeados
 */
const mapApiToMovies = (data: any[]): Movie[] => {
  const movies: Movie[] = data.map((m) => mapApiToMovie(m));
  return movies;
};

const movieAdapter = {
  mapApiToMovie,
  mapApiToMovies,
};

export default movieAdapter;
