import {
    Container,
    ScrollArea,
    Space,
    Stack,
    Text,
    Title,
} from "@mantine/core";

export default function NotFound() {
    return (
        <ScrollArea h="100%" w="100%">
            <Stack align="center" justify="center" ta="center">
                <Title order={2} c="teal">
                    WOAH! YOU FOUND A SECRET! :D
                </Title>
                <Text>Scroll down to see it! :3</Text>

                <Space h="220vh" />
                <Text c="dimmed">JK! You lost!</Text>
                <Text>
                    Also since there's no "go back" button in this page you're
                    stuck with me
                </Text>
                <Container
                    style={{
                        overflow: "hidden",
                        wordBreak: "break-word",
                    }}
                >
                    {"PU"}
                    {Array(2000)
                        .fill(0)
                        .map((_, i) => (i % 2 === 0 ? "H" : "A"))}
                    {"!!!"}
                </Container>
            </Stack>
        </ScrollArea>
    );
}
