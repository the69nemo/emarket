import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";


function ProductCard({ title, alt, src, prise, id }) {

  return (
    <Link to={`/product/${id}`} className="card__link">
      <div className="card">
        <img className="card__img" src={src} alt={alt} />
        <h3 className="card__title">{title}</h3>
        <p className="card__price">{`£${prise}`}</p>
      </div>
    </Link>
  );
}

export default ProductCard;
