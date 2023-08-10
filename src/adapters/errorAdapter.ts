import { CustomError } from "../types/CustomError";
/**
 * function definida para realizar el mapeo de un error generado luego de una consulta <br>
 * a un objeto error personalizado
 * @param {any} e- objeto que se genera ante una peticion fallida
 * @returns {CustomError} Objeto del tipo Custom Error
 */
const mapResponseErrorToCustomError = (e: any): CustomError => {
  const customError: CustomError = {
    status: e.response.status,
    message: e.message,
    messageCode: e.code,
    messageApi: e.response.data.status_message,
    statusCodeApi: e.response.data.status_code,
  };
  return customError;
};

const adapterError = {
  mapResponseErrorToCustomError,
};

export default adapterError;
