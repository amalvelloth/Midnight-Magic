import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/MIDNIGHT MAGIC LOGO-01-min.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { HiOutlineX } from "react-icons/hi";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg align-items-start fixed-top ${
        isMenuOpen ? "is-open" : ""
      }`}
    >
      <div className="container-fluid px-md-5 px-sm-5">
        <a className="navbar-brand" href="#home">
          <img className="px-1" style={{ width: "80px" }} src={logo} alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          style={{ border: "none", outline: "none" }}
        >
          {isMenuOpen ? (
            <HiOutlineX className="navbar-icon" />
          ) : (
            <HiOutlineMenuAlt3 className="navbar-icon" />
          )}
        </button>
        <div
          className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul
            className={`navbar-nav ms-auto justify-content-center ${
              isMenuOpen ? "nav-open" : ""
            }`}
          >
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={() => scrollToSection("home")}
              >
                <span>Home</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#about"
                onClick={() => scrollToSection("about")}
              >
                <span>About</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#contact"
                onClick={() => scrollToSection("contact")}
              >
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
