const URL_BASE = import.meta.env.VITE_APP_MOVIE_BASE_URL;
const API_KEY = import.meta.env.VITE_APP_API_KEY;
import axios from "axios";
import { Movie } from "../types/Movie";
import movieAdapter from "../adapters/movieAdapter";

const getMovies = async (): Promise<Movie[] | Error> => {
  try {
    const data: Movie[] = await axios
      .get(`${URL_BASE}popular?api_key=${API_KEY}`)
      .then((result) => {
        return movieAdapter.mapApiToMovies(result.data.results);
      });
    return data;
  } catch (e: any) {
    throw new Error(e);
  }
};

const movieService = {
  getMovies,
};

export default movieService;
