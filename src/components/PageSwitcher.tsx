import { routes } from "@/data/routes";
import {
    ActionIcon,
    Container,
    Group,
    MantineColor,
    Tooltip,
} from "@mantine/core";
import { useSecret } from "@/hooks";
import { usePage } from "./context/page";
import { useLocation } from "react-router-dom";

export const PageSwitcher = ({
    startTranitionFunc,
}: {
    startTranitionFunc: React.TransitionStartFunction;
}) => {
    const { secret } = useSecret();
    const { setPage } = usePage();
    const { pathname } = useLocation();

    const handleClick = (route: string, label: string) => {
        startTranitionFunc(() => {
            setPage({
                pageLabel: label,
            });
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
                    .map((route) => {
                        const active = pathname === `/${route.route}`;
                        return (
                            <Tooltip
                                key={route.route}
                                label={route.label}
                                withArrow
                            >
                                <ActionIcon
                                    variant="light"
                                    onClick={() =>
                                        handleClick(route.route, route.label)
                                    }
                                    component="a"
                                    radius={"sm"}
                                    size={"lg"}
                                    color={active ? "blue" : "gray"}
                                >
                                    {route.icon}
                                </ActionIcon>
                            </Tooltip>
                        );
                    })}
            </Group>
        </Container>
    );
};

export default PageSwitcher;
