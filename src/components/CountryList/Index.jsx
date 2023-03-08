import { Grid } from "@chakra-ui/react";

import { CountryItem } from "../CountryItem/Index";

export const CountryList = ({ countries }) => {
  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
        xl: "repeat(3, 1fr)",
        "2xl": "repeat(4, 1fr)",
      }}
      gap={6}
    >
      {/* Virtualize this shit */}
      {countries.map((country, index) => (
        <CountryItem key={index} country={country} />
      ))}
    </Grid>
  );
};
