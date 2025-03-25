import i18n from "@/i18n";
import { ActionIcon, Affix, Group, Transition } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronRight, IconLanguage } from "@tabler/icons-react";
import { TRFlag, USFlag } from "mantine-flagpack";

export const LangAffix = () => {
    const [mounted, { open, close }] = useDisclosure();

    return (
        <Affix position={{ top: 10, right: 10 }}>
            <ActionIcon
                variant="subtle"
                onClick={open}
                display={mounted ? "none" : "flex"}
            >
                <IconLanguage />
            </ActionIcon>
            <Transition mounted={mounted} transition={"fade-left"}>
                {(styles) => (
                    <Group style={styles}>
                        <ActionIcon variant="subtle" onClick={close}>
                            <IconChevronRight />
                        </ActionIcon>
                        <ActionIcon
                            onClick={() => i18n.changeLanguage("tr")}
                            variant="transparent"
                            size={"lg"}
                        >
                            <TRFlag />
                        </ActionIcon>
                        <ActionIcon
                            onClick={() => i18n.changeLanguage("en")}
                            variant="transparent"
                        >
                            <USFlag />
                        </ActionIcon>
                    </Group>
                )}
            </Transition>
        </Affix>
    );
};
