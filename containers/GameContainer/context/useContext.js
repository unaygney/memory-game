import { createContext, useState, useContext, useMemo, useEffect } from "react";

const GameContext = createContext();

export default function GameContainerProvider({ children }) {
  const [board, setBoard] = useState([]);
  const [time, setTime] = useState({ sec: 0, min: 0 });
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

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let newTime = { ...prev };
        if (newTime.sec < 59) newTime.sec += 1;
        else {
          newTime.min += 1;
          newTime.sec = 0;
        }
        if (newTime.min === 60) {
          newTime.min = 0;
          newTime.hr += 1;
        }

        return newTime;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const value = useMemo(
    () => ({
      board,
      time,
      setTime,
      moves,
      setMoves,
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
