import { api } from "./api";

export const getAllCountries = async (setData) => {
  await genericGet("all/", setData, false);
};

export const getSpecificCountryByCode = async (countryCode, setData) => {
  await genericGet(`alpha/${countryCode}/`, setData, true);
};

const genericGet = async (query, setData, isObject) => {
  const response = await api.get(query);

  if (isObject) setData(response.data[0]);
  else setData(response.data);

  return;
};
