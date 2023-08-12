const URL_BASE = import.meta.env.VITE_APP_MOVIE_BASE_URL;
const API_KEY = import.meta.env.VITE_APP_API_KEY;
const URL_BASE_IMAGE = import.meta.env.VITE_APP_IMAGE_BASE_URL;
import axios from "axios";
import movieAdapter from "../adapters/movieAdapter";
import adapterError from "../adapters/errorAdapter";
import { MovieDetail } from "../types/MovieDetail";
import { DataApi } from "../types/DataApi";

const addUrlToImage = (data: any[]): void => {
  data.forEach((movie: any) => {
    movie.poster_path = `${URL_BASE_IMAGE}${movie.poster_path}`;
  });
};

/**
 * Function encardada de hacer una peticion a la api y asi obtener un array de peliculas.\n
 * Si la peticion es exitosa la funcion retorna el array de peliculas.\n
 * Si se presentase algun error durante la peticion, la funcion retornara un Error.
 * @returns {Promise<DataApi>} Promise<Movie[] | CustomError>
 */
const getMovies = async (page: number): Promise<DataApi> => {
  try {
    const data: DataApi = await axios
      .get(`${URL_BASE}movie/popular?page=${page}&api_key=${API_KEY}`)
      .then((result) => {
        let movies = result.data.results;
        addUrlToImage(movies);
        const dataApi: DataApi = {
          page: result.data.page,
          results: movieAdapter.mapApiToMovies(movies),
          totalPages: result.data.total_pages,
          totalResults: result.data.total_results,
        };
        return dataApi;
      });
    return data;
  } catch (e: any) {
    throw adapterError.mapResponseErrorToCustomError(e);
  }
};

const getMoviesByTitle = async (
  title: string,
  page: number,
): Promise<DataApi> => {
  try {
    let data: any = await axios
      .get(
        `${URL_BASE}search/movie?query=${title}&include_adult=false&page=${page}&api_key=${API_KEY}`,
      )
      .then((result) => result.data);
    addUrlToImage(data.results);
    const dataApi: DataApi = {
      page: data.page,
      results: movieAdapter.mapApiToMovies(data.results),
      totalPages: data.total_pages,
      totalResults: data.total_results,
    };
    return dataApi;
  } catch (e: any) {
    console.log(e);
    throw adapterError.mapResponseErrorToCustomError(e);
  }
};
const getMovieById = async (id: number): Promise<MovieDetail> => {
  try {
    let data = await axios
      .get(`${URL_BASE}movie/${id}?api_key=${API_KEY}`)
      .then((result) => result.data);
    data.poster_path = `${URL_BASE_IMAGE}${data.poster_path}`;
    const movieDetail: MovieDetail = movieAdapter.mapApiToMovieDetail(data);
    return movieDetail;
  } catch (e: any) {
    throw adapterError.mapResponseErrorToCustomError(e);
  }
};

const movieService = {
  getMovies,
  getMoviesByTitle,
  getMovieById,
};

export default movieService;
