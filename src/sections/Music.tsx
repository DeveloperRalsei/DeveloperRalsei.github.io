import { SongCard } from "@/components/musicPlayer";
import { musics } from "@/data/musics";
import { SimpleGrid, Stack } from "@mantine/core";

export default function MusicList() {
    return (
        <Stack>
            <SimpleGrid cols={{ sm: 1, md: 2 }}>
                {musics.map((m, i) => (
                    <SongCard music={m} key={m.title + i} />
                ))}
            </SimpleGrid>
        </Stack>
    );
}
