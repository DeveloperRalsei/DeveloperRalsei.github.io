import { useDisclosure } from "@mantine/hooks";
import { createContext, useState } from "react";

export const SecretContext = createContext<{
  toggle: () => void;
  setSecret: (value: boolean) => void;
  secret: boolean;
}>({
  toggle: () => {},
  setSecret: () => {},
  secret: false,
});

export const SecretProvider = ({
  children,
}: {
  children: React.ReactNode;
  secret: boolean;
}) => {
  const [secret, { toggle, open, close }] = useDisclosure(false);

  function setSecret(value: boolean): void {
    if (value) {
      open();
    } else {
      close();
    }
  }

  return (
    <SecretContext.Provider value={{ secret, toggle, setSecret }}>
      {children}
    </SecretContext.Provider>
  );
};
