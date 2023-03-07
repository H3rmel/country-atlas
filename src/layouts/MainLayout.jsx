import { useEffect } from "react";

import { Header } from "./Header";

import { Box, useColorModeValue } from "@chakra-ui/react";

export const MainLayout = ({ children, pageTitle }) => {
  const color = useColorModeValue("gray.800", "gray.200");

  useEffect(() => {
    document.title = `${pageTitle} | Country Atlas`;
  }, []);

  return (
    <Box w="full" h="100vh" bg={!color} color={color}>
      <Header />
      <Box width="app" mx="auto" my="4">
        {/* Breadcrumbs here later */}
        {children}
      </Box>
    </Box>
  );
};
