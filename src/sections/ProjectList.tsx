import { Tooltip, TextInput, Space, Text } from "@mantine/core";
import ProjectRenderer from "../components/ProjectRenderer";
import { useState } from "react";
import { Projects } from "../data";

const ProjectList = () => {
  const [search, setSearch] = useState("");

  const filteredProjects = search
    ? Projects.filter((p) =>
        [p.name, p.desc, p.techs]
          .filter((x) => x)
          .join(" ")
          .toLowerCase()
          .includes(search.toLowerCase())
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
        <ProjectRenderer p={p} key={i} props={{ mb: "md" }} />
      ))}
      {search.toLocaleLowerCase() === "sus" && (
        <ProjectRenderer
          p={{
            name: "???",
            buttons: [
              {
                type: "link",
                url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
              },
            ],
            status: "done",
            techs: [],
            desc: "???",
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
