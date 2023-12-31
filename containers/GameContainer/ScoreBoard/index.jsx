import React from "react";
import { useData } from "../context/useContext";
import { renderPlayerButtons } from "@/lib/renderPlayerButton";

function ScoreBoard({ NUMBERS_OF_PLAYERS }) {
  const { time, moves, playersScore } = useData();

  if (NUMBERS_OF_PLAYERS == 1) {
    return (
      <section className="bg-transparent ">
        <div className="w-full md:max-w-[540px] md:mx-auto ">
          <div className="flex gap-6 ">
            <div className="flex-1 bg-[#dfe7ec] flex flex-col items-center justify-center py-2 rounded-[5px]">
              <h3 className="text-[#7191a5] font-bold text-[15px] leading-normal">
                Time
              </h3>
              <p className="text-2xl text-[#304859] font-bold leading-normal">
                {time}
              </p>
            </div>
            <div className="flex-1 bg-[#dfe7ec] flex flex-col items-center justify-center py-2 rounded-[5px]">
              <h3 className="text-[#7191a5] font-bold text-[15px] leading-normal">
                Moves
              </h3>
              <p className="text-2xl text-[#304859] font-bold leading-normal">
                {moves}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (NUMBERS_OF_PLAYERS > 1) {
    return (
      <section className="bg-transparent ">
        <div className="container mx-auto ">
          <div className="flex gap-6 ">
            {Number(NUMBERS_OF_PLAYERS) > 1 && (
              <div className="flex justify-around w-full gap-6 ">
                {renderPlayerButtons(Number(NUMBERS_OF_PLAYERS), playersScore)}
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default ScoreBoard;
