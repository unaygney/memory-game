"use client";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import GameContainer from "@/containers/GameContainer";
function Game() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchs = searchParams.has("theme" && "players" && "gridSize");
  // PARAMS
  const theme = searchParams.get("theme");
  const players = searchParams.get("players");
  const gridSize = searchParams.get("gridSize");

  if (!searchs) {
    router.push("/");
  }

  return (
    <GameContainer
      THEME={theme}
      NUMBERS_OF_PLAYERS={players}
      GRID_SIZE={gridSize}
    />
  );
}

export default Game;
