import { NavLink } from "react-router-dom";
import { FaTooth } from "react-icons/fa";
import "./css/Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <NavLink to="/" end className="navbar-logo">
          <FaTooth className="logo-icon" />
          <span>Abo Hourani</span>
        </NavLink>

        <nav className="navbar-links">
          <NavLink to="/" end className="nav-link">
            Home
          </NavLink>

          <NavLink to="/appointments" className="nav-link">
            Appointments
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
