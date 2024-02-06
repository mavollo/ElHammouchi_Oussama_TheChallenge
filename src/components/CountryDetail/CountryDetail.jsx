import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./CountryDetail.css";

const CountryDetail = ({ data, darkMode }) => {
  const { countryCode } = useParams();

  // Find the country data based on the country code
  const country = data.find((c) => c.cca2 === countryCode);

  if (!country) {
    // Handle case where country is not found
    return <div>Loading...</div>;
  }

  const currencies = Object.values(country.currencies)
    .map((currency) => currency.name)
    .join(", ");
  const languages = Object.values(country.languages).join(", ");
  const textStyles = {
    color: darkMode ? "hsl(0, 0%, 100%)" : "hsl(209, 23%, 22%)",
  };
  return (
    <div className="flag_container">
      <div className="back_button">
        <Link to={"/"}>
          <button>Back</button>
        </Link>
      </div>
      <div className="img_flag">
        <img src={country.flags.png} alt="" />
      </div>
      <div className="card_flag">
        <div className="data_container" style={textStyles}>
          <h1>{country.name.common}</h1>
          <p>Population: {country.population}</p>
          <p>Region: {country.region}</p>
          <p>Sub Region: {country.subregion}</p>
          <p>Capital: {country.capital}</p>
          <p>Top Level Domain: {country.tld}</p>
          <p>Currencies: {currencies}</p>
          <p>Languages: {languages}</p>
          <p>
            {country.borders && country.borders.length > 0 ? (
              <>
                Border Countries:
                {country.borders.map((borderCode) => {
                  const borderCountry = data.find((c) => c.cca3 === borderCode);
                  return (
                    <Link
                      to={`/country/${borderCountry.cca2}`}
                      key={borderCode}
                      className="link_border"
                    >
                      {borderCountry.name.common}
                    </Link>
                  );
                })}
              </>
            ) : (
              "Border Countries: No bordering countries"
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
