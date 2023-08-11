import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie } from "../../types/Movie";
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
export const moviesSlice = createSlice({
  name: "movies",
  initialState: initialState,
  reducers: {
    getMovies: (state, action: PayloadAction<DataApi>) => {
      state.data = action.payload;
    },
    getMoviesByTitle: (state, action: PayloadAction<DataApi>) => {
      state.data = action.payload;
    },
    getMovieById: (state, action: PayloadAction<MovieDetail>) => {
      state.detail = action.payload;
    },
  },
});

export const { getMovies, getMovieById, getMoviesByTitle } =
  moviesSlice.actions;
export default moviesSlice.reducer;
