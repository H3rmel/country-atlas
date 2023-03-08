import { createContext } from "react";

import { useColorModeValue } from "@chakra-ui/react";

export const ColorModeContext = createContext({});

export const ColorModeProvider = ({ children }) => {
  const layoutColor = useColorModeValue("gray.800", "gray.200");
  const layoutBg = useColorModeValue("gray.200", "gray.800");

  const headerBg = useColorModeValue("white", "gray.900");
  const headerLogo = useColorModeValue("/logo-light.svg", "/logo-dark.svg");

  return (
    <ColorModeContext.Provider
      value={{ layoutColor, layoutBg, headerBg, headerLogo }}
    >
      {children}
    </ColorModeContext.Provider>
  );
};
