import { createContext, useState } from "react";

export const SecretContext = createContext<{
  changeSecret: () => void;
  secret: boolean;
}>({
  changeSecret: () => {},
  secret: false,
});

export const SecretProvider = ({
  children,
}: {
  children: React.ReactNode;
  secret: boolean;
}) => {
  const [secret, setSecret] = useState(false);

  function changeSecret() {
    setSecret((prev) => !prev);
  }

  return (
    <SecretContext.Provider value={{ secret, changeSecret }}>
      {children}
    </SecretContext.Provider>
  );
};
