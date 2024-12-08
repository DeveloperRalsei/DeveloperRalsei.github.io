import {
  MusicPlayerContext,
  MusicPlayerContextType,
} from "@/components/context/MusicPlayer/MusicPlayerProvider";
import { useContext } from "react";

function useMusicPlayer(): MusicPlayerContextType {
  const context = useContext(MusicPlayerContext);
  if (!context) {
    throw new Error("useMusicPlayer must be used within a MusicPlayerProvider");
  }
  return context;
}

export default useMusicPlayer;
