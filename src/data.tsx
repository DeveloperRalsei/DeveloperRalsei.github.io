import {
  ActionIcon,
  Box,
  DefaultMantineColor,
  Group,
  Image,
  List,
  Loader,
  MantineColor,
  Space,
  Text,
  Tooltip,
} from "@mantine/core";
import Card from "./components/Card.tsx";
import {
  IconBook2,
  IconBrandCss3,
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandMantine,
  IconBrandMongodb,
  IconBrandMysql,
  IconBrandNodejs,
  IconBrandNpm,
  IconBrandReact,
  IconBrandSpotify,
  IconBrandTiktok,
  IconBrandTypescript,
  IconBrandUbuntu,
  IconBrandVisualStudio,
  IconChevronLeft,
  IconChevronRight,
  IconGitMerge,
  IconHomeFilled,
  IconMail,
} from "@tabler/icons-react";
import { Blog, Icon, page, ProfileLink, Project } from "./types";
import { learnMyAge } from "./helpers/utils";
import * as blog1 from "@blogs/first.mdx";
import usePage from "./hooks/usePage";
import useSecret from "./hooks/useSecret";
import { lazy } from "react";
import useBlogs from "./hooks/useBlogs.tsx";

const Home = lazy(() => import("./sections/Home.tsx"));
const AboutMe = lazy(() => import("./sections/AboutMe.tsx"));
const ProjectList = lazy(() => import("./sections/ProjectList.tsx"));
const BlogPage = lazy(() => import("./sections/Blogs.tsx"));
const BlogPostPage = lazy(() => import("./sections/BlogPost.tsx"));
const Secret = lazy(() => import("./sections/Secret.tsx"));
const DesktopPreview = lazy(() => import("./sections/DesktopPreview.tsx"));

export const listItems: { ["content"]: React.ReactNode }[] = [
  {
    content: (
      <>
        <Text>
          Well, I'm a simple guy who loves to code and lives in{" "}
          <Group display={"inline-flex"} gap={4}>
            <Tooltip label="It's Turkiye!!! not Turkey">
              <Text c={"red"} fw={700}>
                Turkiye
              </Text>
            </Tooltip>{" "}
            /{" "}
            <Tooltip label="Yes, this city is exist">
              <Text c={"cyan"} fw={700}>
                Isparta
              </Text>
            </Tooltip>
            <Tooltip label="GMT +3 / UTC +3">
              <Image src={"/images/as-bayraklari-as.png"} alt="Flag" w={20} />
            </Tooltip>
          </Group>
          .
        </Text>
      </>
    ),
  },
  {
    content: (
      <>
        I'm{" "}
        <Tooltip label="2006-04-11">
          <Text c="yellow" fw={700}>
            {learnMyAge()}
          </Text>
        </Tooltip>{" "}
        years old
      </>
    ),
  },
  {
    content: (
      <>
        I'm currently learning{" "}
        <Text c={"blue"} fw={700}>
          NextJs
        </Text>
        ,{" "}
        <Text c={"green"} fw={700}>
          C#
        </Text>
        , and{" "}
        <Text
          c={"gray"}
          component="a"
          href="https://deno.com"
          target="_blank"
          fw={700}
        >
          DenoJs
        </Text>
        .
      </>
    ),
  },
  {
    content: (
      <>
        <Text>
          I'm using{" "}
          <Text
            c={"blue"}
            fw={700}
            component="a"
            href="https://archlinux.org"
            target="_blank"
          >
            Arch Linux
          </Text>{" "}
          BTW. :P
        </Text>
      </>
    ),
  },
  {
    content: (
      <>
        <Text>
          I'm a big fan of{" "}
          <Tooltip label="Obviously">
            <Box display={"inline"}>
              {" ("}
              <Text
                c={"orange"}
                fw={700}
                component="a"
                href="https://undertale.com"
                target="_blank"
              >
                Undertale
              </Text>{" "}
              /{" "}
              <Text
                c={"green"}
                fw={700}
                component="a"
                href="https://deltarune.com"
                target="_blank"
              >
                Deltarune
              </Text>
              {")"}
            </Box>
          </Tooltip>
        </Text>
      </>
    ),
  },
  {
    content: (
      <>
        <Text>
          And I'm playing these games too:
          <List icon="-" size="sm">
            <List.Item>
              <Text
                c={"green"}
                component="a"
                href="https://minecraft.net"
                fw={700}
                target="_blank"
              >
                Minecraft
              </Text>
            </List.Item>
            <List.Item>
              <Tooltip
                label={
                  "I'm addicted to this game. Guess that's why I've less friends"
                }
              >
                <Text
                  c={"pink"}
                  fw={700}
                  component="a"
                  href="https://osu.ppy.sh"
                  target="_blank"
                >
                  Osu!
                </Text>
              </Tooltip>
            </List.Item>
            <List.Item>
              <Text
                c={"yellow"}
                fw={700}
                component="a"
                href="https://gamejolt.com/games/UndertaleYellow/136925"
                target="_blank"
              >
                Undertale Yellow
              </Text>
            </List.Item>
          </List>
        </Text>
      </>
    ),
  },
  {
    content: (
      <>
        <Text>
          I'm <Text c="grape">poor</Text> 🥲
        </Text>
      </>
    ),
  },
  {
    content: (
      <>
        My codes are usually being a spaghetti code. I just can't clean it up.
      </>
    ),
  },
  {
    content: (
      <>
        I'm a <Text c="blue">forgetful</Text> person. I can't remember what I've
        done last time.
      </>
    ),
  },
];

