import { Anchor, Space } from "@mantine/core";

const Secret = () => {
  return (
    <>
      <Space h="300vh" />
      <Anchor
        td={"underline"}
        onClick={() => open("https://jcw87.github.io/c2-sans-fight/", "_blank")}
      >
        Don't click this link or you gonna have a bad time
      </Anchor>
    </>
  );
};

export default Secret;
