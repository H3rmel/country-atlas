import { api } from "./api";

export const getAllCountries = async () => {
  try {
    const response = await api.get("all/");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getSpecificCountryByName = async (name, setData) => {
  try {
    const response = await api.get(`name/${name}`);

    const dataObj = response.data[0];
    setData(dataObj);
  } catch (error) {
    throw error;
  }
};
