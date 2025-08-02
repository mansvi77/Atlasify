 import React, { useEffect, useState, useTransition } from "react";
import { motion } from "framer-motion";
import { getAllCountriesData } from "../api/postApi";
// If your CountryCard has named export { CountryCard }, use braces:
import { CountryCard } from "../components/Layout/CountryCard";
// If CountryCard has default export, change above line to:
// import CountryCard from "../components/Layout/CountryCard";

export const Country = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [isPending, startTransition] = useTransition();

  // Animation variants for parent ul container and children li items
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.11 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 32 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 16, stiffness: 180 },
    },
  };

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
    return (
      <h1 style={{ textAlign: "center", marginTop: "2rem" }}>Loading...</h1>
    );

  if (error)
    return (
      <h1 style={{ textAlign: "center", marginTop: "2rem", color: "red" }}>
        {error}
      </h1>
    );

  return (
    <section
      className="country-section"
      style={{ padding: "1rem" }}
      aria-live="polite"
      aria-busy={isPending}
    >
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
        {countries.map((country) => (
          <motion.li
            key={country.cca3 || country.name.common}
            variants={itemVariants}
            style={{ width: "250px", listStyle: "none" }}
          >
            <CountryCard country={country} />
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};

export default Country;
