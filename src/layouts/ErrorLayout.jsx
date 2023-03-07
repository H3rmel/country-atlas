import { useEffect } from "react";

import { Link } from "react-router-dom";

import {
  Button,
  Center,
  IconButton,
  Stack,
  Tooltip,
  useColorModeValue
} from "@chakra-ui/react";

import { ArrowCounterClockwise } from "phosphor-react";

export const ErrorLayout = ({ children, pageTitle }) => {
  const color = useColorModeValue("gray.800", "gray.200");

  useEffect(() => {
    document.title = `${pageTitle} | Country Atlas`;
  });
  return (
    <Center w="full" h="100vh" bg={!color} color={color}>
      <Stack direction="column" align="center">
        {children}
        <Stack direction="row">
          <Link to="/">
            <Button colorScheme="red">Voltar para Home</Button>
          </Link>
          <Link>
            <Tooltip label="Reiniciar página" placement="right">
              <IconButton
                colorScheme="red"
                aria-label="Refresh page"
                icon={<ArrowCounterClockwise size={24} />}
              />
            </Tooltip>
          </Link>
        </Stack>
      </Stack>
    </Center>
  );
};
