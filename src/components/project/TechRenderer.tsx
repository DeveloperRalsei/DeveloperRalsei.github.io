import { Tech } from "@/types";
import { Tooltip } from "@mantine/core";
import {
    IconBrandHtml5,
    IconBrandCss3,
    IconBrandJavascript,
    IconBrandTypescript,
    IconBrandNodejs,
    IconBrandMysql,
    IconBrandMongodb,
    IconTerminal2,
    IconBrandReact,
    IconBrandNextjs,
    IconBrandCSharp,
    IconBrandGolang,
} from "@tabler/icons-react";

export function TechRenderer({ tech }: { tech: Tech }) {
    return TechRenderers[tech];
}

const TechRenderers: Record<Tech, React.ReactNode> = {
    "???": (
        <Tooltip label="???">
            <div style={{ fontSize: 14 }}>???</div>
        </Tooltip>
    ),
    html: (
        <Tooltip label="HTML">
            <IconBrandHtml5 size={23} color="#e4552d" />
        </Tooltip>
    ),
    css: (
        <Tooltip label="CSS">
            <IconBrandCss3 size={23} color="#0a7bbf" />
        </Tooltip>
    ),
    js: (
        <Tooltip label="JavaScript">
            <IconBrandJavascript size={23} color="#f7e025" />
        </Tooltip>
    ),
    ts: (
        <Tooltip label="TypeScript">
            <IconBrandTypescript size={23} color="#087ece" />
        </Tooltip>
    ),
    nodejs: (
        <Tooltip label="NodeJS">
            <IconBrandNodejs size={23} color="#71c450" />
        </Tooltip>
    ),
    mysql: (
        <Tooltip label="MySQL">
            <IconBrandMysql size={23} color="#087993" />
        </Tooltip>
    ),
    mongodb: (
        <Tooltip label="MongoDB">
            <IconBrandMongodb size={23} color="green" />
        </Tooltip>
    ),
    bash: (
        <Tooltip label="Bash">
            <IconTerminal2 size={23} />
        </Tooltip>
    ),
    react: (
        <Tooltip label="React">
            <IconBrandReact size={23} color="#66dcfb" />
        </Tooltip>
    ),
    nextjs: (
        <Tooltip label="NextJs">
            <IconBrandNextjs size={23} />
        </Tooltip>
    ),
    csharp: (
        <Tooltip label="C#">
            <IconBrandCSharp size={23} color="pink" />
        </Tooltip>
    ),
    go: (
        <Tooltip label="Go Lang">
            <IconBrandGolang size={23} color="#2249a4" />
        </Tooltip>
    ),
};
