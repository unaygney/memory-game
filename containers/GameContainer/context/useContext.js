import { createContext, useState, useContext } from "react";

const GameContext = createContext();

export default function GameContainerProvider({ children }) {
  const [players, setPlayers] = useState("");
  return (
    <GameContext.Provider value={{ players, setPlayers }}>
      {children}
    </GameContext.Provider>
  );
}

export const useData = () => {
  return useContext(GameContext);
};
