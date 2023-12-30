import React from "react";
import Header from "./Header";
import GameBoard from "./GameBoard";
import ScoreBoard from "./ScoreBoard";

function GameContainer({ THEME, NUMBERS_OF_PLAYERS, GRID_SIZE }) {
  return (
    <main className="bg-[#fcfcfc] w-screen h-screen p-6 md:p-10 lg:p-0  ">
      <div className="flex flex-col justify-between w-full h-full">
        <Header />
        <GameBoard GRID_SIZE={GRID_SIZE} />
        <ScoreBoard />
      </div>
    </main>
  );
}

export default GameContainer;
