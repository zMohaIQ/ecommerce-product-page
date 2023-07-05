/* eslint-disable no-unused-vars */
import { useState } from "react";
import nav from "./nav.scss";
import logo from "../images/logo.svg";
import avatar from "../images/image-avatar.png";
import productIcon from "../images/icon-cart.svg";
import menu from "../images/icon-menu.svg";
import closeMenu from "../images/icon-close.svg";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`container`}>
      <div className="left">
        <img src={menuOpen ? closeMenu : menu} alt="Menu" className="menu" onClick={toggleMenu} />
        <img src={logo} alt="Logo" />
        <ul>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="right">
        <img src={productIcon} alt="productIcon" className="icon" />
        <img src={avatar} alt="Avatar" className="avatar" />
      </div>
    </nav>
  );
};

export default Nav;
