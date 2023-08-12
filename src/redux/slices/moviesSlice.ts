import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MovieDetail } from "../../types/MovieDetail";
import { DataApi } from "../../types/DataApi";

interface MoviesState {
  data: DataApi | null;
  detail: MovieDetail | null;
}
const initialState: MoviesState = {
  data: null,
  detail: null,
};

// Crea un slice de Redux para el manejo de estado de películas.
export const moviesSlice = createSlice({
  name: "movies", // Nombre del slice.
  initialState: initialState,
  reducers: {
    // Reducer para almacenar la lista de películas en el estado.
    getMovies: (state, action: PayloadAction<DataApi>) => {
      state.data = action.payload;
    },
    // Reducer para almacenar la lista de películas filtradas por título en el estado.
    getMoviesByTitle: (state, action: PayloadAction<DataApi>) => {
      state.data = action.payload;
    },
    //Reducer para almacenar la pelicula filtrada por Id
    getMovieById: (state, action: PayloadAction<MovieDetail>) => {
      state.detail = action.payload;
    },
    // Reducer para limpiar los detalles de la película en el estado.
    clearMovieDetail: (state, action) => {
      state.detail = action.payload;
    },
  },
});

export const { getMovies, getMovieById, getMoviesByTitle, clearMovieDetail } =
  moviesSlice.actions;
export default moviesSlice.reducer;
