  import React, { useEffect, useState, useTransition } from "react";
import { getAllCountriesData } from "../API/postApi";
import CountryCard from "../components/Layout/CountryCard";

export const Country = () => {
  const [countries, setCountries] = useState([]);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
      getAllCountriesData()
        .then((res) => {
          setCountries(res.data);
        })
        .catch((err) => {
          console.error("Failed to fetch countries:", err);
        });
    });
  }, []);

  if (isPending) return <h1>Loading...</h1>;

  return (
    <section className="country-section">
      <ul className="grid grid-four-cols">
        {countries.map((curCountry) => (
          <CountryCard
            key={curCountry.cca3 || curCountry.name.common}
            country={curCountry}
          />
        ))}
      </ul>
    </section>
  );
};

export default Country;
