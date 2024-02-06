import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className="navbar_container">
      <div className="title_container">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <h1>Where in the world?</h1>
        </Link>
      </div>
      <div className="dark_mode_container" onClick={toggleDarkMode}>
        <i class="fa-solid fa-moon"></i>
        <p>Dark Mode</p>
      </div>
    </div>
  );
};
export default Navbar;
