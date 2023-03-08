import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  GridItem,
  Heading,
  List,
  ListItem,
  Stack,
  Tooltip
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

import { Buildings, GlobeHemisphereEast, UsersThree } from "phosphor-react";

export const CountryItem = ({ country }) => {
  return (
    <GridItem>
      <Link to={`/country/${country.name.common}`}>
        <Card p={4} transition="300ms" _hover={{ boxShadow: "hover" }}>
          <CardHeader
            w="100%"
            h="192px"
            p={4}
            borderRadius="lg"
            backgroundImage={country.flags.svg}
            backgroundPosition="center"
            backgroundSize="cover"
          />
          <CardBody p={0}>
            <Stack mt={2} spacing={2} px={2} py={4}>
              <Heading
                size="md"
                whiteSpace="nowrap"
                overflow="hidden"
                textOverflow="ellipsis"
                maxW="20ch"
              >
                {country.name.common}
              </Heading>
              <List spacing={2}>
                <ListItem display="flex" gap={2} alignItems="center">
                  <Tooltip label="População" placement="top">
                    <Badge>
                      <UsersThree size={20} />
                    </Badge>
                  </Tooltip>
                  {country.population.toLocaleString("pt-BR")}
                </ListItem>
                <ListItem display="flex" gap={2} alignItems="center">
                  <Tooltip label="Região" placement="top">
                    <Badge>
                      <GlobeHemisphereEast size={20} />
                    </Badge>
                  </Tooltip>
                  {country.region}
                </ListItem>
                <ListItem display="flex" gap={2} alignItems="center">
                  <Tooltip label="Capital" placement="top">
                    <Badge>
                      <Buildings size={20} />
                    </Badge>
                  </Tooltip>
                  {country.capital}
                </ListItem>
              </List>
            </Stack>
          </CardBody>
        </Card>
      </Link>
    </GridItem>
  );
};
