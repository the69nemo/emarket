import React, { useState } from "react";
import "./ProductListings.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ProductListingsBanner from "../ProductListingsBanner/ProductListingsBanner";
import FiltersPanel from "../FiltersPanel/FiltersPanel";
import ProductsLists from "../ProductsLists/ProductsLists";
import FiltersSidePanel from "../FiltersSidePanel/FiltersSidePanel";

function ProductListings({ allData, handleOpenPopup }) {
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

  const handleFilterMenu = () => setIsFilterMenuOpen(!isFilterMenuOpen);

  return (
    <>
      <Header handleOpenPopup={handleOpenPopup} />
      <ProductListingsBanner />
      <div className="product-listings__btn-container">
        <button
          type="button"
          className="product-listings__filter-panel-btn"
          onClick={handleFilterMenu}
        >
          &lt; Filters
        </button>
        <FiltersSidePanel
        isFilterMenuOpen={isFilterMenuOpen}
        handleFilterMenu={handleFilterMenu}
        />
      </div>
      <div className="product-listings__container">
        <FiltersPanel
          className="product-listings__panel"
        />
        <ProductsLists className="product-listings__lists" allData={allData} />
      </div>
      <Footer />
    </>
  );
}

export default ProductListings;
