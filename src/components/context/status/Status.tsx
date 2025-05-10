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

    const activeStatus = status.activities[0];

    return (
        <Paper w="100%" p="sm" withBorder>
            <Group align="center">
                <Stack gap={5}>
                    <Text fw="bolder" fz={20}>
                        {activeStatus.name}
                    </Text>
                    <div>
                        <Text>{activeStatus.details}</Text> <br />
                        <Text>{activeStatus.state}</Text> <br />
                    </div>
                </Stack>
            </Group>
        </Paper>
    );
};
