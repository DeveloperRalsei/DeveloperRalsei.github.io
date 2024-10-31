import React from "react";
import {
  Card,
  CardProps,
  DefaultMantineColor,
  Divider,
  Group,
  Text,
  Title,
} from "@mantine/core";

interface CrdProps extends CardProps {
  title: string;
  children: React.ReactNode | string;
  tcolor?: DefaultMantineColor;
  icon?: React.ReactNode;
  withBorder?: boolean;
}

const Crd: React.FC<CrdProps> = ({
  title,
  children,
  tcolor,
  icon,
  withBorder,
}) => {
  return (
    <Card>
      <Group>
        {icon}
        <Title order={3} c={tcolor || "pink"}>
          {title}
        </Title>
      </Group>
      {withBorder && <Divider />}
      <Text>{children}</Text>
    </Card>
  );
};

export default Crd;
