import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks/useStore";

export default function Paginate() {
  const [buttons, setButtons] = useState<number[]>([]);
  const { page: numberPage, totalPages } =
    useAppSelector((state) => state.movies.data) || {};

  useEffect(() => {
    if (numberPage !== undefined && totalPages !== undefined) {
      const newButtons = buildNumberButtons(numberPage, totalPages);
      setButtons(newButtons);
    }
  }, [numberPage, totalPages]);

  const buildNumberButtons = (
    numberPage: number,
    totalPages: number,
  ): number[] => {
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

  return (
    <div>
      <button onClick={() => {}}>&lt;</button>
      {buttons.map((pageNumber) => (
        <button onClick={() => {}} key={pageNumber}>
          {pageNumber}
        </button>
      ))}
      <button onClick={() => {}}>&gt;</button>
    </div>
  );
}
