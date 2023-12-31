import { createContext, useState, useContext, useMemo, useEffect } from "react";

const GameContext = createContext();

export default function GameContainerProvider({ children }) {
  const [board, setBoard] = useState([]);
  const [time, setTime] = useState(0);
  const [moves, setMoves] = useState(0);
  const [playersScore, setPlayersScore] = useState({});

  useEffect(() => {
    setPlayersScore({
      player1: 1,
      player2: 2,
      player3: 3,
      player4: 4,
    });
  }, []);

  const value = useMemo(
    () => ({
      board,
      time,
      moves,
      playersScore,
    }),
    [board, time, moves, playersScore]
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