export const IconLinks: Icon[] = [
  {
    label: "HTML",
    icon: <IconBrandHtml5 />,
    href: "#",
    color: "orange",
  },
  {
    label: "CSS",
    icon: <IconBrandCss3 />,
    href: "#",
    color: "var(--mantine-color-blue-3)",
  },
  {
    label: "JS",
    icon: <IconBrandJavascript />,
    href: "#",
    color: "var(--mantine-color-yellow-5)",
  },
  {
    label: "TS",
    icon: <IconBrandTypescript />,
    href: "https://typescriptlang.org/",
    color: "#2f74c0",
  },
  {
    label: "NodeJS",
    icon: <IconBrandNodejs />,
    href: "https://nodejs.org/",
    color: "green",
  },
  {
    label: "NPM",
    icon: <IconBrandNpm />,
    href: "https://npmjs.com",
    color: "red",
  },
  {
    label: "React",
    icon: <IconBrandReact />,
    href: "https://react.dev/",
    color: "blue",
  },
  {
    label: "MySQL",
    icon: <IconBrandMysql />,
    href: "https://mysql.com",
    color: "cyan",
  },
  {
    label: "Git",
    icon: <IconGitMerge />,
    href: "https://git-scm.com",
    color: "#ff0000",
  },
  {
    label: "GitHub",
    icon: <IconBrandGithub />,
    href: "https://github.com",
    color: "#fff",
  },
  {
    label: "Mantine",
    icon: <IconBrandMantine />,
    href: "https://mantine.dev",
    color: "#339af0",
  },
  {
    label: "MongoDb",
    icon: <IconBrandMongodb />,
    href: "https://www.mongodb.com/",
    color: "#00ff00",
  },
  {
    label: "Linux",
    icon: (
      <Tooltip label="Debian/Ubuntu or Arch">
        <IconBrandUbuntu />
      </Tooltip>
    ),
    href: "https://kernel.org",
    color: "yellow",
  },
  {
    label: "Neovim",
    color: "green",
    href: "https://neovim.io/",
    icon: (
      <IconBrandVisualStudio />
    )
  }
];

export const ProfileLinks: ProfileLink[] = [
  {
    label: "TikTok",
    color: "pink",
    href: "https://www.tiktok.com/@developerralsei",
    icon: <IconBrandTiktok />,
  },
  {
    label: "Discord",
    icon: <IconBrandDiscord />,
    href: "https://discord.com/users/718798893445283863",
    color: "cyan",
  },
  // {
  //   label: "X",
  //   icon: <IconBrandX />,
  //   href: "https://x.com/HugPrinceRalsei",
  //   color: "#fff",
  // },
  {
    label: "Playlist",
    icon: <IconBrandSpotify />,
    href: "https://open.spotify.com/playlist/0sekcZeuwtAomcoRwkrPcS",
    color: "green",
  },
  {
    label: "Github",
    icon: <IconBrandGithub />,
    href: "https://github.com/DeveloperRalsei/",
    color: "#fff",
  },
  {
    label: "NameMC",
    icon: <Image src="/images/namemc.png" alt="namemc" w={25} radius={3} />,
    href: "https://namemc.com/profile/1riza",
    color: "#fff",
  },
  {
    label: "G-Mail",
    icon: <IconMail />,
    href: "mailto:fluffycutegoatboi@gmail.com",
    color: "orange",
  },
  {
    label: "osu!",
    icon: <Tooltip label="5 Digit (Mania)">
      <Image src={"/images/osu.png"} w={25} />
    </Tooltip>,
    href: "https://osu.ppy.sh/users/27076843",
    color: "pink",
  },
];


