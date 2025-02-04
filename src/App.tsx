import { AppShell, Avatar, Group, Title, Tooltip } from "@mantine/core";
import AppRenderer from "./AppRenderer.tsx";
import { useReward } from 'react-rewards'
import { useEffect } from "react";
import { IS_BIRTHDAY_EVENT_ACTIVE } from "./data/constants.ts";

const App = () => {
    const { reward: reward2 } = useReward("Confetti2", "balloons")
    const { reward: reward1 } = useReward("Confetti1", "balloons")


    useEffect(() => {
        if (!IS_BIRTHDAY_EVENT_ACTIVE) return
        const handleClick = () => {
            if (Math.random() < 0.20) {
                reward1();
                reward2();
            }
        };

        window.addEventListener("click", handleClick);
        return () => window.removeEventListener("click", handleClick);
    }, [reward1, reward2]);

    return (
        <AppShell header={{ height: 60, offset: true }} >
            <AppShell.Header withBorder={false}>
                <Group align="center" h={"100%"} justify="space-around">
                    <Group>
                        <Tooltip label=":3" position="left" withArrow>
                            <Avatar
                                src={"/images/pp.png"}
                                alt="me :3"
                                style={{ cursor: "pointer" }}
                                radius={0}
                            />
                        </Tooltip>
                        <Title ta={"center"} order={3} c={"teal"}>
                            DeveloperRalsei
                        </Title>
                    </Group>
                </Group>
            </AppShell.Header>

            <AppShell.Main px={{ md: "xs" }}>
                <AppRenderer />
            </AppShell.Main>
            <span id="Confetti1" style={{
                position: "absolute",
                bottom: 0,
                right: 30
            }} />
            <span id="Confetti2" style={{
                position: "absolute",
                bottom: 0,
                left: 30
            }} />
        </AppShell>
    );
};

export default App;
