import { notifications } from "@mantine/notifications";
import { createContext, useContext, useState } from "react";

export interface MusicPlayerContextType {
  isPlaying: boolean;
  currentTrack: number;
  playTrack: (index: number) => void;
  togglePlayPause: () => void;
  nextTrack: () => void;
  previousTrack: () => void;
}

export const MusicPlayerContext = createContext<
  MusicPlayerContextType | undefined
>(undefined);

const tracks = [
  {
    audio: new Audio("/musics/before_the_story.mp3"),
    name: "Before The Story",
  },
  { audio: new Audio("/musics/my_castle_town.mp3"), name: "My Castle Town" },
  {
    audio: new Audio("/musics/you_can_always_come_home.mp3"),
    name: "You can always come home",
  },
];
tracks.forEach((song) => (song.audio.volume = 0.4));

export const MusicPlayerProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);

  const playTrack = (index: number) => {
    tracks.forEach((track) => {
      track.audio.pause();
      track.audio.currentTime = 0;
    });
    setCurrentTrack(index);
    tracks[index].audio.volume = 0.5;
    tracks[index].audio.play();
    setIsPlaying(true);
    notifications.show({
      message: 'Now Playing "' + tracks[index].name + '"',
      autoClose: 2000,
    });
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      tracks[currentTrack].audio.pause();
    } else {
      tracks[currentTrack].audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    const nextTrackIndex = (currentTrack + 1) % tracks.length;
    playTrack(nextTrackIndex);
  };

  const previousTrack = () => {
    const prevTrackIndex = (currentTrack - 1 + tracks.length) % tracks.length;
    playTrack(prevTrackIndex);
  };

  return (
    <MusicPlayerContext.Provider
      value={{
        isPlaying,
        currentTrack,
        playTrack,
        togglePlayPause,
        nextTrack,
        previousTrack,
      }}
    >
      {children}
    </MusicPlayerContext.Provider>
  );
};
