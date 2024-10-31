import { createRoot } from "react-dom/client";
import { createTheme, MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import App from "./App";
import "./style.css";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import { MusicPlayerProvider } from "./components/context/MusicPlayer/MusicPlayerProvider";
import ILEFT from "./sections/ILEFT";
import { SecretProvider } from "./components/context/secret/SecretContext";

const theme = createTheme({
  primaryColor: "green",
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
    <MantineProvider theme={theme}>
      <SecretProvider secret={false}>
        <MusicPlayerProvider>
          <Notifications position="top-center" />
          <App />
        </MusicPlayerProvider>
      </SecretProvider>
    </MantineProvider>
  );
};

createRoot(document.getElementById("root")!).render(<AppWrapper />);
