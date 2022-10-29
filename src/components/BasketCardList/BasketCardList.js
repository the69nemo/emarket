import React from "react";
import "./BasketCardList.css";
import BasketCard from "../BasketCard/BasketCard";

function BasketCardList({productInBasket}) {
  let totalPrise = []
  let subtotal = 0;
  const cards = productInBasket.map((card) => (
    <BasketCard
      key={card.id}
      title={card.name}
      alt={card.name}
      src={card.img}
      prise={card.prise}
      description={card.description}
    />
  ))

  productInBasket.map((card) => {
    totalPrise.push(card.prise)
  })

  if (totalPrise.length === 0) {
    subtotal = 0
  } else {
    subtotal = totalPrise.reduce((a, b) => a + b)
  }

  return (
    <>
    { productInBasket.length === 0 ?
      (<div className="basketCard-container empty">
        <h2 className="basket__empty-basket-title">Your basket empty</h2>
      </div>)
      :
      (
      <div className="basketCard-container">
      <div className="basketCard__table-container">
        <div className="basketCard__table-head">
          <div className="basketCard__table-cell-head">Product</div>
          <div className="basketCard__table-cell-head">Quantity</div>
          <div className="basketCard__table-cell-head">Total</div>
        </div>
      </div>
      {cards}
      <div className="basketCard-subtotal-container">
        <div className="basketCard-subtotal__price-wrapper">
          <p className="basketCard-subtotal__price-text">Subtotal</p>
          <p className="basketCard-subtotal__price">{`£${subtotal}`}</p>
        </div>
        <p className="basketCard-subtotal__discriprion">
          Taxes and shipping are calculated at checkout
        </p>
        <button type="button" className="basketCard-subtotal__button">
          Go to checkout
        </button>
      </div>
    </div>
    )
  }
  </>);
}

export default BasketCardList;
