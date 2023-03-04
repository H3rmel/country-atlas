import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: `"Space Grotesk", sans-serif`,
    body: `"Sora", sans-serif`,
  },
  sizes: {
    app: "min(100% - 2rem, 75vw)",
  },
});
