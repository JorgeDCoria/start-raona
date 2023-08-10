import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie } from "../../types/Movie";
import { MovieDetail } from "../../types/MovieDetail";
interface moviesState {
  movies: Movie[];
  detail: Movie | null;
}
const initialState: moviesState = {
  movies: [],
  detail: null,
};
export const moviesSlice = createSlice({
  name: "movies",
  initialState: initialState,
  reducers: {
    getMovies: (state, action: PayloadAction<Movie[]>) => {
      state.movies = action.payload;
    },
    getMovieById: (state, action: PayloadAction<MovieDetail>) => {
      state.detail = action.payload;
    },
  },
});

export const { getMovies, getMovieById } = moviesSlice.actions;
export default moviesSlice.reducer;
