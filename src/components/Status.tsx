import {
    Box,
    Group,
    Loader,
    Menu,
    Paper,
    Text,
    Image,
    Stack,
} from "@mantine/core";
import { useLanyard, LanyardWebsocket, Activity } from "react-use-lanyard";
import { IconBrandSpotify } from "@tabler/icons-react";

export const StatusBadge = () => {
    const { status, loading } = useLanyard({
        userId: "718798893445283863",
        socket: true,
    }) as LanyardWebsocket;

    const isOnline =
        status?.discord_status === "online" || status?.discord_status === "dnd"
            ? true && "active"
            : false;
    const isIdle = status?.discord_status === "idle";

    if (loading) {
        return <Loader type="dots" />;
    }

    if (isIdle) return <Text c={"yellow"}>AFK</Text>;
    if (!isOnline) return <Text c={"gray"}>Offline</Text>;
    else return <Text c={"green"}>Online</Text>;
};

const Status: React.FC = () => {
    const { status } = useLanyard({
        userId: "718798893445283863",
        socket: true,
    }) as LanyardWebsocket;

    if (!status) {
        return <Loader type="dots" />;
    }

    const isOnline =
        status.discord_status === "online" ||
        status.discord_status === "dnd" ||
        status.discord_status === "idle";

    const activities: Activity[] = status.activities;

    const spotify = status.spotify;

    const songDurationMs = spotify?.timestamps.end! - spotify?.timestamps.start!;

    const songTotalSeconds = Math.floor(songDurationMs / 1000);

    const songMinutes = Math.floor(songTotalSeconds / 60);
    const songSeconds = songTotalSeconds % 60;

    return (
        <Paper p="md">
            {isOnline ? (
                <Group w="100%" justify="space-between" gap={0}>
                    {activities && activities[0] ? (
                        activities[0].name === "Custom Status" ? (
                            activities[1] ? (
                                <Box>
                                    Playing a game:{" "}
                                    <Text c={"red"} display={"inline"}>
                                        {activities[1].name}
                                    </Text>
                                </Box>
                            ) : (
                                <Text>I'm not currently doing anything</Text>
                            )
                        ) : (
                            <Box>
                                Playing a game:{" "}
                                <Text c={"red"} display={"inline"}>
                                    {activities[0].name}
                                </Text>
                            </Box>
                        )
                    ) : (
                        <Text>I'm not currently doing anything</Text>
                    )}

                    {status.listening_to_spotify ? (
                        <Menu position="left" trigger="click-hover">
                            <Menu.Target>
                                <IconBrandSpotify color="lightgreen" cursor={"pointer"} />
                            </Menu.Target>

                            <Menu.Dropdown p={20} bg={"dark"}>
                                <Text c={"green"}>Listening</Text>
                                <Menu.Divider />
                                <Group justify="space-between">
                                    <Image src={spotify?.album_art_url} w={100} radius={"sm"} />
                                    <Stack gap={3} mt={"md"}>
                                        <Text
                                            c={"indigo"}
                                            component="a"
                                            href={`https://spotify.link/${spotify?.track_id}`}
                                            target="_blank"
                                        >
                                            {spotify?.song}
                                        </Text>
                                        <div>
                                            {"By "}
                                            <Text c="cyan">{spotify?.artist}</Text>
                                        </div>
                                        <div>
                                            <Text display={"inline"} c="grape">
                                                {songMinutes}:{songSeconds}
                                            </Text>
                                            {" seconds"}
                                        </div>
                                    </Stack>
                                </Group>
                            </Menu.Dropdown>
                        </Menu>
                    ) : (
                        <Menu trigger="click-hover" position="left">
                            <Menu.Target>
                                <IconBrandSpotify color={"gray"} cursor={"pointer"} />
                            </Menu.Target>

                            <Menu.Dropdown bg={"dark"}>
                                <Text c={"gray"}>Not Listening Anything</Text>
                            </Menu.Dropdown>
                        </Menu>
                    )}
                </Group>
            ) : (
                "Offline"
            )}
        </Paper>
    );
};

export default Status;
