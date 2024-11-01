import { Flex, Loader } from "@mantine/core";

export const PageLoader = () => {
  return (
    <Flex align={"center"} justify={"center"} h={"100%"} w={"100%"}>
      <Loader variant="dots" />
    </Flex>
  );
};
