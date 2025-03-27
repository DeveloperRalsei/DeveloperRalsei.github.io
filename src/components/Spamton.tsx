import { Image, Tooltip } from "@mantine/core";
import styles from "./Spamton.module.css";
import { useMusicPlayer } from "./musicPlayer";

const Spamton = () => {
    const { playing } = useMusicPlayer();
    return (
        <Tooltip
            multiline
            label="Hello [TRADER]. What do you [TALKING IN BRAIN] about? WANNA [CREATE] AN UNFORGETTABLE [D-DEAL] FOR [US]?"
            position="top-end"
            fz={"h4"}
            className="spamton-tooltip"
        >
            <Image
                src="/images/sprites/spamton.png"
                style={{ cursor: "pointer" }}
                alt="Spamton Laughing"
                pos={"fixed"}
                w={30}
                bottom={playing ? 55 : 0}
                right={10}
                className={styles.spamton}
            />
        </Tooltip>
    );
};

export default Spamton;
