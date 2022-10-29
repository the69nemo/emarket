import React from 'react';
import './Basket.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BasketCardList from '../BasketCardList/BasketCardList';


function Basket({ productInBasket }) {

  return (
    <div>
      <Header />
      <BasketCardList
        productInBasket = {productInBasket}
      />
      <Footer />
    </div>
   );
}

export default Basket;
