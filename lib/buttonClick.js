import { useState } from "react";
const [selectedCells, setSelectedCells] = useState([]);

export const handleClick = (rowIdx, cellIdx) => {
  const newSelectedCells = [...selectedCells, { row: rowIdx, cell: cellIdx }];

  if (newSelectedCells.length === 2) {
    const [firstCell, secondCell] = newSelectedCells;
    const [row1, cell1] = [firstCell.row, firstCell.cell];
    const [row2, cell2] = [secondCell.row, secondCell.cell];

    if (board[row1][cell1] === board[row2][cell2]) {
      // Eşleşen butonları burada işaretleyebilirsiniz.
      const updatedBoard = [...board];
      updatedBoard[row1][cell1] = "matched";
      updatedBoard[row2][cell2] = "matched";
      setBoard(updatedBoard);
    } else {
      // Eşleşmeyen butonları işaretleyebilirsiniz (Örn: Kırmızıya çevirme).
      // Örneğin, eşleşmeyen butonları bir süre sonra geri çevirebilirsiniz.
      setTimeout(() => {
        const updatedBoard = [...board];
        updatedBoard[row1][cell1] = "unmatched";
        updatedBoard[row2][cell2] = "unmatched";
        setBoard(updatedBoard);
      }, 1000);
    }
    setSelectedCells([]);
  } else {
    setSelectedCells(newSelectedCells);
  }
};
