import {
    AppShell,
    Avatar,
    Container,
    Group,
    Space,
    Title,
} from "@mantine/core";
// import AppRenderer from "./AppRenderer.tsx";
import { useTransition } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { PageLoader } from "./components/Loader.tsx";
import Spamton from "./components/Spamton.tsx";
import PageSwitcher from "./components/PageSwitcher.tsx";
import { useHotkeys } from "@mantine/hooks";
import i18n from "./i18n.ts";
import { LangAffix } from "./components/home/languageAffix.tsx";
import { usePage } from "./components/context/page/index.tsx";

const App = () => {
    const { pathname } = useLocation();

    const [pending, startTransition] = useTransition();
    const { pageLabel, color: titleColor } = usePage();

    useHotkeys([
        ["1", () => i18n.changeLanguage("en")],
        ["2", () => i18n.changeLanguage("tr")],
    ]);

    return (
        <AppShell header={{ height: 80, offset: true }}>
            <AppShell.Header withBorder={false}>
                <Group align="center" h={"100%"} justify="space-around">
                    <Group>
                        <Avatar
                            src={
                                "https://cdn.discordapp.com/avatars/718798893445283863/3a146ccc94dd2c6e917dc6eb3ce62276.webp?size=128"
                            }
                            alt="me :3"
                            size="lg"
                            radius={0}
                            style={{ cursor: "pointer" }}
                        />
                        <Title ta={"center"} order={3} c={"teal"}>
                            Developer Ralsei
                        </Title>
                    </Group>
                </Group>
            </AppShell.Header>

            <AppShell.Main px={{ md: "xs" }}>
                <PageSwitcher startTranitionFunc={startTransition} />
                <Title c={titleColor} mt={5} order={3} ta="center">
                    {pageLabel}
                </Title>
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
                <Space h="10vh" />
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
            <LangAffix />
        </AppShell>
    );
};

export default App;
