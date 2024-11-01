import { Image, Tooltip } from "@mantine/core";
import styles from "./Spamton.module.css";

const Spamton = () => {
  return (
    <Tooltip
      multiline
      label="Hello [TRADER]. What do you [TALKING IN BRAIN] about? WANNA [CREATE] AN UNFORGETTABLE [D-DEAL] FOR [US]?"
      position="bottom-end"
      fz={"h4"}
      color="white"
      c="black"
      className="spamton-tooltip">
      <Image
        src="/images/sprites/spamton.png"
        style={{ cursor: "pointer" }}
        alt="Spamton Laughing"
        pos={"absolute"}
        w={30}
        bottom={0}
        right={10}
        className={styles.spamton}
      />
    </Tooltip>
  );
};

export default Spamton;
