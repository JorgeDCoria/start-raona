import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie } from "../../types/Movie";
interface moviesState {
  movies: Movie[];
}
const initialState: moviesState = {
  movies: [],
};
export const moviesSlice = createSlice({
  name: "movies",
  initialState: initialState,
  reducers: {
    getMovies: (state, action: PayloadAction<Movie[]>) => {
      state.movies = action.payload;
    },
  },
});

export const { getMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
