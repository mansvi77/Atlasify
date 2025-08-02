// src/components/Layout/CountryCard.jsx
import React from "react";
import { NavLink } from "react-router-dom";

export const CountryCard = ({ country }) => {
  const { flags, name, population, region, capital } = country;

  return (
    <li
      className="country-card card"
      style={{
        listStyle: "none",
        width: "250px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "1rem",
        backgroundColor: "#fff",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      <img
        src={flags?.svg}
        alt={flags?.alt || `Flag of ${name?.common}`}
        style={{ width: "100%", height: "140px", objectFit: "cover", borderRadius: "6px" }}
      />

      <div className="countryInfo" style={{ marginTop: "1rem" }}>
        <p style={{ fontWeight: "700", fontSize: "1.1rem", marginBottom: "0.5rem" }}>
          {name?.common.length > 15 ? name.common.slice(0, 15) + "..." : name?.common}
        </p>
        <p>
          <strong>Region:</strong> {region}
        </p>
        <p>
          <strong>Capital:</strong> {Array.isArray(capital) ? capital[0] : "N/A"}
        </p>
        <p>
          <strong>Population:</strong> {population?.toLocaleString()}
        </p>

        {/* Circular Know More Button */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
          <NavLink to={`/country/${encodeURIComponent(name.common)}`} style={{ textDecoration: "none" }}>
            <button
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                border: "none",
                backgroundColor: "#1976d2",
                color: "#ffffff",
                fontSize: "1.5rem",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                transition: "background-color 0.3s ease",
              }}
              title={`Know more about ${name.common}`}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#115293")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1976d2")}
            >
              &#8594;
            </button>
          </NavLink>
        </div>
        <p style={{ textAlign: "center", marginTop: "0.4rem", fontWeight: "500", color: "#333" }}>
          Know More
        </p>
      </div>
    </li>
  );
};


