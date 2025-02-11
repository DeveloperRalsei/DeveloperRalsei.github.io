import { Box, Image, List, Title, Tooltip } from "@mantine/core";
import Card from "../components/Card";
import { listItems } from "../data/homeContent";

const Home = () => {
    return (
        <>
            <Card
                pos={"relative"}
                mb={40}
                withBorder
                title="About Me"
                tcolor="grape"
                icon={
                    <Tooltip label="Happii! :D" position="left" withArrow>
                        <Image
                            src={"/images/sprites/ralsei_happi.png"}
                            alt="Happii! :D"
                            w={25}
                            radius={3}
                        />
                    </Tooltip>
                }
            >
                <Box>
                    <Title order={4}>- Who am I?</Title>
                    <List p={{ lg: "md", sm: 0 }}>
                        {listItems.map((item, i) => (
                            <List.Item key={i} mb={"xs"}>
                                {item.content}
                            </List.Item>
                        ))}
                    </List>
                </Box>
            </Card>
        </>
    );
};

export default Home;
