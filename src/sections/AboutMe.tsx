import React from "react";
import {
  Tooltip,
  List,
  Text,
  Image,
  useMantineTheme,
  Anchor,
  Divider,
  Flex,
  Group,
} from "@mantine/core";
import Card from "../components/Card";

const AboutMe: React.FC = () => {
  const theme = useMantineTheme();

  const myBirthDay = new Date(2006, 3, 11).getTime();
  const currentDay = Date.now();

  // :3
  const myAge = Math.floor(
    (currentDay - myBirthDay) / (1000 * 60 * 60 * 24 * 365.25)
  );

  const transgender = "Feminine".split("").map((letter, i) => {
    const colors = [
      "#74dfff",
      "#fff",
      "#ffb5d7",
      "#fe8dbf",
      "#ffb5d7",
      "#fff",
      "#74dfff",
    ];
    return (
      <Text key={i} c={colors[i % colors.length]} inline>
        {letter}
      </Text>
    );
  });

  const bisexual = "Bisexual".split("").map((letter, i) => {
    const colors = [
      "#d70071",
      "#d70071",
      "#d70071",
      "#9c4e97",
      "#9c4e97",
      "#0035aa",
      "#0035aa",
      "#0035aa",
    ];
    return (
      <Text inline c={colors[i % colors.length]}>
        {letter}
      </Text>
    );
  });

  // [
  //   { letter: "B", color: "#d70071" },
  //   { letter: "i", color: "#d70071" },
  //   { letter: "s", color: "#d70071" },
  //   { letter: "e", color: "#9c4e97" },
  //   { letter: "x", color: "#9c4e97" },
  //   { letter: "u", color: "#0035aa" },
  //   { letter: "a", color: "#0035aa" },
  //   { letter: "l", color: "#0035aa" },
  // ].map(({ color, letter }, i) => (
  //   <Text key={i} c={color} inline>{letter}</Text>
  // ));

  // const furDes = [
  //   "I'guess",
  //   "I'm not sure",
  //   "Maybe",
  //   "Uhhh...",
  //   "Okay maybe I might be"
  // ]

  // const [furryDesicion, setFurryDesicion] = useState(furDes[0])

  return (
    <Card
      title="Who or What am I ?"
      tcolor="lime"
      icon={
        <Tooltip label=":3" position="left" withArrow>
          <img
            src="/images/sprites/ralsei_happi.png"
            width={20}
            style={{ marginBottom: 3 }}
          />
        </Tooltip>
      }
      withBorder>
      I'm: <br />
      <List listStyleType="disc">
        <List.Item>
          <Group gap={6}>
            <Text inline>using</Text>{" "}
            <Text c={theme.colors.pink[5]} inline>
              she
            </Text>
            /
            <Text c={theme.colors.blue[5]} inline>
              he
            </Text>
          </Group>
          <List icon="-">
            <List.Item>
              <Group gap={3}>
                <Flex>{transgender}</Flex>
                <Text c={theme.colors.gray[6]}>(femboy :3)</Text>
                <Image src={"/images/trans.png"} alt="trans-flag" w={25} />
              </Group>
            </List.Item>
            <List.Item>
              <Group>
                <Flex>{bisexual}</Flex>
                <Image src={"/images/bi.png"} alt="trans-flag" w={25} />
              </Group>
            </List.Item>
          </List>
        </List.Item>
        <List.Item>a fullstack web developer</List.Item>
        <List.Item>
          {myAge} Years Old
          <Text size="xs" c={theme.colors.gray[6]} display={"inline"}>
            {" "}
            (11 Apr 2006)
          </Text>
        </List.Item>
        <List.Item>
          <Tooltip label={<span>&#128557;</span>} withArrow position="right">
            <Text>Single</Text>
          </Tooltip>
        </List.Item>
        <List.Item>
          From{" "}
          <Tooltip label="Turkiye! Actually" position="right">
            <span>Turkey &nbsp;</span>
          </Tooltip>
          <Image
            src={"/images/as-bayraklari-as.png"}
            alt="turkiye"
            display={"inline"}
            w={15}
          />
        </List.Item>
        <List.Item>
          using{" "}
          <Anchor href="https://archlinux.org" target="_blank">
            arch
          </Anchor>{" "}
          btw :P{" "}
          <Image
            src={"/images/arch.png"}
            alt="arch"
            w={20}
            display={"inline-block"}
          />
        </List.Item>
        <List.Item>
          and I like ice cream&#127848;
          <Text size="xs" display={"inline"} c={theme.colors.gray[6]}>
            (it would better if it was chocolate)
          </Text>
        </List.Item>
        <List.Item>
          like to play:
          <List icon="-">
            <List.Item>
              <Anchor href="https://osu.ppy.sh/" target="_blank">
                Osu!
              </Anchor>
            </List.Item>
            <List.Item>
              <Anchor href="https://minecraft.net/" target="_blank">
                Minecraft
              </Anchor>
            </List.Item>
            <List.Item>
              <Anchor href="https://undertale.com/" target="_blank">
                Undertale
              </Anchor>
            </List.Item>
            <List.Item>
              <Anchor href="https://deltarune.com/" target="_blank">
                Deltarune
              </Anchor>
            </List.Item>
          </List>
        </List.Item>
        
      </List>

      <Divider />
      <Text p={"sm"}>
      Discord is currently closed in my country for a reason I don't know. So it's a little difficult to contact me right now.
      </Text>
    </Card>
  );
};

export default AboutMe;
