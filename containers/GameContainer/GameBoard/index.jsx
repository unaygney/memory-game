"use client";

import React, { useState } from "react";
import { generateBoard } from "@/lib/generetaBoard";

function GameBoard({ GRID_SIZE }) {
  const SIZE = GRID_SIZE === "6x6" ? 6 : 4;
  const [board, setBoard] = useState(generateBoard(SIZE));
  const [selectedCells, setSelectedCells] = useState([]);

  const handleClick = (rowIdx, cellIdx) => {
    const newSelectedCells = [...selectedCells, { row: rowIdx, cell: cellIdx }];

    if (newSelectedCells.length === 2) {
      const [firstCell, secondCell] = newSelectedCells;
      const [row1, cell1] = [firstCell.row, firstCell.cell];
      const [row2, cell2] = [secondCell.row, secondCell.cell];

      if (board[row1][cell1] === board[row2][cell2]) {
        // Eşleşen butonları burada isaretle
        const updatedBoard = [...board];
        updatedBoard[row1][cell1] = "matched";
        updatedBoard[row2][cell2] = "matched";
        setBoard(updatedBoard);
      } else {
        // Eşleşmeyen butonlar
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
  console.log(board);

  return (
    <section className="w-full h-full  flex items-center justify-center">
      <div
        className={` w-full h-fit ${
          SIZE === 4 ? "md:w-[532px]" : "md:w-[572px]"
        }`}
      >
        <div
          className={`grid place-items-center grid-cols-${SIZE} gap-2`}
          style={{
            gridTemplateRows: `repeat(${SIZE}, 1fr)`,
            gridTemplateColumns: `repeat(${SIZE}, 1fr)`,
          }}
        >
          {board.flat().map((CELL, i) => (
            <button
              className={`rounded-full bg-[#bcced9] text-[#fcfcfc] text-[44px] font-bold leading-normal    relative ${
                SIZE === 4
                  ? "h-[72px] w-[72px] md:w-[118px] md:h-[118px]"
                  : "h-[46px] w-[46px] md:h-[82px] md:w-[82px]"
              }`}
              key={i}
            >
              {CELL}
              <span className="absolute inset-0 bg-[#304859] rounded-full"></span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GameBoard;
