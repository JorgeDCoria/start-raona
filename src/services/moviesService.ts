const URL_BASE = import.meta.env.VITE_APP_MOVIE_BASE_URL;
const API_KEY = import.meta.env.VITE_APP_API_KEY;
const URL_BASE_IMAGE = import.meta.env.VITE_APP_IMAGE_BASE_URL;
import axios from "axios";
import { Movie } from "../types/Movie";
import movieAdapter from "../adapters/movieAdapter";
import { CustomError } from "../types/CustomError";
import adapterError from "../adapters/errorAdapter";
import { MovieDetail } from "../types/MovieDetail";

/**
 * Function encardada de hacer una peticion a la api y asi obtener un array de peliculas.\n
 * Si la peticion es exitosa la funcion retorna el array de peliculas.\n
 * Si se presentase algun error durante la peticion, la funcion retornara un Error.
 * @returns {Promise<Movie[] | CustomError>} Promise<Movie[] | CustomError>
 */
const getMovies = async (): Promise<Movie[] | CustomError> => {
  try {
    const data: Movie[] = await axios
      .get(`${URL_BASE}popular?api_key=${API_KEY}`)
      .then((result) => {
        let movies = result.data.results;
        movies.forEach((movie: any) => {
          movie.poster_path = `${URL_BASE_IMAGE}${movie.poster_path}?api_key=${API_KEY}`;
        });
        return movieAdapter.mapApiToMovies(movies);
      });
    return data;
  } catch (e: any) {
    throw adapterError.mapResponseErrorToCustomError(e);
  }
};

const getMovieById = async (id: number): Promise<MovieDetail> => {
  try {
    const data = await axios
      .get(`${URL_BASE}${id}?ap_key=${API_KEY}`)
      .then((result) => result.data);
    const movieDetail: MovieDetail = movieAdapter.mapApiToMovieDetail(data);
    return movieDetail;
  } catch (e: any) {
    throw adapterError.mapResponseErrorToCustomError(e);
  }
};

const movieService = {
  getMovies,
  getMovieById,
};

export default movieService;
