import { DefaultMantineColor } from "@mantine/core";

export type Blog = {
  id: number;
  title: string;
  description: string;
  date: Date;
  slug: string;
};

export type page =
  | "home"
  | "blog"
  | "blog-post"
  | "aboutme"
  | "projects"
  | "???";

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
  | "nextjs";

export type ProjectButton = {
  color?: DefaultMantineColor;
} & (
  | {
      type: "github";
      url: string;
    }
  | {
      type: "link";
      label: string;
      url: string;
    }
  | {
      type: "custom";
      label: string;
      onClick: (...params: any) => void;
    }
);

export interface Project {
  name: string;
  desc?: string;
  status: "done" | "wip" | "forgotten" | "abandoned" | "???";
  imgUrl?: string;
  techs: Tech[];
  buttons: ProjectButton[];
  url?: string;
}
