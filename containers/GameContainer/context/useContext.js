import { createContext, useState, useContext, useMemo } from "react";

const GameContext = createContext();

export default function GameContainerProvider({ children }) {
  const [board, setBoard] = useState([]);

  const value = useMemo(
    () => ({
      board,
    }),
    [board]
  );
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export const useData = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("There is no context data");
  }
  return context;
};
