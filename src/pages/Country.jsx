import { useEffect, useState } from "react";

import { MainLayout } from "@/layouts/MainLayout";

import { LoaderIf } from "@/components";

import { Center } from "@chakra-ui/react";

import { useParams } from "react-router-dom";

import { getSpecificCountryByCode } from "@/services/countries";

export const Country = () => {
  const [country, setCountry] = useState([]);

  const { code } = useParams();

  useEffect(() => {
    getSpecificCountryByCode(code, setCountry);
  }, []);

  return (
    <MainLayout pageTitle="DISGRAÇA">
      <LoaderIf condition={country === null}>
        <Center w="50%">
          <Image src={country.flags.svg} alt={country.flags.alt} />
        </Center>
        <Center w="50%"></Center>
      </LoaderIf>
    </MainLayout>
  );
};
