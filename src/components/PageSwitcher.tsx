import { Text, Container, Group, MantineColor } from "@mantine/core";

export const PageSwitcher = ({
  rightBtn,
  leftBtn,
  page,
  pageTitleColor,
}: {
  rightBtn?: React.ReactNode;
  leftBtn?: React.ReactNode;
  page: string;
  pageTitleColor?: MantineColor;
}) => {
  return (
    <Container size={"xs"} mb={"sm"}>
      <Group w={"100%"} justify="space-between">
        {leftBtn || <div></div>}
        <Text fz={"h3"} c={pageTitleColor}>
          {page}
        </Text>
        {rightBtn || <div></div>}
      </Group>
    </Container>
  );
};

export default PageSwitcher;
