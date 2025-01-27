import { Tooltip, TextInput, Space, Text } from "@mantine/core";
import ProjectRenderer from "../components/project/ProjectRenderer";
import { useContext, useState } from "react";
import { Projects } from "../data/projects";
import { SecretContext } from "../components/context/secret/SecretContext";
import { Status } from "@/types";

const ProjectList = () => {
    const [search, setSearch] = useState("");
    const { toggle } = useContext(SecretContext);

    let filteredProjects = search
        ? Projects.filter((p) =>
            [p.name, p.desc, p.techs]
                .filter((x) => x)
                .join(" ")
                .toLowerCase()
                .includes(search.toLowerCase())
        )
        : Projects;

    const statusOrder: { [K in Status]: number } = {
        done: 0,
        wip: 1,
        dead: 2,
        "???": 3,
    };

    filteredProjects = filteredProjects.sort((p1, p2) =>
        p1.name.localeCompare(p2.name)
    );

    filteredProjects = filteredProjects.sort(
        (p1, p2) => statusOrder[p1.status] - statusOrder[p2.status]
    );

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

            {filteredProjects.map((p, i) => (
                <ProjectRenderer p={p} key={i} />
            ))}
            {search.toLocaleLowerCase() === "sus" && (
                <ProjectRenderer
                    p={{
                        name: "???",
                        status: "???",
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
            {!filteredProjects.length &&
                (search.toLocaleLowerCase() === "sus" ? (
                    ""
                ) : (
                    <Text w={"100%"} ta={"center"}>
                        There's nothing I can show you 3:
                    </Text>
                ))}
        </>
    );
};

export default ProjectList;
