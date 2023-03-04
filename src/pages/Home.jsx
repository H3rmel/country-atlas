import { useEffect, useState } from "react";

import { MainLayout } from "@/layouts/MainLayout";

import { LoaderIf } from "@/components/LoaderIf";

import {
  Card, Flex,
  Grid,
  GridItem, Input,
  InputGroup,
  InputLeftElement,
  Select
} from "@chakra-ui/react";

import { MagnifyingGlass } from "phosphor-react";

import { getAllCountries } from "../services/countries";

import { regions } from "@/config/regions.json";

export const Home = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getAllCountries(setCountries);
  }, []);

  return (
    <MainLayout pageTitle="Home">
      <LoaderIf condition={countries === null}>
        <Flex alignItems="center" gap={4}>
          <InputGroup size="lg" flexBasis="75%">
            <InputLeftElement>
              <MagnifyingGlass size={24} />
            </InputLeftElement>
            <Input placeholder="Pesquise por algum país..." />
          </InputGroup>
          <Select placeholder="Filtrar por região" size="lg" flex="25%">
            {regions.map((region, index) => (
              <option key={index} value={region}>
                {region}
              </option>
            ))}
          </Select>
        </Flex>
        <Grid templateRows="repeat(4, 1fr)" gap={6}>
          <GridItem rowSpan={2}>
            {countries.map((country) => (
              <Card>{country.name.common}</Card>
            ))}
          </GridItem>
        </Grid>
      </LoaderIf>
    </MainLayout>
  );
};
