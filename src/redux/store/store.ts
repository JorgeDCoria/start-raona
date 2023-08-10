import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../slices/moviesSlice";
import errorReducer from "../slices/errorSlice";
export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    error: errorReducer,
  },
});

//se define typos para solucionar algunos typados para que typescript reconozca los typos definidos en redux
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
