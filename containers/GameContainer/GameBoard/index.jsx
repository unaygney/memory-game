"use client";

import React, { useState } from "react";
import { generateBoard } from "@/lib/generetaBoard";

function GameBoard({ GRID_SIZE }) {
  const SIZE = GRID_SIZE === "6x6" ? 6 : 4;
  const [board, setBoard] = useState(generateBoard(SIZE));

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
                }  items-center justify-center rounded-full bg-[#BCCED9]`}
                key={i}
              >
                <span className="text-[#fcfcfc]  heading-l">{CELL}</span>
              </button>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default GameBoard;
