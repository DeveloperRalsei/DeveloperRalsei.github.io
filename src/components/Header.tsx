import React from 'react'
import { AppShell, Group, Tooltip, Avatar, Title, Box } from '@mantine/core'

const Header: React.FC = () => {
  return <AppShell.Header withBorder={false}>
    <Group align='center' h={"100%"} justify='center'>
      <Tooltip label="Uhmm... Hii!" position='left' withArrow>
        <Box style={{ position: "relative" }}>

          <Avatar src={"/images/pp.png"} alt='me :3' style={{ cursor: "pointer" }} radius={0} />
        </Box>
      </Tooltip>
      <Title ta={'center'} order={2} c={"teal"}>
        DeveloperRalsei
      </Title>
    </Group>
  </AppShell.Header>
}

export default Header