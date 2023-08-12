import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks/useStore";
import { actionGetMovies } from "../../redux/actions/moviesActions";

/**
 * Componente de paginación para navegar a través de las páginas de contenido.
 * Este componente muestra botones para avanzar y retroceder a través de las páginas,
 * y permite al usuario seleccionar páginas específicas.
 *
 * @component
 * @returns {React.FC} El componente Paginate para la navegación de páginas.
 */
export default function Paginate() {
  // Array de números de páginas
  const [buttons, setButtons] = useState<number[]>([]);
  // Número de página actual y total de páginas (estado global)
  const { page: numberPage, totalPages } =
    useAppSelector((state) => state.movies.data) || {};
  const dispatch = useAppDispatch();

  /**
   * Selecciona los números de página que se mostrarán en los botones de la paginación.
   *
   * @param {number} numberPage - Número de página actual.
   * @param {number} totalPages - Total de páginas disponibles.
   * @returns {number[]} Array de números de páginas a mostrar.
   */
  const buildNumberButtons = (
    numberPage: number,
    totalPages: number,
  ): number[] => {
    // Lógica para determinar qué números de página mostrar en los botones
    const block = totalPages >= 7 ? 7 : totalPages;
    let blockPagination = [1];

    if (totalPages === 1) return blockPagination;

    if (numberPage < block - 1) {
      for (let i = 2; i < block; i++) blockPagination.push(i);
    } else if (numberPage >= totalPages - (block - 1)) {
      for (let i = totalPages - (block - 2); i < totalPages; i++)
        blockPagination.push(i);
    } else {
      for (let i = numberPage - 2; blockPagination.length < block - 1; i++)
        blockPagination.push(i);
    }

    blockPagination.push(totalPages);

    return blockPagination;
  };

  useEffect(() => {
    // Actualiza los números de página cuando cambian numberPage y totalPages
    if (numberPage !== undefined && totalPages !== undefined) {
      const newButtons = buildNumberButtons(numberPage, totalPages);
      setButtons(newButtons);
    }
  }, [numberPage, totalPages]);

  /**
   * Maneja el evento de cambio de página.
   *
   * @param {number} page - Número de página seleccionado.
   */
  const handlePage = (page: number) => {
    numberPage !== page && dispatch(actionGetMovies(page));
  };

  const nextPage = () => {
    if (numberPage) {
      let numPage = numberPage === totalPages ? 1 : numberPage + 1;
      dispatch(actionGetMovies(numPage));
    }
  };

  const prevPage = () => {
    if (numberPage) {
      let numPage = numberPage === 1 ? totalPages : numberPage - 1;
      dispatch(actionGetMovies(numPage));
    }
  };
  return (
    <div className="paginate">
      <button className=" button left" onClick={prevPage}>
        <span>&lt;</span>
      </button>
      {numberPage &&
        buttons.map((num) => (
          <button
            className={`button ${numberPage === num ? "button-active" : ""}`}
            onClick={() => handlePage(num)}
            key={num}
          >
            <span>{num}</span>
          </button>
        ))}
      <button className="button rigth" onClick={nextPage}>
        <span>&gt;</span>
      </button>
    </div>
  );
}
