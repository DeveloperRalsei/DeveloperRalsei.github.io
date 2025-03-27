import { musics } from "@/data/musics";
import { createContext, useContext, useEffect, useRef, useState } from "react";

type MusicPlayerContextType = {
    music: HTMLAudioElement | null;
    playing: boolean;
    progress: number;
    currentSongId: number;
    volume: number;
    play(): void;
    pause(): void;
    toggle(): void;
    setSong(id: number): void;
    setVolume(v: number): void;
    next(): void;
    previous(): void;
};

const MusicPlayerContext = createContext<MusicPlayerContextType | null>(null);

export const MusicPlayerProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [currentSongId, setCurrentSongId] = useState(1);
    const [playing, setPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [volume, setVolume_] = useState(0.5);
    const currentSong = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        const song = musics.find((m) => m.id === currentSongId)?.musicPath;
        if (!song) return;

        if (currentSong.current) {
            currentSong.current.pause();
            currentSong.current.src = "";
            currentSong.current.load();
            currentSong.current.volume = 0.5;
        }

        const newAudio = new Audio(song);
        currentSong.current = newAudio;

        newAudio.ontimeupdate = () => {
            setProgress((newAudio.currentTime / newAudio.duration) * 100);
        };

        if (playing) newAudio.play();

        return () => {
            newAudio.pause();
            newAudio.src = "";
            newAudio.load();
        };
    }, [currentSongId]);

    useEffect(() => {
        if (currentSong.current) {
            if (playing) currentSong.current.play();
            else currentSong.current.pause();
        }
    }, [playing]);

    const setSong = (id: number) => {
        setCurrentSongId(id);
    };

    const setVolume = (v: number) => {
        if (currentSong.current) currentSong.current.volume = v;
        setVolume_(v);
    };

    const play = () => {
        if (currentSong.current) {
            setPlaying(true);
            currentSong.current.play();
        }
    };

    const pause = () => {
        if (currentSong.current) {
            setPlaying(false);
            currentSong.current.pause();
        }
    };

    const toggle = () => {
        if (currentSong.current) {
            setPlaying((prev) => {
                if (prev) {
                    currentSong.current!.pause();
                } else {
                    currentSong.current!.play();
                }
                return !prev;
            });
        }
    };

    const previous = () => {
        if (currentSongId !== 1) setCurrentSongId((prev) => prev - 1);
    };

    const next = () => {
        setCurrentSongId((prev) => prev + 1);
    };

    return (
        <MusicPlayerContext.Provider
            value={{
                music: currentSong.current,
                progress,
                playing,
                currentSongId,
                volume,
                setSong,
                setVolume,
                play,
                pause,
                toggle,
                previous,
                next,
            }}
        >
            {children}
        </MusicPlayerContext.Provider>
    );
};

export const useMusicPlayer = () => {
    const ctx = useContext(MusicPlayerContext);
    if (!ctx) throw new Error("Use MusicPlayer Provider");
    return ctx;
};

export * from "./song-card";
export * from "./music-player";
