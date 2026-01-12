import { NavLink } from "react-router-dom";
import { FaTooth } from "react-icons/fa";
import "../components/css/Navbar.css";

function Navbar({ isLoggedIn }) {
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

          <NavLink to="/my-appointments" className="nav-link">
            My Appointments
          </NavLink>

          <NavLink to="/contact" className="nav-link">
            Contact Us
          </NavLink>

          {isLoggedIn ? (
            <NavLink to="/profile" className="nav-btn">
              Profile
            </NavLink>
          ) : (
            <NavLink to="/login" className="nav-btn">
              Login
            </NavLink>
          )}
        </nav>

      </div>
    </header>
  );
}

export default Navbar;
