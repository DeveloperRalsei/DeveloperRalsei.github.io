import React from 'react';
import { Group, Paper, Text } from '@mantine/core';
import { useLanyard, LanyardWebsocket, Activity } from 'react-use-lanyard';

export const StatusBadge = () => {
  const { status } = useLanyard({
    userId: '718798893445283863',
    socket: true,
  }) as LanyardWebsocket;

  const isOnline = status?.discord_status === 'online' || status?.discord_status === 'dnd' ? true && "active" : false;
  const idle = status?.discord_status === 'idle'

  if (!status) {
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

  console.log(status.activities[0])

  const activities: Activity[] = status.activities

  return (
    <Paper p="md" withBorder>
      {isOnline ?
        <Group w="100%">
          {activities[0] && activities[0].name === 'Custom Status' && activities[1] ? 
            "Playing a game: "+activities[1].name
          :
            activities[0] === undefined ? <Text c={"green"}>Online</Text> : "Playing a game: "+ activities[0].name
          }
        </Group> : "Offline"}
    </Paper>
  )
};

export default Status;
