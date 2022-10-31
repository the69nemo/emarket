import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from "../../img/icons/Search.svg";
import LogoIcon from "../../img/icons/logo.svg";
import CartIcon from "../../img/icons/Shopping--cart.svg";
import UserIcon from "../../img/icons/User--avatar.svg";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import SearchBox from "../SearchBox/SearchBox";

function Header({ handleOpenPopup }) {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const handleBurgerMenuOpen = () => setIsBurgerMenuOpen(!isBurgerMenuOpen);

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__top">
          <div className="header__logo-container">
            <div className="header__search" >
              <SearchBox />
            </div>
            <Link to="/" className="header__logo">
              <img src={LogoIcon} alt="LogoIcon" />
            </Link>
            <ul className="header__icons-container">
              <li className="header__icons-list">
                <Link to="/basket">
                  <img src={CartIcon} alt="CartIcon" />
                </Link>
              </li>
              <li className="header__icons-list">
                <button type='button' className="header__popup-btn" onClick={handleOpenPopup}/>
              </li>
            </ul>
            <button type="button" className="header__burger-btn" onClick={handleBurgerMenuOpen} />
          </div>
        </div>
        <div className="header__bottom">
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
      </div>
      <BurgerMenu
        isBurgerMenuOpen = {isBurgerMenuOpen}
        handleBurgerMenuOpen = {handleBurgerMenuOpen}
      />
    </header>
  );
}

export default Header;
