import React from "react";
import "./Features.css";
import DeliveryIcon from '../../img/icons/Delivery.svg';
import CheckIcon from '../../img/icons/Checkmark.svg';
import PurchaseIcon from '../../img/icons/Purchase.svg';
import SproutIcon from '../../img/icons/Sprout.svg';

function Features() {
  return (
    <div className="features">
      <div className="features__container">
        <h2 className="features__title">What makes our brand different</h2>
        <div className="features__card-wrapper">
          <div className="features__card">
            <img className="features__card-icon" src={DeliveryIcon} alt="card icon"/>
            <h3 className="features__card-title">Next day as standard</h3>
            <p className="features__card-subtitle">Order before 3pm and get your order the next day as standard</p>
          </div>
          <div className="features__card">
            <img className="features__card-icon" src={CheckIcon} alt="card icon"/>
            <h3 className="features__card-title">Made by true artisans</h3>
            <p className="features__card-subtitle">Handmade crafted goods made with real passion and craftmanship</p>
          </div>
          <div className="features__card">
            <img className="features__card-icon" src={PurchaseIcon} alt="card icon"/>
            <h3 className="features__card-title">Unbeatable prices</h3>
            <p className="features__card-subtitle">For our materials and quality you won’t find better prices anywhere</p>
          </div>
          <div className="features__card">
            <img className="features__card-icon" src={SproutIcon} alt="card icon"/>
            <h3 className="features__card-title">Recycled packaging</h3>
            <p className="features__card-subtitle">We use 100% recycled to ensure our footprint is more manageable</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
