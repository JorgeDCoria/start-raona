import { AppDispatch, RootState } from "../redux/store/store";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

/**
 * Hook personalizado para seleccionar el estado de la aplicación utilizando TypeScript.
 * Permite acceder al estado global definido en el store de Redux.
 * @function
 * @returns {RootState} El estado global de la aplicación.
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
/**
 * Hook personalizado para obtener el despachador de acciones de Redux.
 * Proporciona la función de despacho que se utiliza para enviar acciones al store.
 * @function
 * @returns {AppDispatch} La función de despacho de acciones de Redux.
 */
export const useAppDispatch: () => AppDispatch = useDispatch;
