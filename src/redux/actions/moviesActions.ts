import movieService from "../../services/moviesService";
import {
  getMovies,
  getMovieById,
  getMoviesByTitle,
} from "../slices/moviesSlice";
import { addError, cleanError } from "../slices/errorSlice";
import { Dispatch } from "redux";
import { type MovieDetail } from "../../types/MovieDetail";

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
