import { Project, Tech } from "@/types";
import {
  Accordion,
  ActionIcon,
  Badge,
  Button,
  Group,
  Image,
  Space,
  Stack,
  Text,
  Tooltip,
} from "@mantine/core";
import {
  IconBrandCss3,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandMongodb,
  IconBrandMysql,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandTypescript,
  IconTerminal2,
} from "@tabler/icons-react";
import { ProjectButton } from "./ProjectButton";

function TechRenderer({ tech }: { tech: Tech }) {
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
};

function ProjectRenderer({ p }: { p: Project }) {
  return (
    <Accordion
      mb={"xs"}
      variant="separated"
      chevronPosition="left"
      style={{ boxShadow: "0 0 3px rgba(255, 255, 255, 0.1)" }}
      radius={"sm"}
    >
      <Accordion.Item value={p.name + p.status}>
        <Accordion.Control>
          <Group justify="space-between">
            <Text fz={"h4"}>{p.name}</Text>
            <Group gap={5} visibleFrom="xs">
              {p.techs.map((t, i) => (
                <TechRenderer key={i} tech={t} />
              ))}
            </Group>
          </Group>
        </Accordion.Control>
        <Accordion.Panel>
          <Stack>
            <Group justify="space-between">
              <Text fz={"h5"}>{p.desc}</Text>
              {p.imgUrl && (
                <Image src={p.imgUrl} height={200} width={200} radius={10} />
              )}
            </Group>

            <Group hiddenFrom="xs" w={"100%"} justify="center">
              {p.techs.map((tech, i) => (
                <TechRenderer key={i} tech={tech} />
              ))}
            </Group>

            <Group visibleFrom="sm">
              {p.buttons.map((button, i) => (
                <ProjectButton key={button.type + i} button={button} flex />
              ))}
            </Group>

            <Stack hiddenFrom="sm">
              {p.buttons.map((button, i) => (
                <ProjectButton key={button.type + i} button={button} />
              ))}
            </Stack>
          </Stack>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}

export default ProjectRenderer;
