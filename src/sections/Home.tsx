import { Box, Image, List, Title, Tooltip } from "@mantine/core";
import Card from "../components/Card";
import { funFactListItems, listItems } from "../data";
import { useHover } from "@mantine/hooks";
import { RefObject } from "react";

const AboutMe = () => {
  const { hovered, ref } = useHover();

  return (
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
      }>
      <Tooltip
        multiline
        label="Hello [TRADER]. What do you [TALKING IN BRAIN] about? WANNA [CREATE] AN UNFORGETTABLE [D-DEAL] FOR [US]?"
        position="bottom-end"
        fz={"h4"}
        color="white"
        c="black"
        className="spamton-tooltip">
        <Image
          src={`/images/sprites/${
            hovered ? "spamton-laughing.gif" : "spamton.png"
          }`}
          ref={ref as RefObject<HTMLImageElement>}
          style={{ cursor: "pointer" }}
          alt="Spamton Laughing"
          w={hovered ? 50 : 30}
          pos={"absolute"}
          bottom={0}
          right={hovered ? 0 : 10}
          className="spamton"
        />
      </Tooltip>
      <Box mb={20}>
        <Title order={4}>- Who am I?</Title>
        <List p={"md"}>
          {listItems.map((item, i) => (
            <List.Item key={i} mb={"sm"}>
              {item.content}
            </List.Item>
          ))}
        </List>
      </Box>

      <Box mb={20}>
        <Title order={4}>- Fun Facts</Title>
        <List p={"md"}>
          {funFactListItems.map((item, i) => (
            <List.Item key={i} mb={"sm"}>
              {item}
            </List.Item>
          ))}
        </List>
      </Box>
    </Card>
  );
};

export default AboutMe;
