import movieService from "../../services/moviesService";
import { getMovies } from "../slices/moviesSlice";
import { Dispatch } from "redux";
export const getActionGetMovies = () => {
  return async (dispatch: Dispatch) => {
    try {
      const movies = await movieService.getMovies();
      Array.isArray(movies) && dispatch(getMovies(movies));
    } catch (e: any) {
      console.log(e.message);
    }
  };
};
