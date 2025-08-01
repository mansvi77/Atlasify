  import React from "react";

export const CountryCard = ({ country }) => {
  // Corrected typo: property is 'population' not 'populations'
  const { flags, name, population, region, capital } = country;

  return (
    <li className="country-card card">
      <div className="container-card bg-white-box">
        <img
          src={flags?.svg}
          alt={flags?.alt || `Flag of ${name?.common}`}
          width={100}
        />

        <div className="countryInfo">
          <p className="card-title">
            {name?.common.length > 10
              ? name.common.slice(0, 10) + "..."
              : name?.common}
          </p>
          <p>
            <span className="card-description">Region: </span>
            {region}
          </p>
          <p>
            <span className="card-description">Capital: </span>
            {Array.isArray(capital) && capital.length > 0 ? capital[0] : "N/A"}
          </p>
          <p>
            <span className="card-description">Population: </span>
            {population?.toLocaleString()}
          </p>
        </div>
      </div>
    </li>
  );
};

export default CountryCard;
