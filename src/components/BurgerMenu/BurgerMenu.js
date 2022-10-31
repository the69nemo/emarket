import React from "react";
import { Link } from "react-router-dom";
import "./BurgerMenu.css";
import CartIcon from "../../img/icons/Shopping--cart.svg";
import UserIcon from "../../img/icons/User--avatar.svg";

function BurgerMenu({
  isBurgerMenuOpen,
  handleBurgerMenuOpen,
  handleOpenPopup,
}) {
  return (
    <div className={`burgerMenu ${isBurgerMenuOpen && "open"} `}>
      <div className="burgerMenu__container">
        <div className="burgerMenu__top">
          <ul className="burgerMenu__icons-container">
            <li className="burgerMenu__icons-list">
              <Link to="/basket">
                <img src={CartIcon} alt="CartIcon" />
              </Link>
            </li>
            <li className="burgerMenu__icons-list">
              <button
                type="button"
                className="header__popup-btn"
                onClick={handleOpenPopup}
              />
            </li>
          </ul>
          <button
            type="button"
            className="burgerMenu__btn-close"
            onClick={handleBurgerMenuOpen}
          />
        </div>
        <div className="burgerMenu__bottom">
          <nav className="burgerMenu__nav">
            <a href="#" className="burgerMenu__nav-link">
              Plant pots
            </a>
            <a href="#" className="burgerMenu__nav-link">
              Ceramics
            </a>
            <a href="#" className="burgerMenu__nav-link">
              Tables
            </a>
            <a href="#" className="burgerMenu__nav-link">
              Chairs
            </a>
            <a href="#" className="burgerMenu__nav-link">
              Crockery
            </a>
            <a href="#" className="burgerMenu__nav-link">
              Tableware
            </a>
            <a href="#" className="burgerMenu__nav-link">
              Cutlery
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default BurgerMenu;
