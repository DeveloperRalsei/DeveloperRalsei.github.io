import React, { useState } from 'react'
import { AppShell, Container, SimpleGrid, useMantineTheme, TextInput, Space, Text, Tooltip } from '@mantine/core'
import Card from './Card'
import AboutMe from './AboutMe'
import { Projects } from '../data'
import ProjectRenderer from './ProjectRenderer'
import UselessInfo from './UselessInfo'

const Main: React.FC = () => {
  const theme = useMantineTheme()
  const [search, setSearch] = useState("")

  let filteredProjects = (!!search ? (
    Projects.filter(p => [
      p.name,
      p.desc,
    ].filter(x => x).join(" ").toLowerCase().includes(search.toLowerCase()))
  ) : Projects);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value)
    scroll({top: 450})
  }

  return <AppShell.Main px={"xl"}>
    <Container size={'lg'} mb={30}>
      <SimpleGrid cols={{ md: 2, xs: 1 }}>
        <AboutMe />
        <UselessInfo/>
      </SimpleGrid>

      <SimpleGrid mt={15} cols={1}>
        <Card title='Projects' withBorder tcolor={theme.colors.teal[1]}>
          <Tooltip label={<>"Don't write something <Text
            variant='gradient'
            gradient={{ from: 'red', to: 'yellow', deg: 90 }}
            display={"inline"}>SUS</Text>picious"</>}
            position='top-end'
            openDelay={2000}
          >
            <TextInput mt={10} placeholder='Search...' label="Search for projects" type='search' onChange={handleInput} />
          </Tooltip>
          <Space h={15} />
          <SimpleGrid cols={{ md: 2, xs: 1 }}>

            {filteredProjects.map((p, i) => (
              <ProjectRenderer p={p} key={i} />

            ))}
            {search === 'sus' && (
              <ProjectRenderer
                p={{
                  name: "???????????????",
                  buttons: [{
                    type: "link",
                    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  }],
                  status: "done",
                  techs: [],
                  desc: "?????????????????????????????????",

                }}
              />
            )}
          </SimpleGrid>
          {!filteredProjects.length && (
            <Text w={"100%"} ta={"center"}>There's nothing I can show you 3:</Text>
          )}
        </Card>
      </SimpleGrid>
    </Container>
  </AppShell.Main>
}

export default Main
