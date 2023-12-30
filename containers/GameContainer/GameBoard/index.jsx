"use client";
import React, { useState } from "react";
import { generateBoard } from "@/lib/generetaBoard";
function GameBoard({ GRID_SIZE }) {
  const SIZE = GRID_SIZE === "6x6" ? 6 : 4;
  const [board, setBoard] = useState(generateBoard(SIZE));

  return (
    <section className="w-full">
      <div className="flex gap-3 ">
        {board.map((LINE, idx) => (
          <div className="w-full flex flex-col gap-2" key={idx}>
            {LINE.map((CELL, i) => (
              <div
                className={`${
                  SIZE === 6 ? "w-[46px] h-[46px]" : "w-[72px] h-[72px]"
                } inline-flex items-center justify-center rounded-full bg-[#BCCED9]`}
                key={i}
              >
                <span className="text-[#fcfcfc]  heading-l">1</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default GameBoard;
