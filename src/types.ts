import { DefaultMantineColor } from "@mantine/core";

export type Blog = {
    id: number;
    title: string;
    description: string;
    date: Date;
    slug: string;
};

export type Music = {
    id: number;
    title: string;
    artist: string;
    musicPath: string;
    coverPath: string;
};

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

export type Tech =
    | "???"
    | "html"
    | "css"
    | "js"
    | "ts"
    | "nodejs"
    | "mysql"
    | "mongodb"
    | "bash"
    | "react"
    | "nextjs"
    | "go"
    | "csharp";

export type ProjectButton = {
    color?: DefaultMantineColor;
} & (
    | {
          type: "github";
      }
    | {
          type: "link";
          label: string;
          url: string;
      }
    | {
          type: "custom";
          label: string;
          onClick: () => void;
      }
);

export type ProjectStatus = "done" | "wip" | "dead" | "???";
export type ProjectType = "desktop" | "web" | "cli" | "mobile" | "restapi";

export type Project = {
    name: string;
    type?: ProjectType;
    desc: string;
    img?: string;
    techs: Tech[];
    status: ProjectStatus;
    buttons: ProjectButton[];
    finishedAt?: Date;
    sourceCodeName?: string;
};
