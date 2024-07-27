import React from 'react';
import { Group, Paper, Stack, Text } from '@mantine/core';
import { useLanyard, LanyardWebsocket } from 'react-use-lanyard';

export const StatusBadge = () => {
  const { status } = useLanyard({
    userId: '718798893445283863',
    socket: true,
  }) as LanyardWebsocket;

  const isOnline = status?.discord_status === 'online' || status?.discord_status === 'dnd' ? true && "active" : false;
  const idle = status?.discord_status === 'idle'

  if(!status){
    return <Text c={"gray"}>Loading...</Text>
  }

  if (isOnline === 'active') {
    return <Text c={"green"}>Online</Text>
  } else if (idle) {
    return <Text c={"yellow"}>AFK</Text>
  } else {
    return <Text c={"gray"}>Offline</Text>
  }

}
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

  if (isOnline) {
    return (
      <Paper p="md" withBorder>
        <Group w="100%">
          <Stack>
            <Group w="100%">
              {status.activities && status.activities[1] ? (
                <Text>Playing a game: {status.activities[1].name}</Text>
              ) : <Text c="green">Online</Text>}
            </Group>
          </Stack>
        </Group>
      </Paper>
    )
  } else {
    return (
      ""
    )
  }
};

export default Status;
