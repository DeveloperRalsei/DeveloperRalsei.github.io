import { Box, Group, Image, List, Text, Tooltip } from "@mantine/core";
import {
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
  IconBrandTypescript,
  IconBrandUbuntu,
  IconBrandX,
  IconDeviceDesktop,
  IconGitMerge,
  IconMail,
} from "@tabler/icons-react";
import { Icon, ProfileLink, Project } from "./types";

export const listItems = [
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
              <Text
                c={"pink"}
                fw={700}
                component="a"
                href="https://osu.ppy.sh"
                target="_blank"
              >
                Osu!
              </Text>
              (I'm addicted to this game. Guess that's why I've less friends,
              🥲)
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
];

export const funFactListItems = [
  {
    content: (
      <>
        <Text>
          I'm 18 years old guy and my student carrier is{" "}
          <Text c={"red"} fw={700}>
            {" "}
            OVER!
          </Text>{" "}
          Unfortunately, my dad is pushing me to find a job and I'm not that
          able to find a job I don't like. (This programming stuff is inculed).
        </Text>
      </>
    ),
  },
  {
    content: (
      <>
        <Text>
          I'm about to become a poor because of my dad. After all he still want{" "}
          <Text c={"teal"}>ME!</Text> to pay for bills :/
        </Text>
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
    href: "https://mantine.dev",
    color: "yellow",
  },
];

export const ProfileLinks: ProfileLink[] = [
  {
    label: "Discord",
    icon: <IconBrandDiscord />,
    href: "https://discord.com/users/718798893445283863",
    color: "cyan",
  },
  {
    label: "X",
    icon: <IconBrandX />,
    href: "https://x.com/HugPrinceRalsei",
    color: "#fff",
  },
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
    icon: (
      <Tooltip label={<Text display={"inline"}>6 DIGIT &#x1f480;</Text>}>
        <Image src={"/images/osu.png"} alt="osu" w={25} />
      </Tooltip>
    ),
    href: "https://osu.ppy.sh/users/27076843",
    color: "pink",
  },
  {
    label: "My Desktop",
    icon: (
      <Tooltip
        label={<Image src={"/images/desktop.png"} alt="MyDesktop" w={600} />}
      >
        <IconDeviceDesktop />
      </Tooltip>
    ),
    href: "/images/desktop.png",
    color: "lime",
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
    url: "https://github.com/developerRalsei/developerRalsei.github.io",
  },
  {
    name: "Omsu",
    status: "wip",
    techs: ["ts", "js", "react", "nodejs"],
    url: "https://omsu.onrender.com/",
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
    desc: "A product managment system for my company. Also my first nextjs project that haves authorisation system.",
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
    desc: "The public To-Do app that everyones can see what listing.",
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
    desc: "This project somehow helps you to quickly start a simple web application using nodejs expressjs and ejs.",
    buttons: [
      {
        type: "github",
        url: "https://github.com/DeveloperRalsei/NodeJS-Web-App-Bash-Script",
      },
    ],
  },
  {
    name: "Simple Blog App",
    status: "abandoned",
    techs: ["react", "mongodb", "nodejs"],
    desc: "I'm gonna rewrite a new one with nextjs",
    buttons: [
      {
        type: "github",
        url: "https://github.com/DeveloperRalsei/MERN-App-Blog-Template/",
      },
    ],
  },
];
