import { Project } from "@/types";

export const Projects: Project[] = [
    {
        name: "OOA (Osu-Osz-Archiver)",
        status: "wip",
        techs: ["go"],
        buttons: [
            {
                type: "github",
                url: "https://github.com/developerRalsei/osu-osz-archiver",
            },
        ],
    },
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
    },
    {
        name: "Omsu",
        status: "wip",
        techs: ["ts", "js", "react", "nodejs"],
        desc: "An easy data viewer for osu! players",
        buttons: [
            { type: "github", url: "https://github.com/developerRalsei/omsu" },
            {
                type: "link",
                url: "https://omsu.onrender.com/",
                label: "Open Omsu",
            },
        ],
    },
    {
        name: "Node Web Starter Script",
        status: "done",
        techs: ["bash"],
        desc: "A script that helps you to quickly start a simple web application using nodejs expressjs and ejs.",
        buttons: [
            {
                type: "github",
                url: "https://github.com/DeveloperRalsei/NodeJS-Web-App-Bash-Script",
            },
        ],
    },
];
