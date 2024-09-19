import React from 'react';
import { Tooltip, List, Text, Image, useMantineTheme, Anchor, Space, Divider, Flex, Stack, Title, Group } from '@mantine/core';
import Card from '../components/Card';
import { ProfileLinks } from '../data';

const AboutMe: React.FC = () => {
  const theme = useMantineTheme();

  const myBirthDay = new Date(2006, 3, 11).getTime();
  const currentDay = Date.now();

  // :3
  const myAge = Math.floor((currentDay - myBirthDay) / (1000 * 60 * 60 * 24 * 365.25));

  type genderColors = {
    letter: string,
    color: string;
  };

  const transgender: genderColors[] = [
    { letter: "T", color: "#74dfff" },
    { letter: "r", color: "#74dfff" },
    { letter: "a", color: "#fff" },
    { letter: "n", color: "#ffb5d7" },
    { letter: "s", color: "#ffb5d7" },
    { letter: "g", color: "#fe8dbf" },
    { letter: "e", color: "#ffb5d7" },
    { letter: "n", color: "#ffb5d7" },
    { letter: "d", color: "#fff" },
    { letter: "e", color: "#74dfff" },
    { letter: "r", color: "#74dfff" },
  ];

  const bisexual: genderColors[] = [
    { letter: "B", color: "#d70071" },
    { letter: "i", color: "#d70071" },
    { letter: "s", color: "#d70071" },
    { letter: "e", color: "#9c4e97" },
    { letter: "x", color: "#9c4e97" },
    { letter: "u", color: "#0035aa" },
    { letter: "a", color: "#0035aa" },
    { letter: "l", color: "#0035aa" },
  ];

  return <Card
    title='About Me'
    icon={
      <Tooltip label=":3" position='left' withArrow>
        <img
          src='/images/sprites/ralsei_happi.png'
          width={20}
          style={{ marginBottom: 3 }}
        />
      </Tooltip>
    }
    withBorder
  >
    I'm: <br />
    <List listStyleType='disc' >
      <List.Item>
        <Group gap={6}>
          <Text inline>using</Text> <Text c={theme.colors.pink[5]} inline>she/them</Text> :3
        </Group>
        <List icon='-'>
          <List.Item>
            <Group>
              <Flex>
                {transgender.map(({ color, letter }, i) => (
                  <Text key={i} c={color} inline>{letter}</Text>
                ))}
              </Flex>
              <Image src={"/images/trans.png"} alt='trans-flag' w={25} />
            </Group>
          </List.Item>
          <List.Item>
            <Group>
              <Flex>
                {bisexual.map(({ color, letter }, i) => (
                  <Text key={i} c={color} inline>{letter}</Text>
                ))}
              </Flex>
              <Image src={"/images/bi.png"} alt='trans-flag' w={25} />
            </Group>
          </List.Item>
        </List>
      </List.Item>
      <List.Item>
        a fullstack web developer
      </List.Item>
      <List.Item>{myAge} Years Old<Text size='xs' c={theme.colors.gray[6]} display={"inline"}> (11 Apr 2006)</Text></List.Item>
      <List.Item>
        <Tooltip label={<span>&#128557;</span>} withArrow position='right' >
          <Text>Single</Text>
        </Tooltip>
      </List.Item>
      <List.Item>
        From <Tooltip label="Turkiye! Actually" position='right'>
          <span>Turkey &nbsp;</span>
        </Tooltip>
        <Image src={"/images/as-bayraklari-as.png"} alt='turkiye' display={"inline"} w={15} />
      </List.Item>
      <List.Item>using <Anchor href="https://archlinux.org" target='_blank'>arch</Anchor> btw :P <Image src={"/images/arch.png"} alt='arch' w={20} display={"inline-block"} /></List.Item>
      <List.Item>and I like ice cream&#127848;<Text size='xs' display={"inline"} c={theme.colors.gray[6]}>(it would better if it was chocolate)</Text></List.Item>
      <List.Item>
        like to play:
        <List icon="-">
          <List.Item>
            <Anchor href='https://osu.ppy.sh/' target='_blank'>
              Osu!
            </Anchor>
          </List.Item>
          <List.Item>
            <Anchor href='https://minecraft.net/' target='_blank'>
              Minecraft
            </Anchor>
          </List.Item>
          <List.Item>
            <Anchor href='https://undertale.com/' target='_blank'>
              Undertale
            </Anchor>
          </List.Item>
          <List.Item>
            <Anchor href='https://deltarune.com/' target='_blank'>
              Deltarune
            </Anchor>
          </List.Item>
        </List>
      </List.Item>
      <Space h={15} />
      <Title order={4} c={"grape"}>My Profiles</Title>
      <Divider />
      <Flex mt={10} gap={"lg"} wrap={'wrap'}>
        {ProfileLinks.map((l, i) => (
          <Anchor href={l.href} key={i} c={l.color} target="_blank">
            <Stack align='center'>
              {l.icon}
              <Text size='sm'>{l.label}</Text>
            </Stack>
          </Anchor>
        ))}
      </Flex>
    </List>
  </Card>;
};

export default AboutMe;