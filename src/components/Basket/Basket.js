import React from 'react';
import './Basket.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BasketCard from '../BasketCard/BasketCard';


function Basket() {
  return (
    <div>
      <Header />
      <BasketCard />
      <Footer />
    </div>
   );
}

export default Basket;
