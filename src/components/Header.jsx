import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav className="navbar  navbar-expand-lg bg-primary">
        <div className="container  justify-content-center align-items-center">
          {/* Added container for content */}
          <button
            className="navbar-toggler bg-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={toggleMenu} // Added onClick to toggle the menu
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`} // Conditional class for mobile menu
            id="navbarNav"
          >
            <ul
              className="navbar-nav text-white 
            
            container  justify-content-center
            align-items-center"
            >
              <li className="nav-item">
                <Link className="nav-link text-white" to="/">
                  Authorised
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/unauthorised">
                  Unauthorised
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/AfterMarket">
                  After Market
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/towling">
                  Towling
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/service">
                  EV Service Center
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
