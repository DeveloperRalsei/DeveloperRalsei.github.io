import { Image, MantineColor, Tooltip } from "@mantine/core";
import {
    IconBrandCss3,
    IconBrandDiscord,
    IconBrandGithub,
    IconBrandHtml5,
    IconBrandJavascript,
    IconBrandMantine,
    IconBrandMongodb,
    IconBrandMysql,
    IconBrandNodejs,
    IconBrandNpm,
    IconBrandReact,
    IconBrandSpotify,
    IconBrandTiktok,
    IconBrandTypescript,
    IconBrandUbuntu,
    IconGitMerge,
    IconMail,
} from "@tabler/icons-react";
import { Icon, ProfileLink } from "../types";

export const IconLinks: Icon[] = [
    {
        label: "HTML",
        icon: <IconBrandHtml5 />,
        href: "#",
        color: "orange",
    },
    {
        label: "CSS",
        icon: <IconBrandCss3 />,
        href: "#",
        color: "var(--mantine-color-blue-3)",
    },
    {
        label: "JS",
        icon: <IconBrandJavascript />,
        href: "#",
        color: "var(--mantine-color-yellow-5)",
    },
    {
        label: "TS",
        icon: <IconBrandTypescript />,
        href: "https://typescriptlang.org/",
        color: "#2f74c0",
    },
    {
        label: "NodeJS",
        icon: <IconBrandNodejs />,
        href: "https://nodejs.org/",
        color: "green",
    },
    {
        label: "NPM",
        icon: <IconBrandNpm />,
        href: "https://npmjs.com",
        color: "red",
    },
    {
        label: "React",
        icon: <IconBrandReact />,
        href: "https://react.dev/",
        color: "blue",
    },
    {
        label: "MySQL",
        icon: <IconBrandMysql />,
        href: "https://mysql.com",
        color: "cyan",
    },
    {
        label: "Git",
        icon: <IconGitMerge />,
        href: "https://git-scm.com",
        color: "#ff0000",
    },
    {
        label: "GitHub",
        icon: <IconBrandGithub />,
        href: "https://github.com",
        color: "#fff",
    },
    {
        label: "Mantine",
        icon: <IconBrandMantine />,
        href: "https://mantine.dev",
        color: "#339af0",
    },
    {
        label: "MongoDb",
        icon: <IconBrandMongodb />,
        href: "https://www.mongodb.com/",
        color: "#00ff00",
    },
    {
        label: "Linux",
        icon: (
            <Tooltip label="Debian/Ubuntu or Arch">
                <IconBrandUbuntu />
            </Tooltip>
        ),
        href: "https://kernel.org",
        color: "yellow",
    },
    {
        label: "Neovim",
        color: "green",
        href: "https://neovim.io/",
        icon: <Image src="/images/nvim.png" w={20} />,
    },
];

export const ProfileLinks: ProfileLink[] = [
    {
        label: "TikTok",
        color: "pink",
        href: "https://www.tiktok.com/@developerralsei",
        icon: <IconBrandTiktok />,
    },
    {
        label: "Discord",
        icon: <IconBrandDiscord />,
        href: "https://discord.com/users/718798893445283863",
        color: "cyan",
    },
    // {
    //   label: "X",
    //   icon: <IconBrandX />,
    //   href: "https://x.com/HugPrinceRalsei",
    //   color: "#fff",
    // },
    {
        label: "Playlist",
        icon: <IconBrandSpotify />,
        href: "https://open.spotify.com/playlist/0sekcZeuwtAomcoRwkrPcS",
        color: "green",
    },
    {
        label: "Github",
        icon: <IconBrandGithub />,
        href: "https://github.com/DeveloperRalsei/",
        color: "#fff",
    },
    {
        label: "NameMC",
        icon: <Image src="/images/namemc.png" alt="namemc" w={25} radius={3} />,
        href: "https://namemc.com/profile/1riza",
        color: "#fff",
    },
    {
        label: "G-Mail",
        icon: <IconMail />,
        href: "mailto:fluffycutegoatboi@gmail.com",
        color: "orange",
    },
    {
        label: "osu!",
        icon: (
            <Tooltip label="5 Digit (Mania)">
                <Image src={"/images/osu.png"} w={25} />
            </Tooltip>
        ),
        href: "https://osu.ppy.sh/users/27076843",
        color: "pink",
    },
];

export const CurrentyLearning: {
    language: string;
    color: MantineColor;
}[] = [
    {
        color: "blue",
        language: "Go",
    },
    {
        language: "NextJS",
        color: "lime",
    },
    {
        language: "C#",
        color: "orange",
    },
    {
        language: "DenoJs",
        color: "white",
    },
];

export type PcSpecification = {
    key: string;
    keyColor: MantineColor;
    value: React.ReactNode;
    innerSpecifications?: PcSpecification[];
};

export const PcSpecifications: PcSpecification[] = [
    {
        key: "OS",
        keyColor: "orange",
        value: "Arch",
    },
    {
        key: "CPU",
        keyColor: "blue",
        value: "Intel Core",
        innerSpecifications: [
            {
                key: "Gen",
                keyColor: "violet",
                value: "(3) 3230m",
            },
            {
                key: "Cores / Threads",
                keyColor: "lime",
                value: "2 / 4",
            },
            {
                key: "Frequency",
                keyColor: "green",
                value: "2.60Ghz / 3.20Ghz (Turbo)",
            },
        ],
    },
    {
        key: "GPU",
        keyColor: "indigo",
        value: "AMD Radeon HD 7500M/7600M Series",
    },
    {
        key: "Display",
        keyColor: "pink",
        value: "1366x768",
    },
];
