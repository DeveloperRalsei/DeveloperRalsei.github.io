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
} from "@mantine/core";
import Card from "../components/Card";
import Status, { StatusBadge } from "../components/Status";
import { IconDeviceDesktop } from "@tabler/icons-react";
import { CurrentyLearning, IconLinks, ProfileLinks } from "../data";
import MusicPlayer from "../components/context/MusicPlayer/MusicPlayer";
import usePage from "@/hooks/usePage";

const desktopData = {
  label: "My Desktop",
  icon: <IconDeviceDesktop />,
  color: "blue",
};

const MySituation = () => {
  const theme = useMantineTheme();
  const { setPage } = usePage();

  return (
    <Card
      title="Some useless info"
      icon={<IconDeviceDesktop />}
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
          {"I'm currently learning: "}
          {CurrentyLearning.map((item, i) => (
            <>
              <Text key={i + item.language} c={item.color} fw={600}>
                {item.language.toUpperCase()}
              </Text>
              {","}
            </>
          ))}
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
        <Flex mt={10} gap={"lg"} wrap={"wrap"} justify={"center"}>
          {ProfileLinks.map((l, i) => (
            <Anchor href={l.href} key={i} c={l.color} target={"_blank"}>
              <Stack align="center">
                {l.icon}
                <Text size="sm">{l.label}</Text>
              </Stack>
            </Anchor>
          ))}

          <Anchor
            key={desktopData.color + 12312313}
            c={desktopData.color}
            onClick={(e) => {
              e.preventDefault();
              setPage("desktopPreview");
            }}
          >
            <Stack align="center">
              {desktopData.icon}
              <Text size="sm">{desktopData.label}</Text>
            </Stack>
          </Anchor>
        </Flex>
      </Stack>
    </Card>
  );
};

export default MySituation;
