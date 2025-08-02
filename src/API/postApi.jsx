 import axios from "axios";

const BASE_URL = "https://restcountries.com/v3.1";

// Fetch all countries (basic fields)
export const getAllCountriesData = () => {
  return axios.get(
    `${BASE_URL}/all?fields=name,population,region,capital,flags,cca3`
  );
};

// Fetch country by name (full text match) with detailed fields
export const getCountryIndData = (name) => {
  return axios.get(
    `${BASE_URL}/name/${encodeURIComponent(name)}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags,area,timezones,latlng,maps,demonyms,cioc,fifa,status,startOfWeek,continents`
  );
};
