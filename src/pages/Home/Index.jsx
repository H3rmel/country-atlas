import { useEffect, useState } from "react";

import { MainLayout } from "@/layouts/MainLayout";

import { CountryForm, CountryList, LoaderIf } from "@/components";

import { useToast } from "@chakra-ui/react";

import { getAllCountries } from "@/services/countries";

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
        <CountryForm />
        <CountryList countries={countries} />
      </LoaderIf>
    </MainLayout>
  );
};
