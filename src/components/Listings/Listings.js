import React from "react";
import "./Listings.css";
import "../../blocks/link-view/link-view.css";
import One from "../../img/images/listings-img/1.jpg";
import Two from "../../img/images/listings-img/2.jpg";
import Three from "../../img/images/listings-img/3.jpg";
import Four from "../../img/images/listings-img/4.jpg";

function Listings() {
  return (
    <div className="listings">
      <div className="listings__container">
        <div className="listings__card-wrapper">
          <div className="listings__card">
            <img className="listings__card-img" src={One} alt="img" />
            <h3 className="listings__card-title">The Dandy chair</h3>
            <span className="listings__card-price">£250</span>
          </div>
          <div className="listings__card">
            <img className="listings__card-img" src={Two} alt="img" />
            <h3 className="listings__card-title">Rustic Vase Set</h3>
            <span className="listings__card-price">£155</span>
          </div>
          <div className="listings__card">
            <img className="listings__card-img" src={Three} alt="img" />
            <h3 className="listings__card-title">The Silky Vase</h3>
            <span className="listings__card-price">£125</span>
          </div>
          <div className="listings__card">
            <img className="listings__card-img" src={Four} alt="img" />
            <h3 className="listings__card-title">The Lucy Lamp</h3>
            <span className="listings__card-price">£399</span>
          </div>
        </div>
        <a className="link-view" href="#">
          View collection
        </a>
      </div>
    </div>
  );
}

export default Listings;
