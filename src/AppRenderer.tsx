import {
  Container,
  Tooltip,
  ActionIcon,
  Space,
  DefaultMantineColor,
} from "@mantine/core";
import PageSwitcher from "./components/PageSwitcher.tsx";
import Card from "./components/Card.tsx";
import { Suspense, useEffect, lazy } from "react";
import { PageLoader } from "./components/Loader.tsx";
import {
  IconBook2,
  IconChevronLeft,
  IconChevronRight,
  IconHomeFilled,
} from "@tabler/icons-react";
import { page } from "@/types";
import Secret from "./sections/Secret.tsx";
import usePage from "@/hooks/usePage";
import useSecret from "@/hooks/useSecret.tsx";
import useBlogs from "@/hooks/useBlogs.tsx";

const Home = lazy(() => import("./sections/Home.tsx"));
const AboutMe = lazy(() => import("./sections/AboutMe.tsx"));
const ProjectList = lazy(() => import("./sections/ProjectList.tsx"));
const BlogPage = lazy(() => import("./sections/Blogs.tsx"));
const BlogPostPage = lazy(() => import("./sections/BlogPost.tsx"));

export default function AppRenderer() {
  const { page, setPage, blogPageId } = usePage();
  const { secret, setSecret } = useSecret();
  const blog = useBlogs(blogPageId);

  useEffect(() => {
    scrollTo(0, 0);
    setSecret(false);
  }, [page]);

  type PageSwitcher = {
    title: string;
    color: DefaultMantineColor;
    leftBtn: React.ReactNode;
    rightBtn: React.ReactNode;
    content: React.ReactNode;
  };

  const PageSwitcherConfig: Record<page, PageSwitcher> = {
    home: {
      title: "Home",
      color: "grape",
      leftBtn: (
        <Tooltip label="Blogs">
          <ActionIcon variant="light" onClick={() => setPage("blog")}>
            <IconChevronLeft />
          </ActionIcon>
        </Tooltip>
      ),
      rightBtn: (
        <Tooltip label="My Links">
          <ActionIcon variant="light" onClick={() => setPage("aboutme")}>
            <IconChevronRight />
          </ActionIcon>
        </Tooltip>
      ),
      content: <Home />,
    },
    blog: {
      title: "Blogs",
      color: "orange",
      leftBtn: (
        <ActionIcon variant="light" disabled>
          <IconChevronLeft />
        </ActionIcon>
      ),
      rightBtn: (
        <Tooltip label="Home">
          <ActionIcon variant="light" onClick={() => setPage("home")}>
            <IconChevronRight />
          </ActionIcon>
        </Tooltip>
      ),
      content: <BlogPage />,
    },

    "blog-post": {
      title: blog?.title || "Title not found",
      color: "pink",
      leftBtn: (
        <Tooltip label="Blogs">
          <ActionIcon variant="light" onClick={() => setPage("blog")}>
            <IconBook2 />
          </ActionIcon>
        </Tooltip>
      ),
      rightBtn: (
        <Tooltip label="Home">
          <ActionIcon variant="light" onClick={() => setPage("home")}>
            <IconHomeFilled />
          </ActionIcon>
        </Tooltip>
      ),
      content: <BlogPostPage />,
    },

    aboutme: {
      title: "My Skills",
      color: "green",
      leftBtn: (
        <Tooltip label="Home">
          <ActionIcon variant="light" onClick={() => setPage("home")}>
            <IconChevronLeft />
          </ActionIcon>
        </Tooltip>
      ),
      rightBtn: (
        <Tooltip label="Projects">
          <ActionIcon variant="light" onClick={() => setPage("projects")}>
            <IconChevronRight />
          </ActionIcon>
        </Tooltip>
      ),
      content: <AboutMe />,
    },
    projects: {
      title: "Projects",
      color: "blue",
      leftBtn: (
        <Tooltip label="My Links">
          <ActionIcon variant="light" onClick={() => setPage("aboutme")}>
            <IconChevronLeft />
          </ActionIcon>
        </Tooltip>
      ),
      rightBtn: (
        <Tooltip label="???">
          <ActionIcon
            variant="light"
            disabled={!secret}
            onClick={() => setPage("???")}
          >
            <IconChevronRight />
          </ActionIcon>
        </Tooltip>
      ),
      content: (
        <>
          <Card title="Projects" icon={<IconBook2 />}>
            <ProjectList />
          </Card>
          <Space h={"10vh"} />
        </>
      ),
    },

    "???": {
      title: "???",
      leftBtn: (
        <Tooltip label="Projects">
          <ActionIcon variant="light" onClick={() => setPage("projects")}>
            <IconChevronLeft />
          </ActionIcon>
        </Tooltip>
      ),
      color: "dark",
      rightBtn: (
        <ActionIcon
          disabled
          variant="light"
          onClick={() => setPage("projects")}
        >
          <IconChevronRight />
        </ActionIcon>
      ),
      content: <Secret />,
    },
  };

  const currentPage = PageSwitcherConfig[page];
  if (!currentPage) throw new Error(`Page configuration ${page} not found`);

  return (
    <>
      <PageSwitcher
        page={currentPage.title}
        pageTitleColor={currentPage.color}
        leftBtn={currentPage.leftBtn}
        rightBtn={currentPage.rightBtn}
      />
      <Suspense fallback={<PageLoader />}>
        <Container size={page === "projects" ? "xs" : "sm"} mb={30}>
          {currentPage.content}
        </Container>
      </Suspense>
    </>
  );
}
