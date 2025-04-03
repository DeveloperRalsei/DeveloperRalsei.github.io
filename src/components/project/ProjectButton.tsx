import { ProjectButton as pb } from "@/types";
import { Button } from "@mantine/core";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";

export const ProjectButton = ({
    button,
    ghUrl,
}: {
    button: pb;
    ghUrl: string;
}) => {
    if (button.type === "github") {
        return (
            <Button
                fullWidth
                variant="light"
                leftSection={<IconBrandGithub />}
                component="a"
                target="_blank"
                href={ghUrl}
            >
                View on Github
            </Button>
        );
    } else if (button.type === "link") {
        return (
            <Button
                fullWidth
                rightSection={<IconExternalLink size={20} />}
                component="a"
                href={button.url}
                variant="light"
            >
                {button.label}
            </Button>
        );
    } else if (button.type === "custom") {
        return (
            <Button
                fullWidth
                variant="light"
                color={button.color || "teal"}
                onClick={button.onClick}
            >
                {button.label}
            </Button>
        );
    }
};
