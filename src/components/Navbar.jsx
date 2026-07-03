import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <nav className="navbar">

      <div className="logo">
        Atso's Beauty
      </div>


      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >

        {menuOpen ? <FaTimes /> : <FaBars />}

      </div>


      <div className={menuOpen ? "links active" : "links"}>

        <NavLink
          to="/"
          onClick={() => setMenuOpen(false)}
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          onClick={() => setMenuOpen(false)}
        >
          About
        </NavLink>

        <NavLink
          to="/services"
          onClick={() => setMenuOpen(false)}
        >
          Services
        </NavLink>

        <NavLink
          to="/gallery"
          onClick={() => setMenuOpen(false)}
        >
          Gallery
        </NavLink>

        <NavLink
          to="/contact"
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </NavLink>

      </div>

    </nav>

  );
}

export default Navbar;