import movieService from "../../services/moviesService";
import {
  getMovies,
  getMovieById,
  getMoviesByTitle,
  clearMovieDetail,
} from "../slices/moviesSlice";
import { addError, cleanError } from "../slices/errorSlice";
import { Dispatch } from "redux";
import { type MovieDetail } from "../../types/MovieDetail";

/**
 * Acción asíncrona para obtener la lista de películas.
 * @function
 * @param {number} [page=1] - Número de página de la lista de películas.
 */
export const actionGetMovies = (page: number = 1) => {
  return async (dispatch: Dispatch) => {
    try {
      const data = await movieService.getMovies(page);
      dispatch(getMovies(data));
    } catch (e: any) {
      dispatch(addError(e));
    }
  };
};

/**
 * Acción asíncrona para obtener la lista de películas por título .
 * @function
 * @param {string} title - Título de la película a buscar.
 * @param {number} [page=1] - Número de página de la lista de películas.
 */
export const actionGetMoviesByTitle = (title: string, page: number = 1) => {
  return async (dispatch: Dispatch) => {
    try {
      const data = await movieService.getMoviesByTitle(title, page);
      dispatch(getMoviesByTitle(data));
      dispatch(cleanError(null));
    } catch (e: any) {
      dispatch(addError(e));
    }
  };
};

/**
 * Acción asíncrona para obtener los detalles de una película por su ID.
 * @function
 * @param {number} id - ID de la película a obtener detalles.
 */
export const actionGetMovieById = (id: number) => {
  return async (dispatch: Dispatch) => {
    try {
      const movieDetail: MovieDetail = await movieService.getMovieById(id);
      dispatch(getMovieById(movieDetail));
    } catch (e: any) {
      dispatch(addError(e));
    }
  };
};
/**
 * Acción para limpiar los detalles de la película almacenados en el estado.
 * @function
 */
export const actionClearMovieDetail = () => {
  return async (dispatch: Dispatch) => {
    dispatch(clearMovieDetail(null));
  };
};
