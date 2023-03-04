import { useEffect } from "react";

import { Link } from "react-router-dom";

import { Button, Center, Stack, useColorModeValue } from "@chakra-ui/react";

export const ErrorLayout = ({ children, pageTitle }) => {
  const color = useColorModeValue("gray.800", "gray.200");

  useEffect(() => {
    document.title = `${pageTitle} | Country Atlas`;
  });
  return (
    <Center w="full" h="100vh" bg={!color} color={color}>
      <Stack direction="column" align="center">
        {children}
        <Link to="/">
          <Button colorScheme="red">Voltar para Home</Button>
        </Link>
      </Stack>
    </Center>
  );
};
