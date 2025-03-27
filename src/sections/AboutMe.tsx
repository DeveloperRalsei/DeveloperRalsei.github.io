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
    List,
} from "@mantine/core";
import Card from "../components/Card";
import { StatusBadge, StatusCard } from "../components/context/status/Status";
import { IconDeviceDesktop } from "@tabler/icons-react";
import { IconLinks, ProfileLinks } from "../data/icons";
import { CurrentyLearning, PcSpecifications } from "../data/data";
import { useStatus } from "@/components/context/status";

const MySituation = () => {
    const theme = useMantineTheme();
    useStatus();

    return (
        <Card
            title="Some useless info"
            icon={<IconDeviceDesktop />}
            tcolor="blue"
            withBorder
        >
            <Space h={10} />
            <Stack gap={6}>
                <Group justify="space-between">
                    <Group gap={7}>
                        <Title order={5}>Status</Title>:<StatusBadge />
                    </Group>
                </Group>
                <StatusCard />
                <Group gap={12}>
                    {"I'm currently learning: "}
                    {CurrentyLearning.map((item, i) => (
                        <>
                            <Text
                                key={i + item.language}
                                c={item.color}
                                fw={600}
                            >
                                {item.language.toUpperCase()}
                            </Text>
                        </>
                    ))}
                </Group>
                <Space h={20} />
                <Title order={4} c={"grape"}>
                    I Use These Techs
                </Title>
                <Divider />
                <Flex mt={10} gap={"lg"} wrap={"wrap"} justify={"center"}>
                    {IconLinks.map((l, i) => (
                        <Anchor
                            key={i}
                            href={l.href}
                            c={l.color || theme.primaryColor}
                        >
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
                <Flex my={10} gap={"lg"} wrap={"wrap"} justify={"center"}>
                    {ProfileLinks.map((l, i) => (
                        <Anchor
                            href={l.href}
                            key={i}
                            c={l.color}
                            target={"_blank"}
                        >
                            <Stack align="center">
                                {l.icon}
                                <Text size="sm">{l.label}</Text>
                            </Stack>
                        </Anchor>
                    ))}
                </Flex>
                <Divider />
                <Title c="teal" order={4}>
                    And My Pc Specifications
                </Title>
                <List>
                    {PcSpecifications.map((s, i) => (
                        <List.Item key={s.key + i}>
                            <Text c={s.keyColor} fw="bold">
                                {s.key}
                            </Text>
                            {" : "}
                            {s.innerSpecifications ? (
                                <List icon="-">
                                    {s.innerSpecifications.map((s2, i) => (
                                        <List.Item key={s2.key + i}>
                                            <Text fw="bold" c={s2.keyColor}>
                                                {s2.key}
                                            </Text>
                                            {" : "}
                                            <Text>{s2.value}</Text>
                                        </List.Item>
                                    ))}
                                </List>
                            ) : (
                                <Text>{s.value}</Text>
                            )}{" "}
                        </List.Item>
                    ))}
                </List>
            </Stack>
        </Card>
    );
};

export default MySituation;
