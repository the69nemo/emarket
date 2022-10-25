import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";


function ProductCard({ title, alt, src, prise, }) {
  return (
    <Link to="/product" className="card__link">
      <div className="card">
        <img className="card__img" src={src} alt={alt} />
        <h3 className="card__title">{title}</h3>
        <span className="card__price">{`£${prise}`}</span>
      </div>
    </Link>
  );
}

export default ProductCard;
