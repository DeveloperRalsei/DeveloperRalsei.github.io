import { createRoot } from "react-dom/client";
import { createTheme, MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import App from "./App";
import "./style.css";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import { MusicPlayerProvider } from "./components/context/MusicPlayer/MusicPlayerProvider";
import { SecretProvider } from "./components/context/secret/SecretContext";
import { PageProvider } from "./components/context/PageContext";
import { StrictMode } from "react";
import { IS_TODAY_MYBIRTHDAY } from "./data/constants";


const theme = createTheme({
    primaryColor: IS_TODAY_MYBIRTHDAY ? "orange" : "teal",
    fontFamily: "undertale",
    colors: {
        dark: [
            // WHAT!? Is it wrong that I don't know how to create my own color pallette?!
            // Anyway here's Dennis's credits hehe :3
            // https://github.com/TheAlan404/TheAlan404.github.io/blob/master/src/index.tsx

            "#C1C2C5",
            "#A6A7AB",
            "#909296",
            "#5c5f66",
            "#373A40",
            "#2C2E33",
            "#25262b",
            "#1A1B1E",
            "#141517",
            "#101113",
        ]
    },
    components: {
        Tooltip: {
            defaultProps: {
                color: "dark",
            },
        },
        Anchor: {
            defaultProps: {
                target: "_blank",
            },
        },
        Text: {
            defaultProps: {
                display: "inline",
            },
        },
    },
});

const AppWrapper = () => {
    return (
        <StrictMode>
            <MantineProvider theme={theme} forceColorScheme="dark">
                <SecretProvider secret={false}>
                    <MusicPlayerProvider>
                        <PageProvider>
                            <Notifications position="top-center" />
                            <App />
                        </PageProvider>
                    </MusicPlayerProvider>
                </SecretProvider>
            </MantineProvider>
        </StrictMode>
    );
};

createRoot(document.getElementById("root")!).render(<AppWrapper />);
