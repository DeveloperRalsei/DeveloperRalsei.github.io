import { useContext, useEffect, useState, lazy, Suspense } from "react";
import {
  ActionIcon,
  AppShell,
  Avatar,
  Container,
  Group,
  Space,
  Title,
  Tooltip,
} from "@mantine/core";
import Card from "./components/Card.tsx";
import {
  IconBook2,
  IconChevronLeft,
  IconChevronRight,
} from "@tabler/icons-react";
import { PageSwitcher } from "./components/PageSwitcher.tsx";
import Secret from "./sections/Secret.tsx";
import { SecretContext } from "./components/context/secret/SecretContext.tsx";
import { PageLoader } from "./components/Loader.tsx";

// import Home from "./sections/Home.tsx";
// import AboutMe from "./sections/AboutMe.tsx";
// import ProjectList from "./sections/ProjectList.tsx";

const Home = lazy(() => import("./sections/Home.tsx"));
const AboutMe = lazy(() => import("./sections/AboutMe.tsx"));
const ProjectList = lazy(() => import("./sections/ProjectList.tsx"));

export type page = "home" | "aboutme" | "projects" | "???";

const App = () => {
  const [page, setPage] = useState<page>("home");
  const { secret, changeSecret } = useContext(SecretContext);

  useEffect(() => {
    window.scrollTo(0, 0);
    changeSecret();
  }, [page]);

  const PageSwitcherBtns = {
    homePageRightBtn: (
      <Tooltip label="My Links">
        <ActionIcon variant="light" onClick={() => setPage("aboutme")}>
          <IconChevronRight />
        </ActionIcon>
      </Tooltip>
    ),

    homePageLeftBtn: (
      <ActionIcon variant="light" disabled>
        <IconChevronLeft />
      </ActionIcon>
    ),

    aboutmeLeftBtn: (
      <Tooltip label="Home">
        <ActionIcon variant="light" onClick={() => setPage("home")}>
          <IconChevronLeft />
        </ActionIcon>
      </Tooltip>
    ),

    aboutmeRightBtn: (
      <Tooltip label="Projects">
        <ActionIcon variant="light" onClick={() => setPage("projects")}>
          <IconChevronRight />
        </ActionIcon>
      </Tooltip>
    ),

    projectsPageLeftBtn: (
      <Tooltip label="My Links">
        <ActionIcon variant="light" onClick={() => setPage("aboutme")}>
          <IconChevronLeft />
        </ActionIcon>
      </Tooltip>
    ),

    "???leftBtn": (
      <Tooltip label="Projects">
        <ActionIcon variant="light" onClick={() => setPage("projects")}>
          <IconChevronLeft />
        </ActionIcon>
      </Tooltip>
    ),

    "???rightBtn": (
      <ActionIcon disabled variant="light" onClick={() => setPage("projects")}>
        <IconChevronRight />
      </ActionIcon>
    ),

    projectsPageRightBtn: secret ? (
      <div></div>
    ) : (
      <Tooltip label="???">
        <ActionIcon variant="light" onClick={() => setPage("???")}>
          <IconChevronRight />
        </ActionIcon>
      </Tooltip>
    ),
  };

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
        {page === "home" && (
          <>
            <PageSwitcher
              page="Home"
              pageTitleColor="grape"
              rightBtn={PageSwitcherBtns.homePageRightBtn}
              leftBtn={PageSwitcherBtns.homePageLeftBtn}
            />
            <Suspense fallback={<PageLoader />}>
              <Container size={"sm"} mb={30}>
                <Home />
              </Container>
            </Suspense>
          </>
        )}

        {page === "aboutme" && (
          <>
            <PageSwitcher
              page="My Skills"
              pageTitleColor="green"
              leftBtn={PageSwitcherBtns.aboutmeLeftBtn}
              rightBtn={PageSwitcherBtns.aboutmeRightBtn}
            />
            <Suspense fallback={<PageLoader />}>
              <Container size="sm">
                <AboutMe />
              </Container>
            </Suspense>
          </>
        )}

        {page === "projects" && (
          <>
            <PageSwitcher
              page="Projects"
              pageTitleColor="blue"
              leftBtn={PageSwitcherBtns.projectsPageLeftBtn}
              rightBtn={PageSwitcherBtns.projectsPageRightBtn}
            />
            <Suspense fallback={<PageLoader />}>
              <Container size={"xs"}>
                <Card title="Projects" icon={<IconBook2 />}>
                  <ProjectList />
                </Card>
                <Space h={"10vh"} />
              </Container>
            </Suspense>
            <Space h="5vh" />
          </>
        )}

        {page === "???" && (
          <Container size={"sm"}>
            <PageSwitcher
              page="???"
              leftBtn={PageSwitcherBtns["???leftBtn"]}
              rightBtn={PageSwitcherBtns["???rightBtn"]}
            />
            <Secret />
          </Container>
        )}
      </AppShell.Main>
    </AppShell>
  );
};

export default App;
