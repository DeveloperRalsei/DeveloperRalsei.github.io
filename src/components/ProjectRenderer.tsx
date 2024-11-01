import React, { useState } from "react";
import { Project, Tech } from "../data";
import {
  Paper,
  Group,
  Title,
  Stack,
  Badge,
  Tooltip,
  SimpleGrid,
  Text,
  Box,
  LoadingOverlay,
  Image,
  PaperProps,
} from "@mantine/core";
import {
  IconBrandReact,
  IconBrandTypescript,
  IconBrandNodejs,
  IconBrandJavascript,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandGithub,
  IconExternalLink,
  IconTerminal2,
  IconBrandMongodb,
  IconBrandNextjs,
  IconBrandMysql,
} from "@tabler/icons-react";
import { IoLogoElectron } from "react-icons/io5";
import { ProjectButton } from "./ProjectButton";

const StatusRenderers: Record<Project["status"], React.ReactNode> = {
  done: <></>,
  wip: (
    <Tooltip label="Work in Progress">
      <Badge variant="light" color="yellow" visibleFrom="sm">
        WIP
      </Badge>
    </Tooltip>
  ),
  forgotten: (
    <Badge variant="light" color="gray" visibleFrom="sm">
      Forgotten
    </Badge>
  ),
  abandoned: (
    <Tooltip label="Abandoned Project">
      <Badge variant="light" color="red" visibleFrom="sm">
        Dead
      </Badge>
    </Tooltip>
  ),
  "???": (
    <Badge variant="outline" color="gray" visibleFrom="sm">
      <Text>???</Text>
    </Badge>
  ),
};

const StatusRender = ({ status }: { status: Project["status"] }) => {
  return StatusRenderers[status];
};

const TechRender = ({ tech }: { tech: Tech }) => {
  return TechRenderers[tech];
};

const TechRenderers: Record<Tech, React.ReactNode> = {
  react: (
    <Tooltip label="React" withArrow>
      <IconBrandReact size={22} />
    </Tooltip>
  ),
  ts: (
    <Tooltip label="Typescript" withArrow>
      <IconBrandTypescript size={22} />
    </Tooltip>
  ),
  js: (
    <Tooltip label="JavaScript" withArrow>
      <IconBrandJavascript size={22} />
    </Tooltip>
  ),
  html: (
    <Tooltip label="HTML" withArrow>
      <IconBrandHtml5 size={22} />
    </Tooltip>
  ),
  css: (
    <Tooltip label="CSS" withArrow>
      <IconBrandCss3 size={22} />
    </Tooltip>
  ),
  nodejs: (
    <Tooltip label="NodeJS" withArrow>
      <IconBrandNodejs size={22} />
    </Tooltip>
  ),
  bash: (
    <Tooltip label="Bash">
      <IconTerminal2 size={22} />
    </Tooltip>
  ),
  electron: (
    <Tooltip label="ElectronJS">
      <IoLogoElectron size={22} stroke="200" />
    </Tooltip>
  ),
  mongodb: (
    <Tooltip label="Mongo DB">
      <IconBrandMongodb size={22} />
    </Tooltip>
  ),
  nextjs: (
    <Tooltip label="NextJS">
      <IconBrandNextjs size={22} />
    </Tooltip>
  ),
  mysql: (
    <Tooltip label="MySQL">
      <IconBrandMysql size={22} />
    </Tooltip>
  ),
  "???": (
    <Tooltip label="???">
      <Text>{"???"}</Text>
    </Tooltip>
  ),
};

const ProjectRenderer = ({ p, props }: { p: Project; props?: PaperProps }) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  return (
    <Paper p={"xs"} withBorder h={"fit-content"} {...props}>
      <Stack>
        <Group justify="space-between">
          <Group>
            <Title order={3}>{p.name}</Title>
            <StatusRender status={p.status} />
          </Group>
          <Group>
            {p.techs.map((t, i) => (
              <TechRender tech={t} key={i} />
            ))}
          </Group>
        </Group>
        <SimpleGrid cols={{ base: 1, lg: p.imgUrl ? 2 : 1 }}>
          <Stack h={"100%"} style={{ overflow: "auto" }}>
            <Stack visibleFrom="sm">
              {p.desc && <Text fz={"sm"}>{p.desc}</Text>}
            </Stack>
          </Stack>
          <Box style={{ alignSelf: "end" }}>
            {p.imgUrl && (
              <Box pos={"relative"}>
                <LoadingOverlay visible={!isLoaded} pos={"absolute"} />
                <Image
                  src={p.imgUrl}
                  radius={"md"}
                  onLoad={() => setIsLoaded(true)}
                  onError={() => setIsLoaded(true)}
                />
              </Box>
            )}
          </Box>
        </SimpleGrid>
        <Group grow visibleFrom="sm">
          {!p.buttons.length && <></>}
          {p.buttons.map((b, i) => {
            const url = (b.type !== "custom" && b.url) || "";
            const action = (b.type === "custom" && b.onClick) || function () {};

            return (
              <ProjectButton
                href={url}
                onClick={action}
                key={i}
                iconRight={b.type === "link" && <IconExternalLink />}
                icon={
                  (b.type === "custom" && b.icon) ||
                  (b.type === "github" && <IconBrandGithub />)
                }>
                {b.type === "custom" && b.label}
                {b.type === "github" && "Open in Github"}
                {b.type === "link" && `Open ${p.name}`}
              </ProjectButton>
            );
          })}
        </Group>
        <Stack hiddenFrom="sm">
          {p.buttons.map((b, i) => {
            const url = (b.type !== "custom" && b.url) || "";
            const action = (b.type === "custom" && b.onClick) || function () {};

            return (
              <ProjectButton
                href={url}
                onClick={action}
                key={i}
                iconRight={b.type === "link" && <IconExternalLink />}
                icon={
                  (b.type === "custom" && b.icon) ||
                  (b.type === "github" && <IconBrandGithub />)
                }>
                {b.type === "github" && "Open in Github"}
                {b.type === "link" && `Open ${p.name}`}
                {b.type === "custom" && b.label}
              </ProjectButton>
            );
          })}
        </Stack>
      </Stack>
    </Paper>
  );
};

export default ProjectRenderer;
