import { learnMyAge } from "@/helpers/utils";
import { usePage } from "@/hooks";
import { Group, Tooltip, Box, List, Text, Image, ActionIcon } from "@mantine/core";

function MyAge() {
    const { setPage } = usePage()

    return (
        <ActionIcon onClick={() => setPage("birthDayPlace")} size="xs" variant="subtle">
            {learnMyAge()}
        </ActionIcon>
    )

}

export const listItems = [
    {
        content: (
            <>
                <Text>
                    Well, I'm a simple guy who loves to code and lives in{" "}
                    <Group display={"inline-flex"} gap={4}>
                        <Tooltip label="It's Turkiye!!! not Turkey">
                            <Text c={"red"} fw={700}>
                                Turkiye
                            </Text>
                        </Tooltip>{" "}
                        /{" "}
                        <Tooltip label="Yes, this city is exist">
                            <Text c={"cyan"} fw={700}>
                                Isparta
                            </Text>
                        </Tooltip>
                        <Tooltip label="GMT +3 / UTC +3">
                            <Image src={"/images/as-bayraklari-as.png"} alt="Flag" w={20} />
                        </Tooltip>
                    </Group>
                    .
                </Text>
            </>
        ),
    },
    {
        content: (
            <>
                I'm{" "}
                <Tooltip label="2006-04-11">
                    <Text c="yellow" fw={700}>
                        <MyAge />
                    </Text>
                </Tooltip>{" "}
                years old{" "}
                <Text span c="dimmed" opacity={0.7}>
                    (Click my age for my birth day event :3)
                </Text>
            </>
        )
    },
    {
        content: (
            <>
                I'm currently learning{" "}
                <Text c={"blue"} fw={700}>
                    NextJs
                </Text>
                ,{" "}
                <Text c={"green"} fw={700}>
                    C#
                </Text>
                , and{" "}
                <Text
                    c={"gray"}
                    component="a"
                    href="https://deno.com"
                    target="_blank"
                    fw={700}
                >
                    DenoJs
                </Text>
                .
            </>
        ),
    },
    {
        content: (
            <>
                <Text>
                    I'm using{" "}
                    <Text
                        c={"blue"}
                        fw={700}
                        component="a"
                        href="https://archlinux.org"
                        target="_blank"
                    >
                        Arch Linux
                    </Text>{" "}
                    BTW. :P
                </Text>
            </>
        ),
    },
    {
        content: (
            <>
                <Text>
                    I'm a big fan of{" "}
                    <Tooltip label="Obviously">
                        <Box display={"inline"}>
                            {" ("}
                            <Text
                                c={"orange"}
                                fw={700}
                                component="a"
                                href="https://undertale.com"
                                target="_blank"
                            >
                                Undertale
                            </Text>{" "}
                            /{" "}
                            <Text
                                c={"green"}
                                fw={700}
                                component="a"
                                href="https://deltarune.com"
                                target="_blank"
                            >
                                Deltarune
                            </Text>
                            {")"}
                        </Box>
                    </Tooltip>
                </Text>
            </>
        ),
    },
    {
        content: (
            <>
                <Text>
                    And I'm playing these games too:
                    <List icon="-" size="sm">
                        <List.Item>
                            <Text
                                c={"green"}
                                component="a"
                                href="https://minecraft.net"
                                fw={700}
                                target="_blank"
                            >
                                Minecraft
                            </Text>
                        </List.Item>
                        <List.Item>
                            <Tooltip
                                label={
                                    "I'm addicted to this game. Guess that's why I've less friends"
                                }
                            >
                                <Text
                                    c={"pink"}
                                    fw={700}
                                    component="a"
                                    href="https://osu.ppy.sh"
                                    target="_blank"
                                >
                                    Osu!
                                </Text>
                            </Tooltip>
                        </List.Item>
                        <List.Item>
                            <Text
                                c={"yellow"}
                                fw={700}
                                component="a"
                                href="https://gamejolt.com/games/UndertaleYellow/136925"
                                target="_blank"
                            >
                                Undertale Yellow
                            </Text>
                        </List.Item>
                    </List>
                </Text>
            </>
        ),
    },
    {
        content: (
            <>
                <Text>
                    I'm <Text c="grape">poor</Text> 🥲
                </Text>
            </>
        ),
    },
    {
        content: (
            <>
                My codes are usually being a spaghetti code. I just can't clean it up.
            </>
        ),
    },
    {
        content: (
            <>
                I'm a <Text c="blue">forgetful</Text> person. I can't remember what I've
                done last time.
            </>
        ),
    },
];
