import { useContext, useEffect } from "react";

import { Header } from "./Header";

import { Box } from "@chakra-ui/react";

import { ColorModeContext, ColorModeProvider } from "@/contexts/colormode";

export const MainLayout = ({ children, pageTitle }) => {
  const { layoutColor, layoutBg } = useContext(ColorModeContext);

  useEffect(() => {
    document.title = `${pageTitle} | Country Atlas`;
  }, []);

  return (
    <ColorModeProvider>
      <Box w="full" h="100vh" bg={layoutBg} color={layoutColor}>
        <Header />
        <Box width="app" mx="auto" my="4">
          {/* Breadcrumbs here later */}
          {children}
        </Box>
      </Box>
    </ColorModeProvider>
  );
};
