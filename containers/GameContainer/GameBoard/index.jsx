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

  return (
    <section className={`w-full flex justify-center`}>
      <div
        className={`flex  w-full  ${
          SIZE === 6 ? "md:w-[572px] " : "md:w-[532px]"
        } ${SIZE == 6 ? "gap-2" : "gap-3"}  `}
      >
        {board.map((LINE, idx) => (
          <div
            className={`w-full flex flex-col ${SIZE == 6 ? "gap-2" : "gap-3"} `}
            key={idx}
          >
            {LINE.map((CELL, i) => (
              <button
                className={` inline-flex ${
                  SIZE === 6 ? "h-[46px] md:h-[82px]" : "h-[72px] md:h-[118px]"
                }  items-center justify-center rounded-full   card  `}
                key={i}
                onClick={() => handleClick(idx, i)}
              >
                <div className="card-side front w-full h-full ">
                  <span className="absolute inset-0 bg-[#304859] rounded-full w-full h-full "></span>
                </div>
                <div className="card-side back flex items-center justify-center ">
                  <span className="text-[#fcfcfc]  heading-l">{CELL}</span>
                </div>
              </button>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default GameBoard;
