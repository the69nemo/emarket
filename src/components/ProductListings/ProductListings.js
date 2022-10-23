import React from 'react';
import './ProductListings.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ProductListingsBanner from '../ProductListingsBanner/ProductListingsBanner';

function ProductListings() {
  return (
    <>
      <Header />
      <ProductListingsBanner />
      <Footer />
    </>
   );
}

export default ProductListings;