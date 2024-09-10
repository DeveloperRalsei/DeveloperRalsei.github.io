import { notifications } from "@mantine/notifications";
import { createContext, useContext, useState } from "react";

interface MusicPlayerContextType {
    isPlaying: boolean;
    currentTrack: number;
    playTrack: (index: number) => void;
    togglePlayPause: () => void;
    nextTrack: () => void;
    previousTrack: () => void;
}

const MusicPlayerContext = createContext<MusicPlayerContextType | undefined>(undefined);

const tracks = [
    {audio: new Audio("/musics/before_the_story.mp3"),  name: "Before The Story"},
    {audio: new Audio("/musics/my_castle_town.mp3"), name: "My Castle Town"},
    {audio: new Audio("/musics/you_can_always_come_home.mp3"), name: "You can always come home"},
];
tracks.forEach(song => song.audio.volume = .1)

export const MusicPlayerProvider = ({ children }: { children: React.ReactNode; }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTrack, setCurrentTrack] = useState(0);

    const playTrack = (index: number) => {
        tracks.forEach((track) => {
            track.audio.pause();
            track.audio.currentTime = 0;
        });
        setCurrentTrack(index);
        tracks[index].audio.volume = 0.1;
        tracks[index].audio.play();
        setIsPlaying(true);
        notifications.show({
            message: 'Now Playing "' + tracks[index].name + '"',
            autoClose: 2000
        })
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
        let nextTrackIndex = (currentTrack + 1) % tracks.length;
        playTrack(nextTrackIndex);
    };

    const previousTrack = () => {
        let prevTrackIndex = (currentTrack - 1 + tracks.length) % tracks.length;
        playTrack(prevTrackIndex);
    };

    return (
        <MusicPlayerContext.Provider
            value={{ isPlaying, currentTrack, playTrack, togglePlayPause, nextTrack, previousTrack }}
        >
            {children}
        </MusicPlayerContext.Provider>
    );
};

export const useMusicPlayer = () => {
    const context = useContext(MusicPlayerContext);
    if (!context) {
        throw new Error("useMusicPlayer must be used within a MusicPlayerProvider");
    }
    return context;
};
