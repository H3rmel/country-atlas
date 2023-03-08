import { useContext, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { Button, Center, IconButton, Stack, Tooltip } from "@chakra-ui/react";

import { ArrowCounterClockwise } from "phosphor-react";

import { ColorModeContext, ColorModeProvider } from "../contexts/colormode";

export const ErrorLayout = ({ children, pageTitle }) => {
  const { layoutColor } = useContext(ColorModeContext);

  const navigate = useNavigate();

  useEffect(() => {
    document.title = `${pageTitle} | Country Atlas`;
  });

  const handleReturn = () => navigate("/", { replace: true });
  return (
    <ColorModeProvider>
      <Center w="app" h="100vh" mx="auto" color={layoutColor}>
        <Stack direction="column" align="center">
          {children}
          <Stack direction="row">
            <Button colorScheme="red" onClick={handleReturn}>
              Voltar para Home
            </Button>
            <Tooltip label="Reiniciar página" placement="right">
              <IconButton
                colorScheme="red"
                aria-label="Refresh page"
                icon={<ArrowCounterClockwise size={24} />}
              />
            </Tooltip>
          </Stack>
        </Stack>
      </Center>
    </ColorModeProvider>
  );
};
