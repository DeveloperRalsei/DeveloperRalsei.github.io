import {
    AppShell,
    Avatar,
    Container,
    Group,
    Space,
    Title,
    Tooltip,
} from "@mantine/core";
// import AppRenderer from "./AppRenderer.tsx";
import { useReward } from "react-rewards";
import { useEffect, useTransition } from "react";
import { IS_BIRTHDAY_EVENT_ACTIVE } from "./data/constants.ts";
import { Outlet, useLocation } from "react-router-dom";
import { PageLoader } from "./components/Loader.tsx";
import Spamton from "./components/Spamton.tsx";
import PageSwitcher from "./components/PageSwitcher.tsx";

const App = () => {
    const { reward: reward2 } = useReward("Confetti2", "balloons");
    const { reward: reward1 } = useReward("Confetti1", "balloons");
    const { pathname } = useLocation();

    const [pending, startTransition] = useTransition();

    useEffect(() => {
        if (!IS_BIRTHDAY_EVENT_ACTIVE) return;
        const handleClick = () => {
            if (Math.random() < 0.05) {
                reward1();
                reward2();
            }
        };

        window.addEventListener("click", handleClick);
        return () => window.removeEventListener("click", handleClick);
    }, [reward1, reward2]);

    return (
        <AppShell header={{ height: 80, offset: true }}>
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
                <PageSwitcher startTranitionFunc={startTransition} />
                <Container
                    pt={30}
                    size={
                        pathname === "/desktop"
                            ? "xl"
                            : pathname === "/projects"
                              ? "xs"
                              : "sm"
                    }
                >
                    {pending ? <PageLoader /> : <Outlet />}

                    {/* <Suspense fallback={<PageLoader />}> */}
                    {/*     <Outlet /> */}
                    {/* </Suspense> */}
                </Container>
            </AppShell.Main>
            <span
                id="Confetti1"
                style={{
                    position: "absolute",
                    bottom: 0,
                    right: 30,
                }}
            />
            <span
                id="Confetti2"
                style={{
                    position: "absolute",
                    bottom: 0,
                    left: 30,
                }}
            />
            <Spamton />
            <Space h={"20vh"} />
        </AppShell>
    );
};

export default App;
