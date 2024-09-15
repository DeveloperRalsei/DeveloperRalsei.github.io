import React from 'react';
import { Tooltip, List, Text, Image, useMantineTheme, Anchor, Space, Divider, Flex, Stack, Title } from '@mantine/core';
import Card from '../components/Card';
import { ProfileLinks } from '../data';

const transgender = (<><Text display={"inline"} c={"#74dfff"}>T</Text>
  <Text display={"inline"} c={"#74dfff"}>r</Text>
  <Text display={"inline"} c={"#fff"}>a</Text>
  <Text display={"inline"} c={"#ffb5d7"}>n</Text>
  <Text display={"inline"} c={"#ffb5d7"}>s</Text>
  <Text display={"inline"} c={"#fe8dbf"}>g</Text>
  <Text display={"inline"} c={"#ffb5d7"}>e</Text>
  <Text display={"inline"} c={"#ffb5d7"}>n</Text>
  <Text display={"inline"} c={"#fff"}>d</Text>
  <Text display={"inline"} c={"#74dfff"}>e</Text>
  <Text display={"inline"} c={"#74dfff"}>r</Text></>);

const AboutMe: React.FC = () => {
  const theme = useMantineTheme();

  const myBirthDay = new Date(2006, 3, 11).getTime()
  const currentDay = Date.now()
  
  // :3
  const myAge = Math.floor((currentDay - myBirthDay) / (1000 * 60 * 60 * 24 * 365.25))

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
        <Tooltip label="She/Them" withArrow position='right-end' arrowSize={10}>
          <Text>
            {transgender}
          </Text>
        </Tooltip>
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