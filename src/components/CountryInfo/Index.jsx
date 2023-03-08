import { Code, Heading, List, ListItem, Stack, Text } from "@chakra-ui/react";

export const CountryInfo = ({ country }) => {
  return (
    <Stack
      mx={{ base: 0, md: "auto", lg: 0 }}
      mt={4}
      spacing={{ base: 4, md: 8 }}
    >
      <Heading size="lg">{country?.name?.common}</Heading>
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={{ base: 0, md: 32 }}
      >
        <List lineHeight={2.4}>
          <ListItem>
            <Text as="strong">Nome nativo:</Text>{" "}
            {/* {country?.name?.nativeName?.} */}
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
        <List lineHeight={2.4}>
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
