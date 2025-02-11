import { MantineColor } from "@mantine/core";
import {
    IconBook2,
    IconBooks,
    IconBrandGithub,
    IconDeviceDesktop,
    IconHomeFilled,
    IconQuestionMark,
} from "@tabler/icons-react";
import React from "react";

export const routes: {
    label: string;
    color: MantineColor;
    route: string;
    enabled?: boolean;
    icon?: React.ReactNode;
}[] = [
    {
        label: "Home",
        color: "grape",
        route: "",
        icon: <IconHomeFilled />,
    },
    {
        label: "About Me",
        color: "cyan",
        route: "about",
        icon: <IconBooks />,
    },
    {
        label: "Projects",
        color: "green",
        route: "projects",
        icon: <IconBrandGithub />,
    },
    {
        label: "My Desktop",
        color: "blue",
        route: "desktop",
        icon: <IconDeviceDesktop />,
    },
    {
        label: "Blogs",
        color: "red",
        route: "blogs",
        icon: <IconBook2 />,
    },
    {
        label: "???",
        color: "gray",
        route: "hmm",
        icon: <IconQuestionMark />,
        enabled: false,
    },
];
