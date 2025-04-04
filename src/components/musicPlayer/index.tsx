import { musics } from "@/data/musics";
import { Music } from "@/types";
import { createContext, useContext, useEffect, useRef, useState } from "react";

type MusicPlayerContextType = {
    music: Music | null;
    playing: boolean;
    progress: number;
    currentSongId: number;
    volume: number;
    visible: boolean;
    error: Error | null;
    play(): void;
    pause(): void;
    toggle(): void;
    setSong(id: number): void;
    setVolume(v: number): void;
    setVisible(v: boolean): void;
    disableError(): void;
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
    const [visible, setVisible_] = useState(false);
    const [error, setError_] = useState(null);
    const [musicEnded, setMusicEnded] = useState(false);

    const currentSong = useRef<HTMLAudioElement | null>(null);

    useEffect(() => next(), [musicEnded]);

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
            if (currentSong.current && currentSong.current.ended)
                setMusicEnded(true);
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
        setMusicEnded(false);
        setCurrentSongId(id);
    };

    const setVolume = (v: number) => {
        if (currentSong.current) currentSong.current.volume = v;
        setVolume_(v);
    };

    const play = () => {
        if (currentSong.current) {
            setMusicEnded(false);
            setPlaying(true);
            setVisible_(true);
            currentSong.current.play().catch((err) => {
                console.log(err);
                setError_(err);
            });
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
        setMusicEnded(false);
        if (currentSongId !== 1) setCurrentSongId((prev) => prev - 1);
        else setCurrentSongId(musics.length);
    };

    const next = () => {
        setMusicEnded(false);
        if (currentSongId === musics.length) {
            setCurrentSongId(1);
            return;
        }
        setCurrentSongId((prev) => prev + 1);
    };

    return (
        <MusicPlayerContext.Provider
            value={{
                music: musics.find((m) => m.id === currentSongId) || null,
                progress,
                playing,
                currentSongId,
                volume,
                visible,
                error,
                setSong,
                setVisible: (v) => setVisible_(v),
                disableError: () => setError_(null),
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
