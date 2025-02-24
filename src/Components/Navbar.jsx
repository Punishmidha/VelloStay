import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Vello Stay
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
        id="navbarNav"
      >
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/ourStudios" onClick={closeMenu}>
              Our Studios
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/join-our-network"
              onClick={closeMenu}
            >
              Join Our Network
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/support" onClick={closeMenu}>
              Support
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
