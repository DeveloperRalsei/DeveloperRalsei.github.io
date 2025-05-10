import { Project } from "@/types";
import { showNotification } from "@mantine/notifications";

export const projects: Project[] = [
    {
        name: "Osu OSZ Archiver (OOA)",
        sourceCodeName: "osu-osz-archiver",
        status: "wip",
        desc: "It helps you to create/excart osz files easily through the command prompt",
        techs: ["go"],
        type: "cli",
        buttons: [{ type: "github" }],
    },
    {
        name: "Omsu",
        status: "wip",
        desc: "This project just lists your osu players, beatmapsets and current newsletters. \n Since I'm using a third party api first time, I'm trying to figure out how to integrate it.\n Buuuuuuut... I screwed it cuz I found another npm package that helps me to use that spesicif api easily",
        techs: ["react", "ts", "js"],
        buttons: [
            { type: "github" },
            { type: "link", url: "https://omsu.devrals.xyz", label: "Open " },
        ],
        sourceCodeName: "Omsu",
        type: "web",
        img: "/images/project/omsu.png",
    },
    {
        name: "My website",
        sourceCodeName: "developerralsei.github.io",
        desc: "A place where I share my projects and talking about myself :3",
        buttons: [
            {
                type: "custom",
                label: "Go check out my website",
                onClick() {
                    showNotification({
                        message: "WOAH!! Somehow... you're still here :D",
                    });
                },
            },
        ],
        status: "done",
        techs: ["ts", "react", "nodejs"],
        type: "web",
    },
    {
        name: "Web app script",
        desc: "This was my first coding project that I load into github. So I thouth it should take a place in here :D",
        buttons: [{ type: "github" }],
        status: "done",
        techs: ["bash"],
        type: "cli",
        sourceCodeName: "NodeJS-Web-App-Bash-Script",
        finishedAt: new Date("2024-07-00"),
    },
];
