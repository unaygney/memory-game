"use client";
import GameContainerProvider from "@/containers/GameContainer/context/useContext";

export default function Layout({ children }) {
  return <GameContainerProvider>{children}</GameContainerProvider>;
}
