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
  | "testingArea"
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

export type Status = "done" | "wip" | "dead" | "???";

export interface Project {
  name: string;
  desc?: string;
  status: Status;
  imgUrl?: string;
  techs: Tech[];
  buttons: ProjectButton[];
}

export type LanyardApiResponse = {
  success: boolean;
  data: {
    active_on_discord_mobile: boolean;
    active_on_discord_desktop: boolean;
    listening_to_spotify: boolean;
    spotify: {
      track_id: string;
      timestamps: {
        start: number;
        end: number;
      };
      song: string;
      artist: string;
      album_art_url: string;
      album: string;
    };
    discord_user: {
      username: string;
      public_flags: number;
      id: string;
      avatar: "a_7484f82375f47a487f41650f36d30318";
    };
    discord_status: "online" | "dnd" | "active" | "idle";
  };
};
