import movieService from "../../services/moviesService";
import { getMovies, getMovieById } from "../slices/moviesSlice";
import { addError } from "../slices/errorSlice";
import { Dispatch } from "redux";
import { type MovieDetail } from "../../types/MovieDetail";
import { CustomError } from "../../types/CustomError";
export const getActionGetMovies = () => {
  return async (dispatch: Dispatch) => {
    try {
      const movies = await movieService.getMovies();
      Array.isArray(movies) && dispatch(getMovies(movies));
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
