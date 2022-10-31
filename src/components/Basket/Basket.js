import React from 'react';
import './Basket.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BasketCardList from '../BasketCardList/BasketCardList';


function Basket({ productInBasket, handleOpenPopup }) {

  return (
    <div className='basket'>
      <Header
        handleOpenPopup={handleOpenPopup}
      />
      <BasketCardList
        productInBasket = {productInBasket}
      />
      <Footer />
    </div>
   );
}

export default Basket;
