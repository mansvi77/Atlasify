 import axios from "axios";

const BASE_URL = "https://restcountries.com/v3.1";

// Fetch all countries
export const getAllCountriesData = () => {
  return axios.get(`${BASE_URL}/all?fields=name,population,region,capital,flags`);
};

// Fetch country by name
export const getCountryDataByName = (countryName) => {
  return axios.get(`${BASE_URL}/name/${encodeURIComponent(countryName)}?fields=name,population,region,capital,flags`);
};

// Fetch countries by region
export const getCountriesByRegion = (region) => {
  return axios.get(`${BASE_URL}/region/${encodeURIComponent(region)}?fields=name,population,region,capital,flags`);
};

