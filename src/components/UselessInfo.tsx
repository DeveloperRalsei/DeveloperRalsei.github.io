import { Group, Space, Title, Divider, Anchor, Flex, Stack, Tooltip, Text } from '@mantine/core'
import Card from './Card'
import Status, { StatusBadge } from './Status'
import { IconBook2 } from '@tabler/icons-react'
import { IconLinks, theme } from '../data'

const MySituation = () => {
  const Theme = theme()
  return <Card title="Some useless info" icon={<IconBook2/>} tcolor='blue' withBorder>
    <Space h={10}/>
    <Group>
      <Title order={5}>Status</Title>: <StatusBadge/>
    </Group> 
    <Space h={10}/>
    <Status />
    <br />
    <Title order={4} c={"grape"}>I Use These</Title>
    <Divider />
    <Flex mt={10} gap={"lg"} wrap={'wrap'}>
      {IconLinks.map((IconLink,index)=> <Tooltip label={IconLink.label} key={index}>
        <Anchor href={IconLink.href} c={IconLink.color || Theme.primaryColor} target='_blank'>
          <Stack align='center'>
            {IconLink.icon}
            <Text size='sm'>{IconLink.label}</Text>
          </Stack>
        </Anchor>
      </Tooltip> )}
    </Flex>
  </Card>
}

export default MySituation