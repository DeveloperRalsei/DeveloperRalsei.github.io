import { DefaultMantineColor, useMantineTheme } from "@mantine/core"
import { IconBrandCss3, IconBrandGithub, IconBrandHtml5, IconBrandJavascript, IconBrandMysql, IconBrandNodejs, IconBrandNpm, IconBrandReact, IconBrandTypescript, IconGitMerge } from "@tabler/icons-react"
import React from "react"

export const theme = () => {
  const theme = useMantineTheme()
  return theme
}

export namespace Types {
  export type Icon = {
    label: string
    icon: React.ReactNode
    href: string
    color: DefaultMantineColor
  }

  type Tech = 'html' | 'css' | 'js' | 'ts' | 'nodejs' | 'mysql' | 'mongoDb' | 'bash' | 'react'
  type ProjectButton = { type: 'link' | 'github', url: string, color?: DefaultMantineColor, icon?: React.ReactNode }

  export interface Project {
    name: string
    desc?: string
    status: 'done' | 'wip' | 'forgotten' | 'abandoned'
    imgUrl?: string
    techs: Tech[]
    buttons: ProjectButton[]
    url?: string
  }
}

export const IconLinks: Types.Icon[] = [
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
    label: "NPM",
    icon: <IconBrandNpm />,
    href: "https://npmjs.com",
    color: "red"
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
]

export const Projects: Types.Project[] = [
  {
    name: "This Web Site",
    status: "wip",
    techs: ["ts", 'react'],
    desc: "My own Website",
    buttons: [{ type: "github", url: "https://github.com/developerRalsei/developerRalsei.github.io" }, { type: "link", url: '/' }],
    url: "https://github.com/developerRalsei/developerRalsei.github.io"
  }
]