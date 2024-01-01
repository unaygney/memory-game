"use client";

import React, { useState } from "react";
import { generateBoard } from "@/lib/generetaBoard";

function GameBoard({ GRID_SIZE }) {
  const SIZE = GRID_SIZE === "6x6" ? 6 : 4;
  const [board, setBoard] = useState(generateBoard(SIZE));
  const [selectedCells, setSelectedCells] = useState([]);

  const handleClick = (cell, index) => {
    const newSelectedCells = [...selectedCells, cell];
    const AllButtons = document.querySelectorAll(".button");

    const AllSpan = document.querySelectorAll(".span");
    const ClickedSpan = AllSpan[index];
    ClickedSpan.style.opacity = "0";

    if (newSelectedCells.length === 2) {
      const [firstCell, secondCell] = newSelectedCells;
      if (firstCell === secondCell) {
        console.log("eslesdi");
      } else {
        console.log("Değerler eşleşmedi");
        setTimeout(() => {
          AllSpan.forEach((span) => (span.style.opacity = "100"));
        }, 400);
      }

      setSelectedCells([]);
    } else {
      setSelectedCells(newSelectedCells);
    }
  };

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
            <button className="button" onClick={() => handleClick(CELL, i)}>
              <div
                className={`rounded-full bg-[#bcced9] text-[#fcfcfc] text-[44px] font-bold leading-normal flex justify-center items-center    relative ${
                  SIZE === 4
                    ? "h-[72px] w-[72px] md:w-[118px] md:h-[118px]"
                    : "h-[46px] w-[46px] md:h-[82px] md:w-[82px]"
                }`}
                key={i}
              >
                <p>{CELL}</p>
                <span className="absolute inset-0 bg-[#304859] rounded-full transition-all span"></span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GameBoard;
