import { useEffect, useState } from "react";

import {
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Select
} from "@chakra-ui/react";

import { MagnifyingGlass } from "phosphor-react";

import { regions } from "@/config/regions.json";

export const CountryForm = ({ countries, setFilter }) => {
  const [searchQuery, setSearchQuery] = useState({
    name: "",
    region: "",
  });

  useEffect(() => {
    handleFilter();
  }, [searchQuery]);

  const handleSearchQuery = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    const updatedSearchQuery = {
      ...searchQuery,
      [name]: value,
    };

    setSearchQuery(updatedSearchQuery);
  };

  const handleFilter = () => {
    const filteredCountries = countries.filter((country) => {
      if (
        !country.region.toLowerCase().includes(searchQuery.region.toLowerCase())
      )
        return;

      if (
        !country.name.common
          .toLowerCase()
          .includes(searchQuery.name.toLowerCase())
      )
        return;

      return country;
    });

    setFilter(filteredCountries);
  };

  return (
    <Flex
      alignItems="center"
      flexDirection={{ base: "column", md: "row" }}
      gap={4}
      mb={4}
    >
      <InputGroup size="lg" flexBasis={{ base: "60%", md: "75%" }}>
        <InputLeftElement>
          <MagnifyingGlass size={24} />
        </InputLeftElement>
        <Input
          type="text"
          placeholder="Pesquise por algum país..."
          name="name"
          value={searchQuery.name}
          onChange={(e) => handleSearchQuery(e)}
        />
      </InputGroup>
      <Select
        name="region"
        size="lg"
        value={searchQuery.region}
        flexBasis={{ base: "40%", md: "25%" }}
        onChange={(e) => handleSearchQuery(e)}
      >
        <option value="">Filtrar por região</option>
        {regions.map((region, index) => (
          <option key={index} value={region}>
            {region}
          </option>
        ))}
      </Select>
    </Flex>
  );
};
