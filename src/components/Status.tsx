import {
    Group,
    Image,
    Indicator,
    Loader,
    Paper,
    Skeleton,
    Stack,
    Text,
} from "@mantine/core";
import { useStatus } from "./context/status";

export const StatusBadge = () => {
    const { status, loading } = useStatus();
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

const Base = ({ children }: { children: React.ReactNode }) => (
    <Paper w="100%" p="sm" withBorder>
        <Group>{children}</Group>
    </Paper>
);
export const StatusCard = () => {
    const { loading, status } = useStatus();

    if (loading) {
        return (
            <Base>
                <Skeleton width={30} height={30} />
                <Stack>
                    <Skeleton width={"100%"} height={17} />

                    <Skeleton width={60} height={10} />
                </Stack>
            </Base>
        );
    }

    if (!status || !status.activities || status.activities.length === 0) {
        return (
            <Base>
                <Text>I'm currently not doing anything</Text>
            </Base>
        );
    }

    const appId = status.activities[0].application_id;
    const assets = status.activities[0].assets;

    return (
        <Paper w="100%" p="sm" withBorder>
            <Group>
                {assets?.large_image &&
                    (assets.small_image ? (
                        <Indicator
                            color="transparent"
                            position="bottom-end"
                            size={30}
                            label={
                                <Image
                                    src={`https://cdn.discordapp.com/app-assets/${appId}/${assets.small_image}`}
                                    alt="small_image"
                                    w={23}
                                />
                            }
                        >
                            <Image
                                src={`https://cdn.discordapp.com/app-assets/${appId}/${assets?.large_image}.png`}
                                alt="Rich Presence"
                                w={50}
                            />
                        </Indicator>
                    ) : (
                        <Image
                            src={`https://cdn.discordapp.com/app-assets/${appId}/${assets?.large_image}.png`}
                            alt="Rich Presence"
                            w={50}
                        />
                    ))}
                <Stack gap={5}>
                    <Text fz={17}>{assets?.large_text}</Text>
                    <Text fz={16}>{assets?.small_text}</Text>
                </Stack>
            </Group>
        </Paper>
    );
};
