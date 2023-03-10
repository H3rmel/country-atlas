import { Code, Heading, List, ListItem, Stack, Text } from "@chakra-ui/react";

import { stackSx } from "./style";

export const CountryInfo = ({ country }) => {
  return (
    <Stack sx={stackSx} spacing={{ base: 4, md: 8 }}>
      <Heading size="lg">{country?.name?.common}</Heading>
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={{ base: 0, md: 32 }}
      >
        <List spacing={4}>
          <ListItem>
            <Text as="strong">Nome nativo:</Text>{" "}
            {Object.values(country.name.nativeName)[0].common}
          </ListItem>
          <ListItem>
            <Text as="strong">População:</Text>{" "}
            {country?.population?.toLocaleString("pt-BR")}
          </ListItem>
          <ListItem>
            <Text as="strong">Região:</Text> {country?.region}
          </ListItem>
          <ListItem>
            <Text as="strong">Sub-região:</Text> {country?.subregion}
          </ListItem>
        </List>
        <List spacing={4}>
          <ListItem>
            <Text as="strong">Capital:</Text> {country?.capital}
          </ListItem>
          <ListItem>
            <Text as="strong">Top Level Domain:</Text>{" "}
            <Code>{country?.tld}</Code>
          </ListItem>
          <ListItem>
            <Text as="strong">Moedas:</Text>{" "}
            {Object.values(country.currencies).map((currency, index) => {
              if (index === Object.values(country.currencies).length - 1)
                return currency.name;
              else return `${currency.name}, `;
            })}
          </ListItem>
          <ListItem>
            <Text as="strong">Idiomas:</Text>{" "}
            {Object.values(country.languages).map((language, index) => {
              if (index === Object.values(country.languages).length - 1)
                return language;
              else return `${language}, `;
            })}
          </ListItem>
        </List>
      </Stack>
      {/* Will need special attention */}
      {/* <Stack>
              <Text as="strong">
                Países de borda:
              </Text>
            </Stack> */}
    </Stack>
  );
};
