import { Container, Group } from "@mantine/core";

export const PageSwitcher = ({
  rightBtn,
  leftBtn,
}: {
  rightBtn?: React.ReactNode;
  leftBtn?: React.ReactNode;
}) => {
  return (
    <Container size={"xs"} mb={"sm"}>
      <Group w={"100%"} justify="space-between">
        {leftBtn || <div></div>}
        <div></div>
        {rightBtn || <div></div>}
      </Group>
    </Container>
  );
};

export default PageSwitcher;
