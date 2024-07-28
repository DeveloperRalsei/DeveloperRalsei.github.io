import { Group, Space, Title, Divider, Anchor, Flex, Stack, Text, useMantineTheme } from '@mantine/core'
import Card from './Card'
import Status, { StatusBadge } from './Status'
import { IconBook2 } from '@tabler/icons-react'
import { IconLinks } from '../data'

const MySituation = () => {
  const theme = useMantineTheme()
  return <Card title="Some useless info" icon={<IconBook2 />} tcolor='blue' withBorder>
    <Space h={10} />
    <Group>
      <Title order={5}>Status</Title>: <StatusBadge/>
    </Group>
    <Space h={10} />
    <Status />
    <br />
    <Title order={4} c={"grape"}>I Use These</Title>
    <Divider />
    <Flex mt={10} gap={"lg"} wrap={"wrap"} justify={"center"}>
      {IconLinks.map((l, i) => (
        <Anchor key={i} href={l.href} c={l.color || theme.primaryColor} target='_blank'>
          <Stack align='center'>
            {l.icon}
            <Text size='sm'>{l.label}</Text>
          </Stack>
        </Anchor>))}
    </Flex>
    
  </Card>
}

export default MySituation