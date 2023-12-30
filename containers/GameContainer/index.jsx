import React from "react";
import Header from "./Header";
import { useData } from "./context/useContext";

function GameContainer({ THEME, NUMBERS_OF_PLAYERS, GRID_SIZE }) {
  return (
    <main className="bg-[#fcfcfc] w-screen h-screen p-6 md:p-10 lg:p-0  ">
      <Header />
    </main>
  );
}

export default GameContainer;
