import { Project } from "@/types";
import { Accordion, Box, Group, Image, Stack, Text } from "@mantine/core";
import { TechRenderer } from "./TechRenderer";
import { ProjectButton } from "./ProjectButton";
import { StatusRenderer } from "./StatusRenderer";

function ProjectRenderer({ p }: { p: Project }) {
    return (
        <Accordion.Item value={p.name + p.status}>
            <Accordion.Control>
                <Group justify="space-between">
                    <Text
                        c={
                            p.status === "done"
                                ? "white"
                                : p.status === "wip"
                                  ? "yellow"
                                  : p.status === "dead"
                                    ? "red"
                                    : "gray"
                        }
                        fw={700}
                    >
                        {p.name}
                    </Text>
                    <Box visibleFrom="xs">
                        <StatusRenderer status={p.status} />
                    </Box>
                </Group>
            </Accordion.Control>
            <Accordion.Panel>
                <Stack>
                    <Group justify="space-between">
                        <Text fz={"h5"}>{p.desc}</Text>
                        {p.imgUrl && (
                            <Image
                                src={p.imgUrl}
                                height={200}
                                width={200}
                                radius={10}
                            />
                        )}
                    </Group>

                    <Group w={"100%"} justify="space-between">
                        <Group w={"100%"} justify="space-between">
                            <Text fw={800}>Made with: </Text>
                            <Group>
                                {p.techs.map((tech, i) => (
                                    <TechRenderer key={i} tech={tech} />
                                ))}
                            </Group>
                        </Group>
                        {p.status !== "done" && (
                            <Box
                                hiddenFrom="xs"
                                component={Group}
                                justify="space-between"
                                w={"100%"}
                            >
                                <Text fw={800}>Project Status: </Text>
                                <StatusRenderer status={p.status} />
                            </Box>
                        )}
                    </Group>

                    <Group visibleFrom="xs">
                        {p.buttons.map((button, i) => (
                            <ProjectButton
                                key={button.type + i}
                                button={button}
                                flex
                            />
                        ))}
                    </Group>

                    <Stack hiddenFrom="xs">
                        {p.buttons.map((button, i) => (
                            <ProjectButton
                                key={button.type + i}
                                button={button}
                            />
                        ))}
                    </Stack>
                </Stack>
            </Accordion.Panel>
        </Accordion.Item>
    );
}

export default ProjectRenderer;
