import { SongCard, useMusicPlayer } from "@/components/musicPlayer";
import { musics } from "@/data/musics";
import {
    Button,
    Divider,
    Drawer,
    Group,
    SimpleGrid,
    Stack,
    TextInput,
} from "@mantine/core";
import { IconEdit } from "@tabler/icons-react";
import { useState } from "react";

export default function MusicList() {
    const [search, setSearch] = useState("");
    const [opened, setOpened] = useState(false);
    const [activeMusic, setActiveMusic] = useState<number | null>(null);

    const { currentSongId } = useMusicPlayer();

    let filtered = search
        ? musics.filter((p) =>
              [p.title, p.artist]
                  .filter((x) => x)
                  .join(" ")
                  .toLowerCase()
                  .includes(search.toLowerCase()),
          )
        : musics;
    return (
        <>
            <Stack>
                <Group>
                    <TextInput
                        w="100%"
                        placeholder="Search..."
                        flex={1}
                        value={search}
                        onChange={(v) => setSearch(v.target.value)}
                    />
                    <Button variant="light" onClick={() => setOpened(true)}>
                        <IconEdit />
                    </Button>
                </Group>
                <Divider />
                <SimpleGrid cols={{ sm: 1, md: 2 }}>
                    {filtered.map((m, i) => (
                        <SongCard
                            key={m.title + i}
                            music={m}
                            active={currentSongId === m.id}
                        />
                    ))}
                </SimpleGrid>
            </Stack>
            <Drawer
                opened={opened}
                onClose={() => setOpened(false)}
                position="bottom"
            >
                <Drawer.Header>
                    Select the song that will start playing when you enter the
                    site
                </Drawer.Header>
                <Button
                    variant="light"
                    mb="md"
                    onClick={() => {
                        localStorage.setItem("musicId", "null");
                        setActiveMusic(null);
                    }}
                >
                    Clear
                </Button>

                <SimpleGrid cols={{ lg: 4, md: 2, sm: 1 }}>
                    {musics.map((m, i) => {
                        const activeId = localStorage.getItem("musicId");
                        if (!activeId) localStorage.setItem("musicId", "null");

                        return (
                            <SongCard
                                key={m.artist + m.title + i}
                                music={m}
                                active={activeMusic === m.id}
                                onClick={() => {
                                    localStorage.setItem(
                                        "musicId",
                                        m.id.toString(),
                                    );
                                    setActiveMusic(m.id);
                                }}
                            />
                        );
                    })}
                </SimpleGrid>
            </Drawer>
        </>
    );
}
