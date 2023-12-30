import { createContext, useState, useContext } from "react";

const GameContext = createContext();

export default function GameContainerProvider({ children }) {
  const [isOpen, setOpen] = useState(false);
  return (
    <GameContext.Provider value={{ isOpen }}>{children}</GameContext.Provider>
  );
}

export const useData = () => {
  return useContext(GameContext);
};
