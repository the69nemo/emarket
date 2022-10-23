import React from "react";
import "./ProductsLists.css";
import ProductCard from "../ProductCard/ProductCard";

function ProductsLists() {
  return (
    <div className="productsLists">
      <div className="productsLists__container">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div className="productsLists__button-wrapper">
        <button className="productsLists__button" type="button">Load more</button>
      </div>
    </div>
  );
}

export default ProductsLists;
