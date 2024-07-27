import { createRoot } from 'react-dom/client';
import { createTheme, MantineProvider } from '@mantine/core';
import App from './App'
import './style.css'
import '@mantine/core/styles.css'

const theme = createTheme({
  primaryColor: "teal",
  fontFamily: "undertale",
  components: {
    Tooltip: {
      defaultProps: {
        color: "dark"
      }
    }
  }
})

createRoot(document.getElementById("root")!).render(
  <MantineProvider theme={theme} defaultColorScheme="dark">
    <App />
  </MantineProvider>
)