// App.js
import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";
import Flags from "./components/Flags/Flags";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CountryDetail from "./components/CountryDetail/CountryDetail";

function App() {
  const [data, setData] = useState([]);
  const [q, setQ] = useState("");
  const [filterParm, setFilterParam] = useState(["All"]);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <div className={`App ${darkMode ? "dark-mode" : "light-mode"}`}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Search
          q={q}
          setQ={setQ}
          filterParm={filterParm}
          setFilterParam={setFilterParam}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <div className="flag">
          <Routes>
            <Route
              path="/country/:countryCode"
              element={<CountryDetail data={data} darkMode={darkMode} />}
            />
            <Route
              path="/"
              element={
                <Flags
                  data={data}
                  q={q}
                  filterParm={filterParm}
                  setFilterParam={setFilterParam}
                  darkMode={darkMode}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
