import React from 'react'
import { AppShell, Container, SimpleGrid } from '@mantine/core'
import AboutMe from './AboutMe'
import UselessInfo from './UselessInfo'
import ProjectList from './ProjectList'

const Main: React.FC = () => {

  return <AppShell.Main px={{md : "xs"}}>
    <Container size={"lg"} mb={30}>
      <SimpleGrid cols={{ md: 2, xs: 1 }}>
        <AboutMe />
        <UselessInfo/>
      </SimpleGrid>
      <SimpleGrid mt={15} cols={1}>
        <ProjectList/>
      </SimpleGrid>
    </Container>
  </AppShell.Main>
}

export default Main
