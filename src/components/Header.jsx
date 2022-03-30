import React from "react";
import "../styles/Header.scss";

import logo from "../assets/logos/logo_yard_sale.svg";
import iconMenu from "../assets/icons/icon_menu.svg";
import iconShoppingCart from "../assets/icons/icon_shopping_cart.svg";

const Header = () => {
  return (
    <nav>
      <img src={iconMenu} alt="menu" className="menu" />
      <div className="navbar-left">
        <img src={logo} alt="logo" className="logo-navbar" />
        <ul>
          <li>
            <a href="">All</a>
          </li>
          <li>
            <a href="">Clothes</a>
          </li>
          <li>
            <a href="">Electronics</a>
          </li>
          <li>
            <a href="">Furniture</a>
          </li>
          <li>
            <a href="">Toys</a>
          </li>
          <li>
            <a href="">Others</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email">example@email.com</li>
          <li className="navbar-shopping-cart">
            <img src={iconShoppingCart} alt="icon shopping cart" />
            <div>2</div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export { Header };
