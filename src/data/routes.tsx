import { MantineColor } from "@mantine/core";
import {
    IconBook2,
    IconBooks,
    IconBrandGithub,
    IconDeviceDesktop,
    IconHomeFilled,
    IconMessageFilled,
    IconMusic,
    IconQuestionMark,
} from "@tabler/icons-react";
import React from "react";
import { CHAT } from "./feature-flags";

export const routes: {
    label: string;
    color: MantineColor;
    route: string;
    enabled?: boolean;
    icon?: React.ReactNode;
}[] = [
    {
        label: "Home",
        color: "red",
        route: "",
        icon: <IconHomeFilled />,
    },
    {
        label: "About Me",
        color: "orange",
        route: "about",
        icon: <IconBooks />,
    },
    {
        label: "Projects",
        color: "yellow",
        route: "projects",
        icon: <IconBrandGithub />,
    },
    {
        label: "My Desktop",
        color: "green",
        route: "desktop",
        icon: <IconDeviceDesktop />,
    },
    {
        label: "Blogs",
        color: "blue",
        route: "blogs",
        icon: <IconBook2 />,
    },
    {
        label: "Music",
        color: "indigo",
        route: "music",
        icon: <IconMusic />,
    },
    {
        label: "Chat",
        color: "pink",
        route: "chat",
        icon: <IconMessageFilled />,
        enabled: CHAT,
    },
    {
        label: "???",
        color: "gray",
        route: "hmm",
        icon: <IconQuestionMark />,
        enabled: false,
    },
];
