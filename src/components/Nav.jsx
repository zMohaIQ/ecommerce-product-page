/* eslint-disable no-unused-vars */
import { useState, useContext } from "react";
import { CartContext } from "../CartContext";
import nav from "./nav.module.scss";
import logo from "../images/logo.svg";
import avatar from "../images/image-avatar.png";
import productIcon from "../images/icon-cart.svg";
import menu from "../images/icon-menu.svg";
import closeMenu from "../images/icon-close.svg";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartOpen, toggleCart } = useContext(CartContext);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={nav.container}>
      <div className={nav.left}>
        <img
          src={menuOpen ? closeMenu : menu}
          alt="Menu"
          className={nav.menu}
          onClick={toggleMenu}
        />
        <img src={logo} alt="Logo" />
        <ul>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className={nav.right}>
        <img src={productIcon} alt="productIcon" className={nav.icon} onClick={toggleCart} />
        <img src={avatar} alt="Avatar" className={nav.avatar} />
      </div>
    </nav>
  );
};

export default Nav;
