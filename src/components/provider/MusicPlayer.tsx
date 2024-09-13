import { Box, Group, Tooltip, UnstyledButton } from "@mantine/core";
import { IconPlayerSkipBackFilled, IconPlayerPlayFilled, IconPlayerSkipForwardFilled, IconPlayerPauseFilled } from "@tabler/icons-react";
import { useMusicPlayer } from "./MusicPlayerProvider";
import { useEffect } from "react";

export default function MusicPlayer() {
  const { isPlaying, togglePlayPause, nextTrack, previousTrack } = useMusicPlayer();

  useEffect(() => {
    
  }, [])

  return (
    <Tooltip label="Let's Play Some Music">
      <Box>
        <Group w={"100%"} justify="space-evenly" gap={5}>
          <UnstyledButton onClick={previousTrack} p={0}>
            <IconPlayerSkipBackFilled />
          </UnstyledButton>
          <UnstyledButton onClick={togglePlayPause}>
            {isPlaying ? <IconPlayerPauseFilled /> : <IconPlayerPlayFilled />}
          </UnstyledButton>
          <UnstyledButton onClick={nextTrack}>
            <IconPlayerSkipForwardFilled />
          </UnstyledButton>
        </Group>
      </Box>
    </Tooltip>
  );
}
