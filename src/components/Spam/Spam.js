import React from "react";
import "./Spam.css";
import "../../blocks/input-email/input-email.css";
import CheckMarkIcon from "../../img/icons/Checkmark--filled.svg";
import InputEmail from "../../blocks/input-email/input-email";

function Spam({ type }) {
  return type === "home" ? (
    <div className="spam">
      <div className="spam__container">
        <h2 className="spam__title">Join the club and get the benefits</h2>
        <p className="spam__subtitle">
          Sign up for our newsletter and receive exclusive offers on new ranges,
          sales, pop up stores and more
        </p>
        <ul className="spam__icon-list">
          <li className="spam__icon-wrapper">
            <img src={CheckMarkIcon} alt="check" className="spam__icon" />
            <span className="spam__icon-text">Exclusive offers</span>
          </li>
          <li className="spam__icon-wrapper">
            <img src={CheckMarkIcon} alt="check" className="spam__icon" />
            <span className="spam__icon-text">Free events</span>
          </li>
          <li className="spam__icon-wrapper">
            <img src={CheckMarkIcon} alt="check" className="spam__icon" />
            <span className="spam__icon-text">Large discounts</span>
          </li>
        </ul>
        <InputEmail />
      </div>
    </div>
  ) : (
    <div className="spam spam__type_aboutUs">
      <div className="spam__container spam__container_type_aboutUs">
        <div className="spam__text-wrapper">
          <h2 className="spam__title spam__title_type_aboutUs">Join the club and get the benefits</h2>
          <p className="spam__subtitle spam__subtitle_type_aboutUs">
            Sign up for our newsletter and receive exclusive offers on new
            ranges, sales, pop up stores and more
          </p>
        </div>
        <div className="spam__input-wrapper">
          <InputEmail type = 'aboutUs' />
        </div>
      </div>
    </div>
  );
}

export default Spam;
