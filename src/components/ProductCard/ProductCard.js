import React from "react";
import "./ProductCard.css";
import One from "../../img/images/listings-img/1.jpg";

function ProductCard() {
  return (
    <div className="card">
      <img className="card__img" src={One} alt="img" />
      <h3 className="card__title">The Dandy chair</h3>
      <span className="card__price">£250</span>
    </div>
  );
}

export default ProductCard;
