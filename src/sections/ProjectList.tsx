import {
    Tooltip,
    TextInput,
    Space,
    Text,
    Accordion,
    SimpleGrid,
} from "@mantine/core";
import ProjectRenderer from "../components/project/ProjectRenderer";
import { useContext, useState } from "react";
import { projects } from "../data/projects";
import { SecretContext } from "../components/context/secret/SecretContext";
import { Project } from "@/types";

const ProjectList = () => {
    const [search, setSearch] = useState("");
    const { toggle } = useContext(SecretContext);
    const [Projects, setProjects] = useState<Project[]>(
        Object.values(projects),
    );

    let filteredprojects = search
        ? Projects.filter((p) =>
              [p.name, p.desc, p.techs]
                  .filter((x) => x)
                  .join(" ")
                  .toLowerCase()
                  .includes(search.toLowerCase()),
          )
        : Projects;

    return (
        <>
            <Tooltip
                label={
                    <>
                        "Don't write something{" "}
                        <Text
                            variant="gradient"
                            gradient={{ from: "red", to: "yellow", deg: 90 }}
                            display={"inline"}
                        >
                            SUS
                        </Text>
                        picious"
                    </>
                }
                position="top-end"
                openDelay={3000}
                events={{
                    focus: false,
                    hover: true,
                    touch: false,
                }}
            >
                <TextInput
                    mt={10}
                    placeholder="Search..."
                    label="Search for projects"
                    type="search"
                    onChange={(e) => setSearch(e.target.value)}
                />
            </Tooltip>
            <Space h={15} />
            <Accordion variant="separated" chevronPosition="left">
                <SimpleGrid cols={{ sm: 2, md: 4 }}>
                    {filteredprojects.map((p, i) => (
                        <ProjectRenderer project={p} key={i} />
                    ))}
                    {search.toLocaleLowerCase() === "sus" && (
                        <ProjectRenderer
                            project={{
                                name: "???",
                                desc: "???",
                                status: "done",
                                techs: ["???"],
                                buttons: [
                                    {
                                        type: "custom",
                                        color: "gray",
                                        label: "???",
                                        onClick: () => {
                                            toggle();
                                        },
                                    },
                                ],
                            }}
                        />
                    )}
                </SimpleGrid>
                {!filteredprojects.length &&
                    (search.toLocaleLowerCase() === "sus" ? (
                        ""
                    ) : (
                        <Text w={"100%"} ta={"center"}>
                            There's nothing I can show you 3:
                        </Text>
                    ))}
            </Accordion>
        </>
    );
};

export default ProjectList;
