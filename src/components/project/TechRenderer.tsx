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
      <div>???</div>
    </Tooltip>
  ),
  html: (
    <Tooltip label="HTML">
      <IconBrandHtml5 color="#e4552d" />
    </Tooltip>
  ),
  css: (
    <Tooltip label="CSS">
      <IconBrandCss3 color="#0a7bbf" />
    </Tooltip>
  ),
  js: (
    <Tooltip label="JavaScript">
      <IconBrandJavascript color="#f7e025" />
    </Tooltip>
  ),
  ts: (
    <Tooltip label="TypeScript">
      <IconBrandTypescript color="#087ece" />
    </Tooltip>
  ),
  nodejs: (
    <Tooltip label="NodeJS">
      <IconBrandNodejs color="#71c450" />
    </Tooltip>
  ),
  mysql: (
    <Tooltip label="MySQL">
      <IconBrandMysql color="#087993" />
    </Tooltip>
  ),
  mongodb: (
    <Tooltip label="MongoDB">
      <IconBrandMongodb color="green" />
    </Tooltip>
  ),
  bash: (
    <Tooltip label="Bash">
      <IconTerminal2 />
    </Tooltip>
  ),
  react: (
    <Tooltip label="React">
      <IconBrandReact color="#66dcfb" />
    </Tooltip>
  ),
  nextjs: (
    <Tooltip label="NextJs">
      <IconBrandNextjs />
    </Tooltip>
  ),
  csharp: (
    <Tooltip label="C#">
      <IconBrandCSharp color="pink" />
    </Tooltip>
  ),
  go: (
    <Tooltip label="Go Lang">
      <IconBrandGolang color="#2249a4" />
    </Tooltip>
  ),
};
