import { ProjectButton as btnType } from "@/types";
import { Button, Group } from "@mantine/core";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";

export function ProjectButton({
  button,
  flex,
}: {
  button: btnType;
  flex?: boolean;
}) {
  const { color, type } = button;

  if (type !== "custom") {
    return (
      <Button
        variant={"light"}
        color={color || "gray"}
        component="a"
        fz={"md"}
        href={button.url}
        target="_blank"
        flex={flex ? 1 : undefined}
        style={{
          textDecoration: "none",
        }}
      >
        {type === "link" && (
          <Group gap={7}>
            {button.label}
            <IconExternalLink size={16} />
          </Group>
        )}

        {type === "github" && (
          <Group>
            <IconBrandGithub size={16} />
            {"Open on Github"}
          </Group>
        )}
      </Button>
    );
  }

  return (
    <Button onClick={button.onClick} color={color} flex={flex ? 1 : undefined}>
      {button.label}
    </Button>
  );
}
