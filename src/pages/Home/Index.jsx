import { useEffect, useState } from "react";

import { MainLayout } from "@/layouts/MainLayout";

import { CountryList, LoaderIf } from "@/components";

import {
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  useToast
} from "@chakra-ui/react";

import { MagnifyingGlass } from "phosphor-react";

import { getAllCountries } from "@/services/countries";

import { regions } from "@/config/regions.json";

export const Home = () => {
  const [countries, setCountries] = useState([]);

  const toast = useToast();

  useEffect(() => {
    try {
      getAllCountries(setCountries);
    } catch (error) {
      toast({
        title: "Erro",
        description: error,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  }, []);

  return (
    <MainLayout pageTitle="Home">
      <LoaderIf condition={countries.length === 0}>
        <Flex
          alignItems="center"
          flexDirection={{ base: "column", md: "row" }}
          gap={4}
          mb={4}
        >
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
        <CountryList countries={countries} />
      </LoaderIf>
    </MainLayout>
  );
};
