import { Music } from "@/types";
import { Card, Grid, Image, Stack, Text, Title } from "@mantine/core";
import { useMusicPlayer } from ".";

export const SongCard = ({ music }: { music: Music }) => {
    const { setSong, play } = useMusicPlayer();

    return (
        <Card
            className="hover"
            p="xs"
            style={{
                cursor: "pointer",
            }}
            onClick={() => {
                setSong(music.id);
                play();
            }}
        >
            <Grid>
                <Grid.Col span={3}>
                    <Image
                        src={music.coverPath}
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
                        <Text c="dimmed">by {music.artist}</Text>
                    </Stack>
                </Grid.Col>
            </Grid>
        </Card>
    );
};
