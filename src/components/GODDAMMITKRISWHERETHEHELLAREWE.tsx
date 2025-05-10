import { Group, Image, Paper, Text, Tooltip } from "@mantine/core";
import { useMusicPlayer } from "./musicPlayer";

export const GODDAMMITKRISWHERETHEHELLAREWE = () => {
    const { visible } = useMusicPlayer();
    return (
        <Group mb={visible ? "5mb" : 0}>
            <Tooltip
                label={
                    <Text fz={35}>
                        GOD DAMMIT KRIS!! WHERE THE FUCK ARE WE!!??
                    </Text>
                }
                withArrow
                arrowSize={30}
                opened
                zIndex={99999}
                multiline
            >
                <Image
                    src="/images/sprites/susie_WIDE.png"
                    alt="god... dammit..."
                    w={100}
                />
            </Tooltip>
            <Image src="/images/sprites/kris.png" alt="kris" w={50} />
        </Group>
    );
};
