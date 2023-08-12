import { Dispatch } from "@reduxjs/toolkit";
import { cleanError } from "../slices/errorSlice";
export const actionCleanError = () => {
  return (dispatch: Dispatch) => {
    dispatch(cleanError(null));
  };
};
