import { ActionIcon, Box, Group, Slider, Transition } from "@mantine/core";
import { useMusicPlayer } from ".";
import {
    IconPlayerPauseFilled,
    IconPlayerPlayFilled,
    IconPlayerSkipBackFilled,
    IconPlayerSkipForwardFilled,
} from "@tabler/icons-react";

export const MusicPlayer = () => {
    const { progress, playing, volume, setVolume, toggle, next, previous } =
        useMusicPlayer();

    const player = (
        <Group>
            <ActionIcon onClick={previous} variant="subtle" size="xl">
                <IconPlayerSkipBackFilled />
            </ActionIcon>
            <ActionIcon onClick={toggle} variant="subtle" size="xl">
                {playing ? <IconPlayerPauseFilled /> : <IconPlayerPlayFilled />}
            </ActionIcon>
            <ActionIcon onClick={next} variant="subtle" size="xl">
                <IconPlayerSkipForwardFilled />
            </ActionIcon>
        </Group>
    );

    return (
        <Transition mounted={playing} transition="slide-up">
            {(styles) => (
                <Box
                    pos="fixed"
                    bg="dark"
                    style={styles}
                    h={55}
                    w="100%"
                    bottom={0}
                    left={0}
                    component={Group}
                    align="center"
                    justify="center"
                >
                    <Box
                        component="div"
                        bg="teal"
                        w={`${progress}%`}
                        h={3}
                        pos="absolute"
                        top={0}
                        left={0}
                    />
                    {player}
                    <Slider
                        min={0}
                        max={1}
                        step={0.05}
                        w={200}
                        onChange={setVolume}
                        value={volume}
                    />
                </Box>
            )}
        </Transition>
    );
};
