import React from "react";
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
          <img src={LogoIcon} alt="LogoIcon" />
          <ul className="header__icons-container">
            <li className="header__icons-list">
              <img src={CartIcon} alt="CartIcon" />
            </li>
            <li className="header__icons-list">
              <img src={UserIcon} alt="UserIcon" />
            </li>
          </ul>
        </div>
        <div className="header__border-line" />
        <nav className="header__nav">
          <li className="header__nav-list">Plant pots</li>
          <li className="header__nav-list">Ceramics</li>
          <li className="header__nav-list">Tables</li>
          <li className="header__nav-list">Chairs</li>
          <li className="header__nav-list">Crockery</li>
          <li className="header__nav-list">Tableware</li>
          <li className="header__nav-list">Cutlery</li>
        </nav>
      </div>
    </header>
  );
}

export default Header;
