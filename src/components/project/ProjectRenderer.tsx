import { Project, ProjectStatus } from "@/types";
import {
    Card,
    Title,
    Group,
    Stack,
    Divider,
    Text,
    Loader,
    Drawer,
    Image,
} from "@mantine/core";
import { TechRenderer } from "./TechRenderer";
import { ProjectStatusRenderer } from "./StatusRenderer";
import { getStars } from "@/helpers/utils";
import { useEffect, useState } from "react";
import { IconStarFilled } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { ProjectButton } from "./ProjectButton";

function ProjectRenderer({ project }: { project: Project }) {
    const [stars, setStars] = useState<number | null>(null);
    const [loading, setLoading] = useState(false);
    const [opened, { open, close }] = useDisclosure();

    useEffect(() => {
        if (!project.sourceCodeName) return;

        setLoading(true);
        getStars(project.sourceCodeName)
            .then(setStars)
            .finally(() => setLoading(false));
    }, [project.sourceCodeName]);

    const openProjectDrawer = () => {
        open();
    };

    return (
        <>
            <Card onClick={openProjectDrawer} style={{ cursor: "pointer" }}>
                <Stack gap={4}>
                    <Group justify="space-between" wrap="nowrap">
                        <Title order={4}>{project.name}</Title>
                        {project.sourceCodeName && (
                            <Group gap={5} wrap="nowrap">
                                {loading ? (
                                    <Loader size={16} />
                                ) : (
                                    <>
                                        <Text span>{stars ?? "—"}</Text>
                                        <IconStarFilled size={16} />
                                    </>
                                )}
                            </Group>
                        )}
                    </Group>
                    <Divider my={2} />
                    <Group justify="space-between">
                        <Group gap={3}>
                            {project.techs.map((tech) => (
                                <TechRenderer tech={tech} key={tech} />
                            ))}
                        </Group>
                        <ProjectStatusRenderer status={project.status} />
                    </Group>
                </Stack>
            </Card>

            <Drawer opened={opened} onClose={close}>
                {project.finishedAt && (
                    <Drawer.Title>
                        {project.finishedAt.toUTCString()}
                    </Drawer.Title>
                )}
                <Drawer.Header>
                    <Stack>
                        {project.img && (
                            <Image
                                src={project.img}
                                w="100%"
                                radius="sm"
                                alt="project image"
                            />
                        )}
                        {project.name}
                    </Stack>
                </Drawer.Header>
                <Stack>
                    <Text>{project.desc}</Text>
                    <Group visibleFrom="sm">
                        {project.buttons.map((b, i) => (
                            <ProjectButton
                                key={b.type + i}
                                button={b}
                                ghUrl={`https://github.com/developerRalsei/${project.sourceCodeName}`}
                            />
                        ))}
                    </Group>
                    <Stack hiddenFrom="sm">
                        {project.buttons.map((b, i) => (
                            <ProjectButton
                                key={b.type + i}
                                button={b}
                                ghUrl={`https://github.com/developerRalsei/${project.sourceCodeName}`}
                            />
                        ))}
                    </Stack>
                </Stack>
            </Drawer>
        </>
    );
}

export default ProjectRenderer;
