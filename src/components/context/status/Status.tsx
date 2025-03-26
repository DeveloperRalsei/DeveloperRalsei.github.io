import {
    Group,
    Image,
    Indicator,
    Loader,
    Paper,
    Skeleton,
    Stack,
    Text,
    Tooltip,
} from "@mantine/core";
import { useStatus } from ".";

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
    if (status?.discord_status === "offline") {
        return;
    }

    if (loading) {
        return (
            <Base>
                <Skeleton width={30} height={30} />
                <Stack>
                    <Skeleton width={300} height={17} />

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
            <Group align="center">
                {assets?.large_image &&
                    (assets.small_image ? (
                        <Indicator
                            color="transparent"
                            position="bottom-end"
                            size={30}
                            label={
                                <Tooltip withArrow label={assets.small_text}>
                                    <Image
                                        src={`https://cdn.discordapp.com/app-assets/${appId}/${assets.small_image}`}
                                        alt="small_image"
                                        w={23}
                                    />
                                </Tooltip>
                            }
                        >
                            <Tooltip withArrow label={assets.large_text}>
                                <Image
                                    src={`https://cdn.discordapp.com/app-assets/${appId}/${assets?.large_image}.png`}
                                    alt="Rich Presence"
                                    w={50}
                                />
                            </Tooltip>
                        </Indicator>
                    ) : (
                        <Image
                            src={`https://cdn.discordapp.com/app-assets/${appId}/${assets?.large_image}.png`}
                            alt="Rich Presence"
                            w={50}
                        />
                    ))}
                <Stack gap={5}>
                    <Text fw="bolder" fz={20}>
                        {status.activities[0].name}
                    </Text>
                    <div>
                        <Text>{status.activities[0].details}</Text>
                        <br />
                        <Text>{status.activities[0].state}</Text>
                    </div>
                </Stack>
            </Group>
        </Paper>
    );
};
