import { Grid } from "@chakra-ui/react";

import { CountryItem } from "./CountryItem";

export const CountryList = ({ countries }) => {
  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
        lg: "repeat(4, 1fr)",
      }}
      gap={6}
    >
      {countries.map((country, index) => (
        <CountryItem key={index} country={country} />
      ))}
    </Grid>
  );
};
 