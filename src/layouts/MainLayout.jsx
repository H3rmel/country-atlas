import { useEffect } from "react";

import { Header } from "./Header";

import { Box, useColorModeValue } from "@chakra-ui/react";

export const MainLayout = ({ children, pageTitle }) => {
  const color = useColorModeValue("gray.800", "gray.200");
  const bg = useColorModeValue("gray.100", "gray.800");

  useEffect(() => {
    document.title = `${pageTitle} | Country Atlas`;
  }, []);

  return (
    <Box w="full" h="100vh" overflowY="auto" bg={bg} color={color}>
      <Header />
      <Box width="min(100% - 2rem, 75vw)" mx="auto" my="4">
        {/* Breadcrumbs here later */}
        {children}
      </Box>
    </Box>
  );
};
