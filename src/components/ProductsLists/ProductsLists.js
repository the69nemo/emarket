import React from "react";
import "./ProductsLists.css";
import ProductCard from "../ProductCard/ProductCard";
import data from "../../data/data.json";

function ProductsLists() {
  const cards = data.map((card) => (
    <ProductCard
      key={card.id}
      title={card.name}
      alt={card.name}
      src={card.img}
      prise={card.prise}
    />
  ));

  return (
    <div className="productsLists">
      <div className="productsLists__container">
        {cards}
      </div>
      <div className="productsLists__button-wrapper">
        <button className="productsLists__button" type="button">
          Load more
        </button>
      </div>
    </div>
  );
}

export default ProductsLists;
