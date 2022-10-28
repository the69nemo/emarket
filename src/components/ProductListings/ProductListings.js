import React from 'react';
import './ProductListings.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ProductListingsBanner from '../ProductListingsBanner/ProductListingsBanner';
import FiltersPanel from '../FiltersPanel/FiltersPanel';
import ProductsLists from '../ProductsLists/ProductsLists';

function ProductListings({ allData, setChoosenProduct }) {
  return (
    <>
      <Header />
      <ProductListingsBanner />
      <div className='product-listings__container'>
        <FiltersPanel className='product-listings__panel' />
        <ProductsLists
          className='product-listings__lists'
          allData = {allData}
        />
      </div>
      <Footer />
    </>
   );
}

export default ProductListings;