import {
    ActionIcon,
    Box,
    Group,
    Image,
    Loader,
    Paper,
    Stack,
    Text,
    Title,
    Transition,
    useMantineTheme,
} from "@mantine/core";
import { useMusicPlayer } from ".";
import {
    IconChevronLeft,
    IconPlayerPauseFilled,
    IconPlayerPlayFilled,
    IconPlayerSkipBackFilled,
    IconPlayerSkipForwardFilled,
    IconVolume,
    IconX,
} from "@tabler/icons-react";
import { useState } from "react";
import { musics } from "@/data/musics";
import { useClickOutside, useMove } from "@mantine/hooks";

export const MusicPlayer = () => {
    const {
        progress,
        playing,
        currentSongId,
        music,
        volume,
        visible,
        error,
        loading,
        setVolume,
        setVisible,
        toggle,
        next,
        previous,
    } = useMusicPlayer();

    const clickOutsideRef = useClickOutside(() => setMounted(false));
    const [mounted, setMounted] = useState(false);
    const [playerMounted, setPlayerMounted] = useState(false);
    const theme = useMantineTheme();

    const player = (
        <Group gap={0}>
            <ActionIcon
                onClick={() => setVisible(false)}
                variant="subtle"
                size="xl"
            >
                <IconX />
            </ActionIcon>
            <ActionIcon onClick={previous} variant="subtle" size="xl">
                <IconPlayerSkipBackFilled />
            </ActionIcon>
            <ActionIcon
                onClick={toggle}
                loading={loading}
                variant="subtle"
                size="xl"
            >
                {playing ? <IconPlayerPauseFilled /> : <IconPlayerPlayFilled />}
            </ActionIcon>
            <ActionIcon onClick={next} variant="subtle" size="xl">
                <IconPlayerSkipForwardFilled />
            </ActionIcon>
            <ActionIcon
                onClick={() => setMounted((p) => !p)}
                variant="subtle"
                size="xl"
            >
                <IconVolume />
            </ActionIcon>
        </Group>
    );

    const cover = `/images/music/${musics.find((m) => m.id === currentSongId)?.coverPath}`;

    return (
        <Transition mounted={visible} transition="slide-up">
            {(styles) => (
                <>
                    <Box
                        pos="fixed"
                        bg="dark"
                        style={styles}
                        px="lg"
                        h={80}
                        w="100%"
                        bottom={0}
                        left={0}
                        component={Group}
                        align="center"
                        justify="space-between"
                    >
                        {error ? (
                            <Text c="yellow" fz={"h4"}>
                                Please press anywhere to use Music Player
                            </Text>
                        ) : loading ? (
                            <Loader />
                        ) : (
                            <>
                                <Box
                                    component="div"
                                    bg={theme.primaryColor}
                                    w={`${progress}%`}
                                    h={3}
                                    pos="absolute"
                                    top={0}
                                    left={0}
                                />
                                <Group>
                                    <Image
                                        src={cover}
                                        alt="uwu"
                                        radius="md"
                                        w={65}
                                    />
                                    <Stack gap={4}>
                                        <Title order={3}>{music!.title}</Title>
                                        <Text c="dimmed">
                                            by {music?.artist}
                                        </Text>
                                    </Stack>
                                </Group>
                                <Box hiddenFrom="sm">
                                    <ActionIcon
                                        onClick={() =>
                                            setPlayerMounted((p) => !p)
                                        }
                                        variant="light"
                                        size="lg"
                                    >
                                        <IconChevronLeft />
                                    </ActionIcon>
                                    <Transition
                                        mounted={playerMounted}
                                        transition={"fade-left"}
                                    >
                                        {(styles) => (
                                            <Paper
                                                component={Group}
                                                bd="dark"
                                                withBorder
                                                style={{
                                                    position: "fixed",
                                                    width: "100%",
                                                    height: 60,
                                                    bottom: 80,
                                                    right: 0,
                                                    ...styles,
                                                }}
                                                align="center"
                                                justify="space-around"
                                            >
                                                {player}
                                            </Paper>
                                        )}
                                    </Transition>
                                </Box>
                                <Box visibleFrom="sm">{player}</Box>
                            </>
                        )}
                    </Box>
                    <Transition mounted={mounted} transition="fade-left">
                        {(styles) => (
                            <Paper
                                p="sm"
                                bg="dark"
                                ref={clickOutsideRef}
                                style={{
                                    position: "fixed",
                                    bottom: 90,
                                    right: 20,
                                    ...styles,
                                }}
                            >
                                <Group justify="center">
                                    <VerticalSlider
                                        value={volume}
                                        setValue={setVolume}
                                    />
                                </Group>
                            </Paper>
                        )}
                    </Transition>
                </>
            )}
        </Transition>
    );
};

const VerticalSlider = ({
    value,
    setValue,
}: {
    value: number;
    setValue: (v: number) => void;
}) => {
    const { ref } = useMove(({ y }) => setValue(1 - y));

    return (
        <Stack gap={5}>
            <Group justify="center">
                <div
                    ref={ref}
                    style={{
                        width: 16,
                        height: 120,
                        backgroundColor: "var(--mantine-color-teal-light)",
                        position: "relative",
                    }}
                >
                    {/* Filled bar */}
                    <div
                        style={{
                            position: "absolute",
                            bottom: 0,
                            height: `${value * 100}%`,
                            width: 16,
                            backgroundColor: "var(--mantine-color-teal-filled)",
                            opacity: 0.7,
                        }}
                    />

                    {/* Thumb */}
                    <div
                        style={{
                            position: "absolute",
                            bottom: `calc(${value * 100}% - 8px)`,
                            left: 0,
                            width: 16,
                            height: 16,
                            backgroundColor: "var(--mantine-color-teal-7)",
                        }}
                    />
                </div>
            </Group>

            <Text ta="center" mt="sm">
                {Math.round(value * 100)}
            </Text>
        </Stack>
    );
};
