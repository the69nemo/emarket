import React from 'react';
import './Product.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Listings from '../Listings/Listings';
import Spam from '../Spam/Spam';
import Features from '../Features/Features';
import Details from '../Details/Details';

function Product({ handleAddProductInBasket, allData }) {
  return (
    <>
      <Header />
      <Details
        handleAddProductInBasket = {handleAddProductInBasket}
        allData = {allData}
      />
      <Listings />
      <Features />
      <Spam />
      <Footer />
    </>
   );
}

export default Product;