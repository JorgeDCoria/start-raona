import { Dispatch } from "@reduxjs/toolkit";
import { cleanError } from "../slices/errorSlice";

/**
 * Accion para limpiar el estado de error
 * @function
 */
export const actionCleanError = () => {
  return (dispatch: Dispatch) => {
    dispatch(cleanError(null));
  };
};
