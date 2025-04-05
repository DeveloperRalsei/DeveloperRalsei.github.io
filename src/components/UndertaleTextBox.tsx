import { Grid, Paper } from "@mantine/core";
import { PropsWithChildren } from "react";

export const UndertaleTextBox = ({
    children,
    sprite,
}: PropsWithChildren<{
    sprite?: React.ReactNode;
}>) => (
    <Paper p="md" bd="3px solid #fff" bg="#000" w="100%">
        {sprite ? (
            <Grid>
                <Grid.Col span={2}>{sprite}</Grid.Col>
                <Grid.Col span={10}>{children}</Grid.Col>
            </Grid>
        ) : (
            children
        )}
    </Paper>
);
