import { Music } from "@/types";
import { Card, Grid, Image, Stack, Text, Title } from "@mantine/core";
import { useMusicPlayer } from ".";

export const SongCard = ({
    music,
    active,
    onClick,
}: {
    music: Music;
    active?: boolean;
    onClick?: () => void;
}) => {
    const { setSong, play } = useMusicPlayer();

    if (!onClick)
        onClick = () => {
            setSong(music.id);
            play();
        };

    return (
        <Card
            className="hover"
            p="xs"
            pos="relative"
            style={{
                cursor: "pointer",
                boxShadow: active
                    ? "0 0 0px 2px var(--mantine-primary-color-filled)"
                    : undefined,
            }}
            onClick={onClick}
        >
            <Grid>
                <Grid.Col span={3}>
                    <Image
                        src={`/images/music/${music.coverPath}`}
                        w={"100%"}
                        radius="md"
                        alt={`music-${music.title}`}
                    />
                </Grid.Col>
                <Grid.Col span={9}>
                    <Stack gap={0}>
                        <Title order={4} c={"cyan"}>
                            {music.title}
                        </Title>
                        <Text c="dimmed">{music.artist}</Text>
                    </Stack>
                </Grid.Col>
            </Grid>
        </Card>
    );
};
