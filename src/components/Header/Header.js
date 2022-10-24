import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from "../../img/icons/Search.svg";
import LogoIcon from "../../img/icons/logo.svg";
import CartIcon from "../../img/icons/Shopping--cart.svg";
import UserIcon from "../../img/icons/User--avatar.svg";


function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo-container">
          <img src={SearchIcon} alt="SearchIcon" />
          <Link to="/">
            <img src={LogoIcon} alt="LogoIcon" />
          </Link>
          <ul className="header__icons-container">
            <li className="header__icons-list">
              <Link to="/basket">
                <img src={CartIcon} alt="CartIcon" />
              </Link>
            </li>
            <li className="header__icons-list">
              <img src={UserIcon} alt="UserIcon" />
            </li>
          </ul>
        </div>
        <div className="header__border-line" />
        <nav className="header__nav">
          <a href="#" className="header__nav-link">
            Plant pots
          </a>
          <a href="#" className="header__nav-link">
            Ceramics
          </a>
          <a href="#" className="header__nav-link">
            Tables
          </a>
          <a href="#" className="header__nav-link">
            Chairs
          </a>
          <a href="#" className="header__nav-link">
            Crockery
          </a>
          <a href="#" className="header__nav-link">
            Tableware
          </a>
          <a href="#" className="header__nav-link">
            Cutlery
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
