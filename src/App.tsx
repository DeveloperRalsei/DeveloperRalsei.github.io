import React, { useState } from 'react';
import { ActionIcon, AppShell, Avatar, Box, Container, Group, SimpleGrid, Space, Title, Tooltip } from '@mantine/core';
import AboutMe from './sections/AboutMe.tsx';
import Card from './components/Card.tsx';
import UselessInfo from './sections/UselessInfo.tsx';
import ProjectList from './sections/ProjectList.tsx';
import { IconArrowLeft } from '@tabler/icons-react';

export type page = "home" | "projects";

const App: React.FC = () => {
  const [page, setPage] = useState<page>("home");

  return <AppShell
    header={{ height: 70, offset: true }}
  >
    <AppShell.Header withBorder={false}>
      <Group align='center' h={"100%"} justify='center'>
        <Tooltip label="Uhmm... Hii!" position='left' withArrow>
          <Box style={{ position: "relative" }}>

            <Avatar src={"/images/pp.png"} alt='me :3' style={{ cursor: "pointer" }} radius={0} />
          </Box>
        </Tooltip>
        <Title ta={'center'} order={2} c={"teal"}>
          DeveloperRalsei
        </Title>
      </Group>

    </AppShell.Header>

    {
      page === "home" && (
        <AppShell.Main px={{ md: "xs" }}>
          <Container size={"lg"} mb={30}>
            <SimpleGrid cols={{ md: 2, xs: 1 }}>
              <AboutMe />
              <UselessInfo changePage={() => setPage("projects")} />
            </SimpleGrid>
          </Container>
        </AppShell.Main>
      )
    }
    {
      page === "projects" && (
        <AppShell.Main >
          <Container size={"xs"}>
            <Card title='Projects' icon={<ActionIcon
              variant='subtle'
              onClick={() => setPage("home")}
            >
              <IconArrowLeft />
            </ActionIcon>}>
              <ProjectList />
            </Card>
              <Space h={"10vh"}/>
          </Container>
          <Space h="5vh" />
        </AppShell.Main>
      )
    }



  </AppShell>;
};

export default App;