export const CurrentyLearning: {
  language: string;
  color: MantineColor;
}[] = [
    {
      color: "blue",
      language: "Go",
    },
    {
      language: "NextJS",
      color: "lime",
    },
    {
      language: "C#",
      color: "orange",
    },
    {
      language: "DenoJs",
      color: "white",
    },
  ];

export const Projects: Project[] = [
  {
    name: "This Web Site",
    status: "done",
    techs: ["ts", "react"],
    desc: "My own Website :3",
    buttons: [
      {
        type: "github",
        url: "https://github.com/developerRalsei/developerRalsei.github.io",
      },
    ],
  },
  {
    name: "Omsu",
    status: "wip",
    techs: ["ts", "js", "react", "nodejs"],
    desc: "An easy data viewer for osu! players",
    buttons: [
      { type: "github", url: "https://github.com/developerRalsei/omsu" },
      { type: "link", url: "https://omsu.onrender.com/", label: "Open Omsu" },
    ],
  },
  {
    name: "Product Managmant System",
    status: "wip",
    techs: ["ts", "nextjs"],
    desc: "My first nextjs project that has authentication and authorization system",
    buttons: [
      {
        type: "github",
        url: "https://github.com/DeveloperRalsei/Product-Managment-Template",
      },
      {
        type: "link",
        url: "https://product-managment-template.vercel.app/",
        label: "Open PMS",
      },
    ],
  },
  {
    name: "Public To-Do",
    status: "done",
    techs: ["ts", "mongodb", "react", "nodejs"],
    desc: "The public To-Do app that everyones can see and edit what they listing. I know it's stupid.",
    buttons: [
      {
        type: "github",
        url: "https://github.com/DeveloperRalsei/My-first-todo-app-but-with-mantine",
      },
      {
        type: "link",
        url: "https://ralseistods.onrender.com/",
        label: "Open ToDo",
      },
    ],
  },
  {
    name: "Node Web Starter Script",
    status: "done",
    techs: ["bash"],
    desc: "A script that helps you to quickly start a simple web application using nodejs expressjs and ejs.",
    buttons: [
      {
        type: "github",
        url: "https://github.com/DeveloperRalsei/NodeJS-Web-App-Bash-Script",
      },
    ],
  },
  {
    name: "Simple Blog App",
    status: "dead",
    techs: ["react", "mongodb", "nodejs"],
    desc: "I'm gonna rewrite a new one with nextjs",
    buttons: [
      {
        type: "github",
        url: "https://github.com/DeveloperRalsei/MERN-App-Blog-Template/",
      },
    ],
  },
  {
    name: "Task Manager",
    status: "wip",
    techs: ["nextjs", "ts"],
    desc: "An app that helps me to manage my projects",
    buttons: [
      {
        type: "github",
        url: "https://github.com/developerRalsei/task-manager",
      },
    ],
  },
];

export const blogs: Blog[] = [
  //@ts-ignore
  blog1.blogInfo,
];

export function getPageSwitcherConfig() {
  const { setPage, blogPageId } = usePage();
  const { secret } = useSecret();
  const blog = useBlogs(blogPageId);

  type PageSwitcher = {
    title: string;
    color: DefaultMantineColor;
    leftBtn: React.ReactNode;
    rightBtn: React.ReactNode;
    content: React.ReactNode;
  };

  const PageSwitcherConfig: {
    [K in page]: PageSwitcher /* yea I'm learning mapped types :P */;
  } = {
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
        <Tooltip label="My Desktop">
          <ActionIcon variant="light" onClick={() => setPage("desktopPreview")}>
            <IconChevronLeft />
          </ActionIcon>
        </Tooltip>
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

    testingArea: {
      color: "gray",
      title: "Testing Area",
      content: "",
      leftBtn: <></>,
      rightBtn: <></>,
    },

    desktopPreview: {
      color: "red",
      title: "My Desktop",
      content: <DesktopPreview />,
      leftBtn: (
        <Tooltip label="Home">
          <ActionIcon variant="light" onClick={() => setPage("home")}>
            <IconHomeFilled />
          </ActionIcon>
        </Tooltip>
      ),
      rightBtn: (
        <Tooltip label="Home">
          <ActionIcon variant="light" onClick={() => setPage("aboutme")}>
            <IconBook2 />
          </ActionIcon>
        </Tooltip>
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

  return PageSwitcherConfig;
}
