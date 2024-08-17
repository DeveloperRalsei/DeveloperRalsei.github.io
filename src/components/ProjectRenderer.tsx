import React, { useState } from 'react'
import { Types } from '../data'
import { Paper, Group, Title, Stack, Badge, Tooltip, SimpleGrid, Text, Box, LoadingOverlay, Image } from '@mantine/core'
import { IconBrandReact, IconBrandTypescript, IconBrandNodejs, IconBrandJavascript, IconBrandHtml5, IconBrandCss3, IconBrandGithub, IconExternalLink, IconTerminal2 } from '@tabler/icons-react'
import { ProjectButton } from './ProjectButton'

const StatusRenderers: Record<any, React.ReactNode> = {
  done: <></>,
  wip: <Tooltip label="Work in Progress">
    <Badge variant='light' color='yellow'>WIP</Badge>
  </Tooltip>,
  forgotten: <Badge variant='light' color='gray'>Forgotten</Badge>,
  abandoned: <Tooltip label="Abandoned Project">
    <Badge variant='light' color='red'>Dead</Badge>
  </Tooltip>
}

const StatusRender = ({ status }: { status: any }) => {
  return StatusRenderers[status]
}

const TechRender = ({ tech }: { tech: any }) => {
  return TechRenderers[tech]
}

const TechRenderers: Record<any, React.ReactNode> = {
  react: (
    <Tooltip label="React" withArrow>
      <IconBrandReact />
    </Tooltip>
  ),
  ts: (
    <Tooltip label="Typescript" withArrow>
      <IconBrandTypescript />
    </Tooltip>
  ),
  js: (
    <Tooltip label="JavaScript" withArrow>
      <IconBrandJavascript />
    </Tooltip>
  ),
  html: (
    <Tooltip label="HTML" withArrow>
      <IconBrandHtml5 />
    </Tooltip>
  ),
  css: (
    <Tooltip label="CSS" withArrow>
      <IconBrandCss3 />
    </Tooltip>
  ),
  nodejs: (
    <Tooltip label="NodeJS" withArrow>
      <IconBrandNodejs />
    </Tooltip>
  ),
  bash: (
    <Tooltip label="Bash">
      <IconTerminal2 />
    </Tooltip>
  )
}



const ProjectRenderer = ({ p }: { p: Types.Project }) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  return (
    <Paper
      p={"xs"}
      withBorder
    >
      <Stack>
        <Group justify='space-between'>
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
        <SimpleGrid cols={{ base: 1, lg: (p.imgUrl ? 2 : 1) }}>
          <Stack h={50} mah={50} style={{overflow: "auto"}}>
            <Stack>
              {p.desc && <Text fz={"sm"}>
                {p.desc}
              </Text>}
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
        <Group grow visibleFrom='sm'>
          {!p.buttons.length && <></>}
          {p.buttons.map((b, i) => (
            <ProjectButton
              href={b.url}
              key={i}
              iconRight={b.type === 'link' && <IconExternalLink />}
              icon={b.type === 'custom' && b.icon || b.type === 'github' && <IconBrandGithub />}
            >
              {b.type === 'custom' && b.label}
              {b.type === 'github' && "Open in Github"}
              {b.type === 'link' && `Open ${p.name}`}
            </ProjectButton>
          ))}
        </Group>
        <Stack hiddenFrom='sm'>
          {p.buttons.map((b, i) => (
            <ProjectButton
              href={b.url}
              key={i}
              iconRight={b.type === "link" && <IconExternalLink />}
              icon={b.type === 'custom' && b.icon || b.type === 'github' && <IconBrandGithub />}
            >
              {b.type === 'github' && "Open in Github"}
              {b.type === 'link' && `Open ${p.name}`}
              {b.type === 'custom' && b.label}
            </ProjectButton>
          ))}
        </Stack>
      </Stack>
    </Paper>
  )
}

export default ProjectRenderer