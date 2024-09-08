import React from 'react';
import { Box, Group, Menu, Paper, Text } from '@mantine/core';
import { useLanyard, LanyardWebsocket, Activity } from 'react-use-lanyard';
import { IconBrandSpotifyFilled } from '@tabler/icons-react';

export const StatusBadge = () => {
  const { status } = useLanyard({
    userId: '718798893445283863',
    socket: true,
  }) as LanyardWebsocket;

  const isOnline = status?.discord_status === 'online' || status?.discord_status === 'dnd' ? true && "active" : false;
  const isIdle = status?.discord_status === 'idle';

  if (!status) {
    return <Text c={"gray"}>Loading...</Text>;
  }

  if (isIdle) return <Text c={"yellow"}>AFK</Text>;
  if (!isOnline) return <Text c={"gray"}>Offline</Text>; else return <Text c={"green"}>Online</Text>;

};

const Status: React.FC = () => {
  const { status } = useLanyard({
    userId: '718798893445283863',
    socket: true,
  }) as LanyardWebsocket;

  if (!status) {
    return <Text>Loading...</Text>;
  }

  const isOnline = status.discord_status === 'online' ||
    status.discord_status === 'dnd' ||
    status.discord_status === 'idle';

  const activities: Activity[] = status.activities;

  const spotify = status.spotify;

  const songDurationMs = spotify?.timestamps.end! - spotify?.timestamps.start!;

  const songTotalSeconds = Math.floor(songDurationMs / 1000);

  const songMinutes = Math.floor(songTotalSeconds / 60);
  const songSeconds = songTotalSeconds % 60;

  return (
    <Paper p="md" withBorder>
      {isOnline ?
        <Group w="100%" justify='space-between' gap={0}>
          {activities && activities[0] ?
            activities[0].name === 'Custom Status' ?
              activities[1] ? <Box>
                Playing a game: <Text c={"red"} display={"inline"}>{activities[1].name}</Text>
              </Box> : <Text>I'm not currently doing anything</Text> : <Box>
                Playing a game: <Text c={"red"} display={"inline"}>{activities[0].name}</Text>
              </Box>
            : <Text>I'm not currently doing anything</Text>}

          {status.listening_to_spotify ? <Menu position='left' trigger='click-hover'>
            <Menu.Target>
              <IconBrandSpotifyFilled color='lightgreen' cursor={"pointer"} />
            </Menu.Target>

            <Menu.Dropdown p={20} bg={"dark"}>
              <Text c={"green"}>Listening</Text>
              <Menu.Divider/>
              <Text display={"block"}>
                Song: <Text c={"lime"} display={"inline"}>{spotify?.song}</Text>
              </Text>
              <Text display={"block"}>
                Artist: <Text c={"blue"} display={"inline"} td={"underline"} component='a' href={`https://google.com/search?q="${spotify?.artist}" artist`}>{spotify?.artist}</Text>
              </Text>
              <Text display={"block"}>
                Duration: <Text display="inline">{songMinutes}</Text> minutes <Text display="inline">{songSeconds}</Text> seconds
              </Text>
            </Menu.Dropdown>

          </Menu> : <Menu trigger='click-hover' position='left'>

            <Menu.Target>
              <IconBrandSpotifyFilled color={"gray"} cursor={"pointer"} />
            </Menu.Target>

            <Menu.Dropdown bg={"dark"}>
              <Text c={"gray"}>Not Listening Anything</Text>
            </Menu.Dropdown>

          </Menu>}

        </Group> : "Offline"}
    </Paper>
  );
};

export default Status;
