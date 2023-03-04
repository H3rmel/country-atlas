import { ToggleColorMode } from "./ToggleColorMode";

import { NavLink } from "react-router-dom";

import {
  Box,
  Button,
  Flex,
  Image,
  Stack,
  useColorModeValue
} from "@chakra-ui/react";

export const Header = () => {
  const color = useColorModeValue("gray.800", "gray.200");
  const bg = useColorModeValue("gray.100", "gray.900");
  const logo = useColorModeValue("/logo-light.svg", "/logo-dark.svg");
  return (
    <Box bg={bg} color={color} shadow="base">
      <Flex
        width="app"
        py="4"
        mx="auto"
        justifyContent="space-between"
        alignItems="center"
      >
        <Image src={logo} width="256px" alt="Webpage logo" />
        <Stack direction="row">
          <NavLink to="/">
            <Button variant="ghost">Home</Button>
          </NavLink>
          <NavLink to="/about">
            <Button variant="ghost">Sobre</Button>
          </NavLink>
          <ToggleColorMode />
        </Stack>
      </Flex>
    </Box>
  );
};
