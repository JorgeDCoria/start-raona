const URL_BASE = import.meta.env.VITE_APP_MOVIE_BASE_URL;
const API_KEY = import.meta.env.VITE_APP_API_KEY;
import axios from "axios";
import { Movie } from "../types/Movie";
import movieAdapter from "../adapters/movieAdapter";
import { CustomError } from "../types/CustomError";

const getMovies = async (): Promise<Movie[] | CustomError> => {
  try {
    const data: Movie[] = await axios
      .get(`${URL_BASE}populr?api_key=${API_KEY}`)
      .then((result) => {
        return movieAdapter.mapApiToMovies(result.data.results);
      });
    return data;
  } catch (e: any) {
    const customError: CustomError = {
      status: e.response.status,
      message: e.message,
      messageCode: e.code,
      messageApi: e.response.data.status_message,
      statusCodeApi: e.response.data.status_code,
    };
    console.log(e);

    console.log(customError);

    throw customError;
  }
};

const movieService = {
  getMovies,
};

export default movieService;
