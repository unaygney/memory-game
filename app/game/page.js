"use client";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
function Game() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchs = searchParams.has("theme" && "players" && "gridSize");

  if (!searchs) {
    router.push("/");
  }
  return <div>game</div>;
}

export default Game;
