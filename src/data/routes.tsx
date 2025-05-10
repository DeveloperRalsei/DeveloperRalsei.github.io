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

export const routes: {
    label: string;
    route: string;
    enabled?: boolean;
    icon?: React.ReactNode;
}[] = [
    {
        label: "Home",
        route: "",
        icon: <IconHomeFilled />,
    },
    {
        label: "About Me",
        route: "about",
        icon: <IconBooks />,
    },
    {
        label: "Projects",
        route: "projects",
        icon: <IconBrandGithub />,
    },
    {
        label: "My Desktop",
        route: "desktop",
        icon: <IconDeviceDesktop />,
    },
    {
        label: "Blogs",
        route: "blogs",
        icon: <IconBook2 />,
    },
    {
        label: "Music",
        route: "music",
        icon: <IconMusic />,
    },
    {
        label: "???",
        route: "hmm",
        icon: <IconQuestionMark />,
        enabled: false,
    },
];
