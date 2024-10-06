import {
  Group,
  Space,
  Title,
  Divider,
  Anchor,
  Flex,
  Stack,
  Text,
  useMantineTheme,
  Button,
} from "@mantine/core";
import Card from "../components/Card";
import Status, { StatusBadge } from "../components/Status";
import { IconArrowRight, IconBook2 } from "@tabler/icons-react";
import { IconLinks, ProfileLinks } from "../data";
import MusicPlayer from "../components/context/MusicPlayer";

const MySituation = ({ changePage }: { changePage: () => void }) => {
  const theme = useMantineTheme();

  return (
    <Card
      title="Some useless info"
      icon={<IconBook2 />}
      tcolor="blue"
      withBorder
    >
      <Space h={10} />
      <Stack gap={2}>
        <Group justify="space-between">
          <Group gap={7}>
            <Title order={5}>Status</Title>:<StatusBadge />
          </Group>
          <MusicPlayer />
        </Group>
        <Space h={10} />
        <Status />
        <br />
        <Group gap={6}>
          <Text>Currently learning: </Text>
          <Text c={"blue"}>NextJs,</Text>
          <Text c={"green"}>C++</Text>
        </Group>
        <Space h={20} />
        <Title order={4} c={"grape"}>
          I Use These
        </Title>
        <Divider />
        <Flex mt={10} gap={"lg"} wrap={"wrap"} justify={"center"}>
          {IconLinks.map((l, i) => (
            <Anchor key={i} href={l.href} c={l.color || theme.primaryColor}>
              <Stack align="center">
                {l.icon}
                <Text size="sm">{l.label}</Text>
              </Stack>
            </Anchor>
          ))}
        </Flex>
        <Space h={15} />
        <Title order={4} c={"grape"}>
          My Profiles
        </Title>
        <Divider />
        <Flex mt={10} gap={"lg"} wrap={"wrap"}>
          {ProfileLinks.map((l, i) => (
            <Anchor href={l.href} key={i} c={l.color} target="_blank">
              <Stack align="center">
                {l.icon}
                <Text size="sm">{l.label}</Text>
              </Stack>
            </Anchor>
          ))}
        </Flex>
        <Group h={80} align="end" justify="end">
          <Button onClick={changePage} variant="subtle">
            <Text>Look at Projects i made</Text> &nbsp;
            <IconArrowRight />
          </Button>
        </Group>
      </Stack>
    </Card>
  );
};

export default MySituation;
