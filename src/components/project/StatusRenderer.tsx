import { Status } from "@/types";
import { Badge, Tooltip } from "@mantine/core";

export function StatusRenderer({ status }: { status: Status }) {
  return statusBadges[status];
}

const statusBadges: { [key in Status]: React.ReactNode } = {
  done: <></>,
  wip: (
    <Tooltip label="Work in progress">
      <Badge color="yellow" variant="light">
        WIP
      </Badge>
    </Tooltip>
  ),
  dead: <Badge variant="default">Dead</Badge>,
  "???": <Badge variant="default">???</Badge>,
};
