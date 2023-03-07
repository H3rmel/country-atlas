import { useRef } from "react";

import { ToggleColorMode } from "@/components";

import { NavLink } from "react-router-dom";

import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Image,
  Stack,
  useColorModeValue,
  useDisclosure
} from "@chakra-ui/react";
import { List } from "phosphor-react";

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const color = useColorModeValue("gray.800", "gray.200");
  const bg = useColorModeValue("gray.100", "gray.900");
  const logo = useColorModeValue("/logo-light.svg", "/logo-dark.svg");
  return (
    <Box bg={bg} color={color} shadow="base">
      <Flex
        width={{ base: "full", md: "app" }}
        py="4"
        px={{ base: 4, md: 0 }}
        mx="auto"
        justifyContent={{ base: "end", md: "space-between" }}
        alignItems="center"
      >
        <Image
          src={logo}
          width="256px"
          display={{ base: "none", md: "block" }}
          alt="Webpage logo"
        />
        {/* For Desktop */}
        <Stack direction="row" display={{ base: "none", md: "flex" }}>
          <NavLink to="/">
            <Button variant="ghost">Home</Button>
          </NavLink>
          <NavLink to="/about">
            <Button variant="ghost">Sobre</Button>
          </NavLink>
          <ToggleColorMode />
        </Stack>
        {/* For Mobile */}
        <IconButton
          display={{ base: "inline-flex", md: "none" }}
          aria-label="Drawer opener"
          icon={<List size={24} />}
          onClick={onOpen}
          ref={btnRef}
        />
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
              <Image src={logo} width="128px" alt="Webpage logo" />
            </DrawerHeader>
            <DrawerBody display="flex" flexDirection="column" gap={2}>
              <NavLink to="/">
                <Button w="100%">Home</Button>
              </NavLink>
              <NavLink to="/about">
                <Button w="100%">Sobre</Button>
              </NavLink>
            </DrawerBody>
            <DrawerFooter>
              <ToggleColorMode />
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  );
};
