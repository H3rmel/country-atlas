import { useEffect, useState } from "react";

import { MainLayout } from "@/layouts/MainLayout";

import { LoaderIf } from "@/components";

import { Center, useToast } from "@chakra-ui/react";

import { useParams } from "react-router-dom";

import { getSpecificCountryByName } from "@/services/countries";

export const Country = () => {
  const [country, setCountry] = useState({});
  const [loading, setLoading] = useState(true);

  const { name } = useParams();

  const toast = useToast();

  useEffect(() => {
    getCountry();
  }, []);

  const getCountry = async () => {
    try {
      getSpecificCountryByName(name, setCountry);
      setLoading(false);
    } catch (error) {
      toast({
        title: "Erro",
        description: error,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <MainLayout pageTitle={name}>
      <LoaderIf condition={loading}>
        {country.ccn3}
        <Center w="50%">
          {/* <Image
            src={country.flags.svg}
            boxSize={256}
            alt={country.flags.alt}
          /> */}
        </Center>
        <Center w="50%">{country.startOfWeek}</Center>
      </LoaderIf>
      {/* <LoaderIf condition={loading}>
        <Center w="50%">
          <Image
            src={country.flags.svg}
            boxSize={256}
            alt={country.flags.alt}
          />
        </Center>
        <Center w="50%"></Center>
      </LoaderIf> */}
    </MainLayout>
  );
};
