import { api } from "./api";

export const getAllCountries = async (setData) => {
  await genericGet("all/", setData);
};

export const getSpecificCountryByName = async (countryName, setData) => {
  await genericGet(`name/${countryName}`, setData);
};

const genericGet = async (query, setData) => {
  const response = await api.get(query);

  setData(response.data);
  return;
};
