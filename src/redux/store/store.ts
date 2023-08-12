import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../slices/moviesSlice";
import errorReducer from "../slices/errorSlice";
// Configura Redux con los reducers de películas y errores.
export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    error: errorReducer,
  },
});

// Define los tipos de estado y despatch para utilizar en toda la aplicación.
export type RootState = ReturnType<typeof store.getState>;
// Tipo para manejar acciones.
export type AppDispatch = typeof store.dispatch;
