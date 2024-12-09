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

const theme = createTheme({
  primaryColor: "teal",
  fontFamily: "undertale",
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
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <SecretProvider secret={false}>
        <MusicPlayerProvider>
          <PageProvider>
            <Notifications position="top-center" />
            <App />
          </PageProvider>
        </MusicPlayerProvider>
      </SecretProvider>
    </MantineProvider>
  );
};

createRoot(document.getElementById("root")!).render(<AppWrapper />);
