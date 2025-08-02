import React, { useEffect, useState, useTransition } from "react";
import { motion } from "framer-motion";
import { getAllCountriesData } from "../api/postApi";
import { CountryCard } from "../components/Layout/CountryCard";
import { SearchFilter } from "../components/Layout/UI/SearchFilter";

export const Country = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [isPending, startTransition] = useTransition();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.11 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 32 },
    show: { opacity: 1, y: 0, transition: { type: "spring", damping: 16, stiffness: 180 } },
  };

  // Fetch countries on mount
  useEffect(() => {
    startTransition(() => {
      getAllCountriesData()
        .then((res) => {
          setCountries(res.data);
          setError(null);
        })
        .catch((err) => {
          console.error("Failed to fetch countries:", err);
          setError("Failed to load countries.");
        });
    });
  }, []);

  if (isPending)
    return <h1 style={{ textAlign: "center", marginTop: "2rem" }}>Loading...</h1>;

  if (error)
    return (
      <h1 style={{ textAlign: "center", marginTop: "2rem", color: "red" }}>
        {error}
      </h1>
    );

  // Filter helpers
  const searchCountry = (country) =>
    !search || country.name.common.toLowerCase().includes(search.toLowerCase());

  const filterRegion = (country) => filter === "all" || country.region === filter;

  // Apply all filters
  const filteredCountries = countries.filter(
    (country) => searchCountry(country) && filterRegion(country)
  );

  return (
    <section className="country-section" style={{ padding: "1rem" }} aria-live="polite" aria-busy={isPending}>
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        countries={countries}
        setCountries={setCountries}
      />

      <motion.ul
        className="grid grid-four-cols"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          padding: 0,
          margin: 0,
          listStyle: "none",
        }}
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {filteredCountries.length > 0 ? (
          filteredCountries.map((country) => (
            <motion.li
              key={country.cca3 || country.name.common}
              variants={itemVariants}
              style={{ width: "250px", listStyle: "none" }}
            >
              <CountryCard country={country} />
            </motion.li>
          ))
        ) : (
          <p style={{ width: "100%", textAlign: "center", marginTop: "2rem" }}>
            No countries found.
          </p>
        )}
      </motion.ul>
    </section>
  );
};


