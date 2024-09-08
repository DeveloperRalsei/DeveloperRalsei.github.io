import { DefaultMantineColor, Image, Text, Tooltip } from "@mantine/core";
import { IconBrandCss3, IconBrandDiscord, IconBrandGithub, IconBrandHtml5, IconBrandJavascript, IconBrandMantine, IconBrandMysql, IconBrandNodejs, IconBrandNpm, IconBrandReact, IconBrandSpotify, IconBrandTypescript, IconBrandUbuntu, IconBrandX, IconDeviceDesktop, IconGitMerge, IconMail } from "@tabler/icons-react";
import React from "react";

export type Icon = {
  label: string;
  icon: React.ReactNode;
  href: string;
  color: DefaultMantineColor;
};

export type ProfileLink = {
  label: string;
  icon: React.ReactNode;
  href: string;
  color: DefaultMantineColor;
};

type Tech = 'html' | 'css' | 'js' | 'ts' | 'nodejs' | 'mysql' | 'mongodb' | 'bash' | 'react' | 'electron';
type ProjectButton = {
  type: 'link' | 'github' | 'custom',
  url: string, color?: DefaultMantineColor,
  icon?: React.ReactNode, label?: string;
};

export interface Project {
  name: string;
  desc?: string;
  status: 'done' | 'wip' | 'forgotten' | 'abandoned';
  imgUrl?: string;
  techs: Tech[];
  buttons: ProjectButton[];
  url?: string;
}

export const IconLinks: Icon[] = [
  {
    label: "HTML",
    icon: <IconBrandHtml5 />,
    href: "#",
    color: "orange"
  },
  {
    label: "CSS",
    icon: <IconBrandCss3 />,
    href: "#",
    color: "var(--mantine-color-blue-3)"
  },
  {
    label: "JS",
    icon: <IconBrandJavascript />,
    href: "#",
    color: "var(--mantine-color-yellow-5)"
  },
  {
    label: "TS",
    icon: <IconBrandTypescript />,
    href: "https://typescriptlang.org/",
    color: "#2f74c0"
  },
  {
    label: "NodeJS",
    icon: <IconBrandNodejs />,
    href: "https://nodejs.org/",
    color: "green"
  },
  {
    label: "NPM",
    icon: <IconBrandNpm />,
    href: "https://npmjs.com",
    color: "red"
  },
  {
    label: "React",
    icon: <IconBrandReact />,
    href: "https://react.dev/",
    color: "blue"
  },
  {
    label: "MySQL",
    icon: <IconBrandMysql />,
    href: "https://mysql.com",
    color: "cyan"
  },
  {
    label: "Git",
    icon: <IconGitMerge />,
    href: "https://git-scm.com",
    color: "#ff0000"
  },
  {
    label: "GitHub",
    icon: <IconBrandGithub />,
    href: "https://github.com",
    color: "#fff"
  },
  {
    label: "Mantine",
    icon: <IconBrandMantine />,
    href: "https://mantine.dev",
    color: "#339af0"
  },
  {
    label: "Linux",
    icon: <Tooltip label="Debian/Ubuntu or Arch"><IconBrandUbuntu /></Tooltip>,
    href: "https://mantine.dev",
    color: "yellow"
  },

];

export const ProfileLinks = [
  {
    label: "Discord",
    icon: <IconBrandDiscord />,
    href: "https://discord.com/users/718798893445283863",
    color: "cyan"
  },
  {
    label: "X",
    icon: <IconBrandX />,
    href: "https://x.com/HugPrinceRalsei",
    color: "#fff"
  },
  {
    label: "Playlist",
    icon: <IconBrandSpotify />,
    href: "https://open.spotify.com/playlist/0sekcZeuwtAomcoRwkrPcS",
    color: "green"
  },
  {
    label: "Github",
    icon: <IconBrandGithub />,
    href: "https://github.com/DeveloperRalsei/",
    color: "#fff"
  },
  {
    label: "NameMC",
    icon: <Image src="/images/namemc.png" alt="namemc" w={25} radius={3} />,
    href: "https://namemc.com/profile/1riza",
    color: "#fff"
  },
  {
    label: "G-Mail",
    icon: <IconMail />,
    href: "mailto:fluffycutegoatboi@gmail.com",
    color: "orange"
  },
  {
    label: "osu!",
    icon: <Tooltip label={<Text display={"inline"}>6 DIGIT &#x1f480;</Text>}><Image src={"/images/osu.png"} alt="osu" w={25} /></Tooltip>,
    href: "https://osu.ppy.sh/users/27076843",
    color: "pink"
  },
  {
    label: "My Desktop",
    icon: (
      <Tooltip label={(
        <Image src={"/images/desktop.png"} alt="MyDesktop" w={600} />
      )}>
        <IconDeviceDesktop />
      </Tooltip>
    ),
    href: "/images/desktop.png",
    color: "lime"
  },
] as ProfileLink[];

export const Projects: Project[] = [
  {
    name: "This Web Site",
    status: "done",
    techs: ["ts", 'react'],
    desc: "My own Website :3",
    buttons: [{ type: "github", url: "https://github.com/developerRalsei/developerRalsei.github.io" }],
    url: "https://github.com/developerRalsei/developerRalsei.github.io"
  },
  {
    name: "Node Web Starter Script",
    status: "done",
    techs: ["bash"],
    desc: "This project somehow helps you to quickly start a simple web application using nodejs expressjs and ejs.",
    buttons: [{ type: "github", url: "https://github.com/DeveloperRalsei/NodeJS-Web-App-Bash-Script" }],
  },
  {
    name: "Simple Blog App",
    status: "wip",
    techs: ["react", "mongodb", "nodejs"],
    desc: "A simple blog viewer app with an admin panel that you can manage all blogs you see. Using MongoDB, ExpressJS, React, NodeJS",
    buttons: [{ type: "github", url: "https://github.com/DeveloperRalsei/MERN-App-Blog-Template/" }],
  },
  {
    name: "Public To-Do",
    status: "done",
    techs: ["ts", "mongodb", "react", "nodejs"],
    desc: "The public To-Do app that everyones can see what listing.",
    buttons: [
      { type: "github", url: "https://github.com/DeveloperRalsei/My-first-todo-app-but-with-mantine" },
      { type: "link", url: "https://ralseistods.onrender.com/" }
    ]
  }
];