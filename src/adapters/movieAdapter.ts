import { Movie } from "../types/Movie";
import { MovieDetail } from "../types/MovieDetail";

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
    summary: data.overview,
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

/**
 * mapea un objeto movie de api a un objeto movie definido en el proycto
 * @param data
 * @returns {Movie} objeto mapeado
 */
const mapApiToMovieDetail = (data: any): MovieDetail => {
  return {
    id: data.id,
    image: data.poster_path,
    releaseDate: data.release_date,
    summary: data.overview,
    title: data.title,
    genre: data.genres.map((g: any) => g.name).join(", "),
    adult: data.adult,
    budget: data.budget,
    originalLanguage: data.original_language,
    productionCompanies: data.production_companies
      .map((c: any) => c.name)
      .join(", "),
    languages: data.spoken_languages.map((l: any) => l.english_name).join(", "),
    voteCount: data.vote_count,
  };
};
const movieAdapter = {
  mapApiToMovie,
  mapApiToMovies,
  mapApiToMovieDetail,
};

export default movieAdapter;
