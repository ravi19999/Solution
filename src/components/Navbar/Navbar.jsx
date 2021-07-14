import React from "react";
import NavbarSecondary from "./NavbarSecondary/NavbarSecondary";
import "./_navbar.scss";
import instagram from "./instagram.png";

const Navbar = () => {
  return (
    <section className="navbar">
      <NavbarSecondary />
      <div className="nav container">
        <ul className="navbar__ul">
          <img src={instagram} alt="" className="navbar__img" />
          <li className="navbar__ul__li">HOME</li>
          <li className="navbar__ul__li">ABOUT</li>
          <li className="navbar__ul__li">SERVICES</li>
          <li className="navbar__ul__li">WEB GALLERY</li>
          <li className="navbar__ul__li">CONTACT</li>
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
