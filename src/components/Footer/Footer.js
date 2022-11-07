import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import "../../blocks/input-email/input-email.css";
import LinkedInIcon from "../../img/icons/in-icon.svg";
import FacebookIcon from "../../img/icons/fa-icon.svg";
import InstagramIcon from "../../img/icons/inst-icon.svg";
import SkypeIcon from "../../img/icons/sky-icon.svg";
import TwitterIcon from "../../img/icons/tvi-icon.svg";
import PinIcon from "../../img/icons/pi-icon.svg";
import InputEmail from "../../blocks/input-email/input-email";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__nav-container">
          <div className="footer__menu">
            <h3 className="footer__title">Menu</h3>
            <ul className="footer__menu-lists">
              <li className="footer__menu-list">
                <Link  to='/nolinks' className="footer__menu-link">New arrivals</Link>
              </li>
              <li className="footer__menu-list">
                <Link  to='/nolinks' className="footer__menu-link">Best sellers</Link>
              </li>
              <li className="footer__menu-list">
                <Link  to='/nolinks' className="footer__menu-link">Recently viewed</Link>
              </li>
              <li className="footer__menu-list">
                <Link  to='/nolinks' className="footer__menu-link">Popular this week</Link>
              </li>
              <li className="footer__menu-list">
                <Link  to='/nolinks' className="footer__menu-link">All products</Link>
              </li>
            </ul>
          </div>
          <div className="footer__menu">
            <h3 className="footer__title">Categories</h3>
            <nav className="footer__nav">
              <Link to='/nolinks'  className="footer__nav-link">Plant pots</Link>
              <Link to='/nolinks'  className="footer__nav-link">Ceramics</Link>
              <Link to='/nolinks'  className="footer__nav-link">Tables</Link>
              <Link to='/nolinks'  className="footer__nav-link">Chairs</Link>
              <Link to='/nolinks'  className="footer__nav-link">Crockery</Link>
              <Link to='/nolinks'  className="footer__nav-link">Tableware</Link>
              <Link to='/nolinks'  className="footer__nav-link">Cutlery</Link>
            </nav>
          </div>
          <div className="footer__menu">
            <h3 className="footer__title">Our company</h3>
            <ul className="footer__menu-lists">
              <li className="footer__menu-list">
                <Link to="/aboutus" className="footer__menu-link">
                  About us
                </Link>
              </li>
              <li className="footer__menu-list">
                <Link  to='/nolinks' className="footer__menu-link">Vacancies</Link>
              </li>
              <li className="footer__menu-list">
                <Link  to='/nolinks' className="footer__menu-link">Contact us</Link>
              </li>
              <li className="footer__menu-list">
                <Link  to='/nolinks' className="footer__menu-link">Privacy</Link>
              </li>
              <li className="footer__menu-list">
                <Link  to='/nolinks' className="footer__menu-link">Returns policy</Link>
              </li>
            </ul>
          </div>
          <div className="footer__input-contaier">
            <InputEmail type="input_footer" title="Join our mailing list" />
          </div>
        </div>
        <div className="footer__borderline" />
        <div className="footer__copyright-container">
          <div className="footer__copyright-wrapper">
            <p className="footer__copyright">Copyright 2022 Avion LTD</p>
          </div>
          <div className="footer__social-icon-wrapper">
            <ul className="footer__social-icon-lists">
              <li className="footer__social-icon-list">
                <Link to='/nolinks' className="footer__social-icon-link">
                  <img
                    src={LinkedInIcon}
                    className="footer__social-icon"
                    alt="social icon"
                  />
                </Link>
              </li>
              <li className="footer__social-icon-list">
                <Link to='/nolinks' className="footer__social-icon-link">
                  <img
                    src={FacebookIcon}
                    className="footer__social-icon"
                    alt="social icon"
                  />
                </Link>
              </li>
              <li className="footer__social-icon-list">
                <Link to='/nolinks' className="footer__social-icon-link">
                  <img
                    src={InstagramIcon}
                    className="footer__social-icon"
                    alt="social icon"
                  />
                </Link>
              </li>
              <li className="footer__social-icon-list">
                <Link to='/nolinks' className="footer__social-icon-link">
                  <img
                    src={SkypeIcon}
                    className="footer__social-icon"
                    alt="social icon"
                  />
                </Link>
              </li>
              <li className="footer__social-icon-list">
                <Link to='/nolinks' className="footer__social-icon-link">
                  <img
                    src={TwitterIcon}
                    className="footer__social-icon"
                    alt="social icon"
                  />
                </Link>
              </li>
              <li className="footer__social-icon-list">
                <Link to='/nolinks' className="footer__social-icon-link">
                  <img
                    src={PinIcon}
                    className="footer__social-icon"
                    alt="social icon"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
