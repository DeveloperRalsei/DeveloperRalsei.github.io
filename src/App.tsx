import { AppShell, Avatar, Group, Title, Tooltip } from "@mantine/core";
import AppRenderer from "./AppRenderer.tsx";
import { useEffect } from "react";
import usePage from "./hooks/usePage.tsx";

const App = () => {
  const { setPage } = usePage();

  useEffect(() => {
    //@ts-ignore
    window.testing = false;

    //@ts-ignore
    if (window.testing) {
      setPage("testingArea");
    }
  }, []);

  return (
    <AppShell header={{ height: 60, offset: true }}>
      <AppShell.Header withBorder={false}>
        <Group align="center" h={"100%"} justify="center">
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
    </AppShell>
  );
};

export default App;
