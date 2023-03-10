import { useEffect, useState } from "react";

import { MainLayout } from "@/layouts/MainLayout";

import { CountryInfo, LoaderIf } from "@/components";

import { Button, Flex, Image, useToast } from "@chakra-ui/react";

import { useNavigate, useParams } from "react-router-dom";

import { getSpecificCountryByName } from "@/services/countries";

import { ArrowLeft } from "phosphor-react";

export const Country = () => {
  const [country, setCountry] = useState({});
  const [loading, setLoading] = useState(true);

  const { name } = useParams();
  const navigate = useNavigate();

  const toast = useToast();

  useEffect(() => {
    getCountry();
  }, []);

  const getCountry = async () => {
    try {
      await getSpecificCountryByName(name, setCountry);
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

  const handleReturn = () => navigate("/", { replace: true });

  return (
    <MainLayout pageTitle={name}>
      <LoaderIf condition={loading}>
        <Button onClick={handleReturn}>
          <ArrowLeft size={20} /> Voltar
        </Button>
        <Flex
          w="full"
          flexDirection={{ base: "column", "2xl": "row" }}
          justifyContent="space-between"
          alignItems={{
            base: "flex-start",
            md: "center",
            lg: "flex-start",
            xl: "center",
          }}
          mt={{ base: 4, md: 16 }}
        >
          <Image
            src={country?.flags?.svg}
            alt={country?.flags?.alt}
            w={{ lg: "100%", xl: "2xl" }}
            borderRadius="2xl"
          />
          <CountryInfo country={country} />
        </Flex>
      </LoaderIf>
    </MainLayout>
  );
};
