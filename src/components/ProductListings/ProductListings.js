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
  const [isSortingOpen, setIsSortingOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(allData);

  const handleFilterMenu = () => setIsFilterMenuOpen(!isFilterMenuOpen);
  const handleSortingMenu = () => setIsSortingOpen(!isSortingOpen);
  const handleShowFilterProduct = (product) => {
    product.length !== 0
      ? setCurrentProduct(product.flat())
      : setCurrentProduct(allData);
  };

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
          &#x25C4; Filters
        </button>
        <div className="product-listings__sorting-select-container">
          <span className="product-listings__sorting-select-title">
            Sorting by:
          </span>
          <div className="product-listings__sorting-select-btn">
            <div
              className="product-listings__sorting-select-item"
              onClick={handleSortingMenu}
            >
              <span className="product-listings__sorting-select-item-text">
                Date added &#x25BC;
              </span>
            </div>
            <div
              className={`product-listings__sorting-select-item ${
                isSortingOpen && "open_sorting"
              }`}
            >
              <span className="product-listings__sorting-select-item-text">
                Date added &#x25BC;
              </span>
            </div>
          </div>
        </div>
        <FiltersSidePanel
          isFilterMenuOpen={isFilterMenuOpen}
          handleFilterMenu={handleFilterMenu}
          allData={allData}
          handleShowFilterProduct={handleShowFilterProduct}
        />
      </div>
      <div className="product-listings__container">
        <FiltersPanel
          className="product-listings__panel"
          allData={allData}
          handleShowFilterProduct={handleShowFilterProduct}
        />
        <ProductsLists
          className="product-listings__lists"
          allData={currentProduct}
        />
      </div>
      <Footer />
    </>
  );
}

export default ProductListings;
