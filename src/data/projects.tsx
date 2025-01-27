import { Project } from "@/types";

export const Projects: Project[] = [
    {
        name: "OOA (Osu-Osz-Archiver)",
        status: "wip",
        techs: ["go"],
        buttons: [
            {
                type: "github",
                url: "https://github.com/developerRalsei/osu-osz-archiver"
            }
        ]
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
            { type: "link", url: "https://omsu.onrender.com/", label: "Open Omsu" },
        ],
    },
    {
        name: "Product Managmant System",
        status: "dead",
        techs: ["ts", "nextjs"],
        desc: "My first nextjs project that has authentication and authorization system",
        buttons: [
            {
                type: "github",
                url: "https://github.com/DeveloperRalsei/Product-Managment-Template",
            },
            {
                type: "link",
                url: "https://product-managment-template.vercel.app/",
                label: "Open PMS",
            },
        ],
    },
    {
        name: "Public To-Do",
        status: "done",
        techs: ["ts", "mongodb", "react", "nodejs"],
        desc: "The public To-Do app that everyones can see and edit what they listing. I know it's stupid.",
        buttons: [
            {
                type: "github",
                url: "https://github.com/DeveloperRalsei/My-first-todo-app-but-with-mantine",
            },
            {
                type: "link",
                url: "https://ralseistods.onrender.com/",
                label: "Open ToDo",
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
    {
        name: "Simple Blog App",
        status: "dead",
        techs: ["react", "mongodb", "nodejs"],
        desc: "I'm gonna rewrite a new one with nextjs",
        buttons: [
            {
                type: "github",
                url: "https://github.com/DeveloperRalsei/MERN-App-Blog-Template/",
            },
        ],
    },
    {
        name: "Task Manager",
        status: "wip",
        techs: ["nextjs", "ts"],
        desc: "An app that helps me to manage my projects",
        buttons: [
            {
                type: "github",
                url: "https://github.com/developerRalsei/task-manager",
            },
        ],
    },
];
