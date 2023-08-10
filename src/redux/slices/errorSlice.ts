import { createSlice } from "@reduxjs/toolkit";
import { CustomError } from "../../types/CustomError";

interface ErrorState {
  error: CustomError | null;
}

const initialState: ErrorState = { error: null };

export const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    addError: (state, action) => {
      state.error = action.payload;
    },
    cleanError: (state, action) => {
      state.error = null;
    },
  },
});

export const { addError, cleanError } = errorSlice.actions;
export default errorSlice.reducer;
