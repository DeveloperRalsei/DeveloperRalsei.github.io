import { createContext, PropsWithChildren } from "react";

import "./TextBlock.module.css";

type TextBlockContextType = Sprites & {
  position: "top" | "bottom" | "";
  visible: boolean;
};

type Sprites =
  | {
      sprite: true;
      spriteImage: "ralsei" | "susie" | "kris";
    }
  | {
      sprite: false;
    };

const TextBlockContext = createContext<TextBlockContextType | undefined>({
  position: "top",
  sprite: true,
  spriteImage: "ralsei",
  visible: false,
});

export const TextBlockProiver = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <TextBlockContext.Provider
      value={{
        position: "bottom",
        sprite: false,
        visible: false,
      }}
    >
      {children}
    </TextBlockContext.Provider>
  );
};
