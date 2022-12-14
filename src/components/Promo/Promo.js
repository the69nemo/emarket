import React from "react";
import "./Promo.css";
import "../../blocks/link-view/link-view.css";
import PromoImg from "../../img/images/promo-img.jpg";
import LinkView from "../../blocks/link-view/link-view";

function Promo() {
  return (
    <div className="promo">
      <div className="promo__container">
        <div className="promo__text-container">
          <div className="promo__text-wrapper">
            <h2 className="promo__text-title">It started with a small idea</h2>
            <p className="promo__text-subtitle">
              A global brand with local beginnings, our story begain in a small
              studio in South London in early 2014
            </p>
          </div>
          <LinkView type="type_promo" text="View collection" />
        </div>
        <img className="promo__img" src={PromoImg} alt="image" />
      </div>
    </div>
  );
}

export default Promo;
