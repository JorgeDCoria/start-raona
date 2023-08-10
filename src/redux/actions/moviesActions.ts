import movieService from "../../services/moviesService";
import { getMovies } from "../slices/moviesSlice";
import { addError } from "../slices/errorSlice";
import { Dispatch } from "redux";
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
