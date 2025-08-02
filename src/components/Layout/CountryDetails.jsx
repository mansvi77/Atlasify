import React, { useEffect, useState, useTransition } from "react";
import { useParams, NavLink } from "react-router-dom";
import { getCountryIndData } from "../../api/postApi";
import { SearchFilter } from "../Layout/UI/SearchFilter";

export const CountryDetails = () => {
  const { id } = useParams();
  const [country, setCountry] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, startTransition] = useTransition();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    if (!id) return;

    startTransition(() => {
      getCountryIndData(decodeURIComponent(id))
        .then((res) => {
          if (res.status === 200 && Array.isArray(res.data) && res.data.length > 0) {
            setCountry(res.data[0]);
            setError(null);
          } else {
            setCountry(null);
            setError(`No country data found for "${id}"`);
          }
        })
        .catch((err) => {
          setCountry(null);
          setError("Failed to fetch country data");
          console.error(err);
        });
    });
  }, [id]);

  if (isPending) return <div>Loading...</div>;

  if (error)
    return (
      <div style={{ color: "red", padding: "2rem", textAlign: "center" }}>
        {error}
      </div>
    );

  if (!country)
    return (
      <div style={{ padding: "2rem", color: "#555", textAlign: "center" }}>
        No data loaded yet for this country.
      </div>
    );

  // Destructure all country fields safely
  const {
    flags = {},
    name = {},
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    borders,
    area,
    timezones,
    latlng,
    maps,
    demonyms,
    cioc,
    fifa,
    status,
    startOfWeek,
    continents,
  } = country;

  const nativeNames =
    name.nativeName && typeof name.nativeName === "object"
      ? Object.values(name.nativeName).filter(n => n?.common).map(n => n.common).join(", ")
      : "N/A";

  const currencyStr =
    currencies && typeof currencies === "object"
      ? Object.values(currencies).filter(c => c?.name).map(c => `${c.name} (${c.symbol || ""})`.trim()).join(", ")
      : "N/A";

  const languageStr =
    languages && typeof languages === "object"
      ? Object.values(languages).join(", ")
      : "N/A";

  const borderStr = Array.isArray(borders) && borders.length > 0 ? borders.join(", ") : "N/A";

  const demonymStr = demonyms && demonyms.eng ? `${demonyms.eng.m} (m), ${demonyms.eng.f} (f)` : "N/A";

  const timezoneStr = timezones && timezones.length ? timezones.join(", ") : "N/A";

  const continentStr = continents && continents.length ? continents.join(", ") : "N/A";

  const [lat, lng] = Array.isArray(latlng) && latlng.length === 2 ? latlng : [null, null];

  return (
    <section className="country-section" style={{ padding: "1rem" }}>
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
      />

      <div
        className="container-card bg-white-box"
        style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}
      >
        {/* Flag Section */}
        <div
          className="country-image"
          style={{
            flex: "0 0 40%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minWidth: "280px",
          }}
        >
          <img
            src={flags.svg || ""}
            alt={flags.alt || `Flag of ${name.common || ""}`}
            className="flag"
            style={{
              width: "100%",
              maxWidth: "300px",
              borderRadius: "8px",
              boxShadow: "0 0 12px rgba(0,0,0,0.15)",
            }}
          />
        </div>

        {/* Details Section */}
        <div
          className="country-content"
          style={{ flex: "1", display: "flex", flexDirection: "column", wordBreak: "break-word" }}
        >
          <h2 className="card-title" style={{ marginBottom: "1rem" }}>
            {name.official || "N/A"}
          </h2>

          <div
            className="infoContainer"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.8rem",
              fontSize: "1rem",
              color: "#333",
            }}
          >
            <p><span style={{ fontWeight: "600" }}>Native Names:</span> {nativeNames}</p>
            <p><span style={{ fontWeight: "600" }}>Languages:</span> {languageStr}</p>
            <p><span style={{ fontWeight: "600" }}>Population:</span> {population ? population.toLocaleString() : "N/A"}</p>
            <p><span style={{ fontWeight: "600" }}>Region:</span> {region || "N/A"}</p>
            <p><span style={{ fontWeight: "600" }}>Subregion:</span> {subregion || "N/A"}</p>
            <p><span style={{ fontWeight: "600" }}>Capital:</span> {Array.isArray(capital) && capital.length ? capital.join(", ") : "N/A"}</p>
            <p><span style={{ fontWeight: "600" }}>Top Level Domain:</span> {Array.isArray(tld) && tld.length ? tld.join(", ") : "N/A"}</p>
            <p><span style={{ fontWeight: "600" }}>Currencies:</span> {currencyStr}</p>
            <p><span style={{ fontWeight: "600" }}>Border Countries:</span> {borderStr}</p>
            <p><span style={{ fontWeight: "600" }}>Area:</span> {area ? `${area.toLocaleString()} km²` : "N/A"}</p>
            <p><span style={{ fontWeight: "600" }}>Timezones:</span> {timezoneStr}</p>
            <p><span style={{ fontWeight: "600" }}>Demonyms:</span> {demonymStr}</p>
            <p><span style={{ fontWeight: "600" }}>IOC Code:</span> {cioc || "N/A"}</p>
            <p><span style={{ fontWeight: "600" }}>FIFA Code:</span> {fifa || "N/A"}</p>
            <p><span style={{ fontWeight: "600" }}>Status:</span> {status || "N/A"}</p>
            <p><span style={{ fontWeight: "600" }}>Start Of Week:</span> {startOfWeek || "N/A"}</p>
            <p><span style={{ fontWeight: "600" }}>Continents:</span> {continentStr}</p>
            {lat !== null && lng !== null && (
              <p><span style={{ fontWeight: "600" }}>Coordinates:</span> {lat.toFixed(2)}, {lng.toFixed(2)}</p>
            )}
            {maps?.googleMaps && (
              <p>
                <a href={maps.googleMaps} target="_blank" rel="noopener noreferrer">
                  View on Google Maps
                </a>
              </p>
            )}

            <div className="country-card-backBin">
              <NavLink to="/country" className="backBtn">
                <button>Go Back</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


