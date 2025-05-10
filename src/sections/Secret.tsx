import { Anchor, Paper, Space } from "@mantine/core";

const Secret = () => {
    return (
        <>
            <Space h="300vh" />
            <Paper>
                <Anchor
                    td={"underline"}
                    onClick={() =>
                        open("https://jcw87.github.io/c2-sans-fight/", "_blank")
                    }
                >
                    Don't click this link or you gonna have a bad time
                </Anchor>
            </Paper>
        </>
    );
};

export default Secret;
