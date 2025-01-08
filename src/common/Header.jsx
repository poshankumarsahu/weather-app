import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="app-header">
      <div className="app-header-content">
        <div className="app-logo">
          <Link to="/">Weather App</Link>
        </div>
        <nav className="app-nav">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
