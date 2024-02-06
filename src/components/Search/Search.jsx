import "./Search.css";

const Search = ({ q, setQ, filterParm, setFilterParam }) => {
  return (
    <div className="research_container">
      <div className="search_container">
        <input
          type="search"
          placeholder=" 🔍Search for a country..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
      </div>
      <div className="filter_container">
        <select
          name="Filter by region"
          id=""
          onChange={(e) => {
            setFilterParam(e.target.value);
          }}
        >
          <option value="All">Filter by region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};

export default Search;
