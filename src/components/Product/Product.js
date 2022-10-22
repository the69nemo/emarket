import React from 'react';
import './Product.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Listings from '../Listings/Listings';
import Spam from '../Spam/Spam';
import Features from '../Features/Features';
import Details from '../Details/Details';

function Product() {
  return (
    <>
      <Header />
      <Details />
      <Listings />
      <Features />
      <Spam />
      <Footer />
    </>
   );
}

export default Product;