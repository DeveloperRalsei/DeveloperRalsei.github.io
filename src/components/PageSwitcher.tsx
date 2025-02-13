import { routes } from "@/data/routes";
import { ActionIcon, Container, Group, Tooltip } from "@mantine/core";
import { useSecret } from "@/hooks";

export const PageSwitcher = ({
    startTranitionFunc,
}: {
    startTranitionFunc: React.TransitionStartFunction;
}) => {
    const { secret } = useSecret();

    const handleClick = (route: string) => {
        startTranitionFunc(() => {
            window.location.hash = route;
        });
    };

    return (
        <Container size={"xs"}>
            <Group w={"100%"} justify="space-between">
                {routes
                    .filter((route) =>
                        route.route === "hmm"
                            ? secret
                            : (route.enabled ?? true),
                    )
                    .map((route) => (
                        <Tooltip
                            key={route.route + route.color}
                            label={route.label}
                            withArrow
                        >
                            <ActionIcon
                                variant="light"
                                onClick={() => handleClick(route.route)}
                                component="a"
                                radius={"sm"}
                                size={"lg"}
                                color={route.color}
                            >
                                {route.icon}
                            </ActionIcon>
                        </Tooltip>
                    ))}
            </Group>
        </Container>
    );
};

export default PageSwitcher;
