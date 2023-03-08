import { useState } from "react";

import {
  Flex, Input,
  InputGroup,
  InputLeftElement, Select
} from "@chakra-ui/react";

import { MagnifyingGlass } from "phosphor-react";

import { regions } from "@/config/regions.json";

export const CountryForm = ({countries}) => {
  const [searchQuery, setSearchQuery] = useState({
    name: "",
    region: "",
  });

  const handleFilter = () => {
    const 
  }

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
          value={searchQuery.name}
          onChange={(e) =>
            setSearchQuery({ ...searchQuery, name: e.target.value })
          }
        />
      </InputGroup>
      <Select
        placeholder="Filtrar por região"
        size="lg"
        value={searchQuery.region}
        flexBasis={{ base: "40%", md: "25%" }}
        onChange={(e) =>
          setSearchQuery({ ...searchQuery, region: e.target.value })
        }
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
