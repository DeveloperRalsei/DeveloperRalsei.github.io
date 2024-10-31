import { Divider, Image, List, Text, Title, Tooltip } from "@mantine/core";
import Card from "../components/Card";

const AboutMe = () => {
  return (
    <Card
      mb={40}
      withBorder
      title="About Me"
      icon={
        <Tooltip label=":3" position="left" withArrow>
          <Image
            src={"/images/sprites/ralsei_happi.png"}
            alt="me :3"
            w={25}
            radius={3}
          />
        </Tooltip>
      }>
      <Title order={4}>- Who am I?</Title>
      <List p={"md"}>
        <List.Item>
          Well, I'm just a silly guy who likes to code and make stuffs. I'm
          currently learning nextjs. I also learn{" "}
          <Text fw={300} c={"blue"} display={"inline"}>
            C#
          </Text>{" "}
          for machine learning.
        </List.Item>
        <List.Item>
          I usually write for web, but I newly started to write for console and
          desktop apps. (c# or electron)
        </List.Item>
      </List>
    </Card>
  );
};

export default AboutMe;
