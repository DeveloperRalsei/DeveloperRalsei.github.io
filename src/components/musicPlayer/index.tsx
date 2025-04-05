import { musics } from "@/data/musics";
import { Music } from "@/types";
import { createContext, useContext, useEffect, useRef, useState } from "react";

type MusicPlayerContextType = {
    musicRef: HTMLAudioElement | null;
    music: Music | null;
    playing: boolean;
    progress: number;
    currentSongId: number;
    volume: number;
    visible: boolean;
    error: Error | null;
    loading: boolean;
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
    const [loading, setLoading] = useState(false);

    const ref = useRef<HTMLAudioElement | null>(null);

    useEffect(() => next(), [musicEnded]);

    useEffect(() => {
        setLoading(true);
        setMusicEnded(true);
        const songName = musics.find((m) => m.id === currentSongId)?.musicPath;
        if (!songName) return;

        if (ref.current) {
            ref.current.pause();
            ref.current.src = "";
            ref.current.load();
            ref.current.volume = 0.5;
        }

        const newAudio = new Audio(`/musics/${songName}`);
        ref.current = newAudio;
        setLoading(false);

        newAudio.ontimeupdate = () => {
            setProgress((newAudio.currentTime / newAudio.duration) * 100);
            if (ref.current && ref.current.ended) setMusicEnded(true);
        };

        if (playing) newAudio.play();

        return () => {
            newAudio.pause();
            newAudio.src = "";
            newAudio.load();
        };
    }, [currentSongId]);

    useEffect(() => {
        if (ref.current) {
            if (playing) ref.current.play();
            else ref.current.pause();
        }
    }, [playing]);

    const setSong = (id: number) => {
        setCurrentSongId(id);
    };

    const setVolume = (v: number) => {
        if (ref.current) ref.current.volume = v;
        setVolume_(v);
    };

    const play = () => {
        if (ref.current) {
            setPlaying(true);
            setVisible_(true);
            ref.current.play().catch((err) => {
                console.log(err);
                setError_(err);
            });
        }
    };

    const pause = () => {
        if (ref.current) {
            setPlaying(false);
            ref.current.pause();
        }
    };

    const toggle = () => {
        if (ref.current) {
            setPlaying((prev) => {
                if (prev) {
                    ref.current!.pause();
                } else {
                    ref.current!.play();
                }
                return !prev;
            });
        }
    };

    const previous = () => {
        if (currentSongId !== 1) setCurrentSongId((prev) => prev - 1);
        else setCurrentSongId(musics.length);
    };

    const next = () => {
        if (currentSongId === musics.length) {
            setCurrentSongId(1);
            return;
        }
        setCurrentSongId((prev) => prev + 1);
    };

    return (
        <MusicPlayerContext.Provider
            value={{
                musicRef: ref.current || null,
                music: musics.find((m) => m.id === currentSongId) || null,
                progress,
                playing,
                currentSongId,
                volume,
                visible,
                error,
                loading,
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
