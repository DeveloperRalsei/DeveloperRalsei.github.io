import { Grid, Stack, Title, Image, Paper } from "@mantine/core";

export default function DesktopPreview() {
    return (
        <Paper>
            <Grid>
                <Grid.Col span={{ sm: 12, md: 6 }}>
                    <Stack>
                        <Title ta={"center"} order={4}>
                            Without Programs
                        </Title>
                        <Image
                            src={"/images/desktop/without_programs.png"}
                            w={"100%"}
                        />
                    </Stack>
                </Grid.Col>
                <Grid.Col span={{ sm: 12, md: 6 }}>
                    <Stack>
                        <Title ta={"center"} order={4}>
                            With Programs
                        </Title>
                        <Image
                            src={"/images/desktop/with_programs.png"}
                            w={"100%"}
                        />
                    </Stack>
                </Grid.Col>
            </Grid>
        </Paper>
    );
}
