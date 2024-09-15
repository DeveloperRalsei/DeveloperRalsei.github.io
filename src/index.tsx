import { createRoot } from 'react-dom/client';
import { createTheme, MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import App from './App';
import './style.css';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import { MusicPlayerProvider } from './components/context/MusicPlayerProvider';

const theme = createTheme({
  primaryColor: "teal",
  fontFamily: "undertale",
  components: {
    Tooltip: {
      defaultProps: {
        color: "dark",
        withArrow: true
      }
    },
    Anchor: {
      defaultProps: {
        target: "_blank"
      }
    },
    UnstyledButton: {
      defaultProps: {

      }
    }
  }
});

createRoot(document.getElementById("root")!).render(
  <MantineProvider theme={theme} defaultColorScheme="dark">
    <MusicPlayerProvider>
      <Notifications />
      <App />
    </MusicPlayerProvider>
  </MantineProvider>
);