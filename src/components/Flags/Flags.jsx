import "./Flags.css";
import { Link } from "react-router-dom";

const Flags = ({ data, q, filterParm }) => {
  console.log("Data: ", data);
  console.log("Search query: ", q);

  const filteredData = data.filter((country) => {
    const lowerCasedSearch = q.toLowerCase();
    const nameMatch = country.name.common
      .toLowerCase()
      .includes(lowerCasedSearch);

    const regionMatch =
      filterParm === "All" ||
      (typeof filterParm === "string" &&
        country.region.toLowerCase() === filterParm.toLowerCase());

    return nameMatch && regionMatch;
  });

  const limitedData = filteredData.slice(0, 96);

  return (
    <div className="flags_container">
      {limitedData.map((country, index) => (
        <Link key={index} to={`/country/${country.cca2}`} className="link">
          <div key={index} className="flag_card">
            <div className="img_flag_container">
              <img src={country.flags.png} alt={country.name.common} />
            </div>
            <div className="country_data_container">
              <h1>{country.name.common}</h1>
              <p>
                Population: <span>{country.population}</span>
              </p>
              <p>
                Region: <span>{country.region}</span>
              </p>
              <p>
                Capital: <span>{country.capital}</span>
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Flags;
