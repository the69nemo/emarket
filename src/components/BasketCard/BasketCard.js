import React from "react";
import "./BasketCard.css";
import Img1 from "../../img/images/listings-img/3.jpg";
// import Img2 from "../../img/images/listings-img/1.jpg";

function BasketCard() {
  return (
    <div className="basketCard">
      <div className="basketCard-container">
        <h2 className="basketCard__title">Your shopping cart</h2>
        <div className="basketCard__table-container">
          <div className="basketCard__table-head">
            <div className="basketCard__table-cell-head">Product</div>
            <div className="basketCard__table-cell-head">Quantity</div>
            <div className="basketCard__table-cell-head">Total</div>
          </div>
          <div className="basketCard__table-body">
            <div className="basketCard__table-row">
              <div className="basketCard__table-cell product-img">
                <img
                  className="basketCard__table-img"
                  src={Img1}
                  alt="product image"
                />
              </div>
              <div className="basketCard__table-cell product-disription">
                <h3 className="basketCard__table-product-title">
                  Graystone vase
                </h3>
                <p className="basketCard__table-product-disription">
                  A timeless ceramic vase with a tri color grey glaze.
                </p>
                <p className="basketCard__table-product-price">£85</p>
              </div>
              <div className="basketCard__table-cell product-quantity">
                <button
                  type="button"
                  className="basketCard__table-button decrement"
                >
                  -
                </button>
                <p className="basketCard__table-quantity">1</p>
                <button
                  type="button"
                  className="basketCard__table-button
                  increment"
                >
                  +
                </button>
              </div>
              <div className="basketCard__table-cell product-total">
                <p className="basketCard__table-total">£85</p>
              </div>
            </div>
          </div>
        </div>
        <div className="basketCard-subtotal-container">
          <div className="basketCard-subtotal__price-wrapper">
            <p className="basketCard-subtotal__price-text">Subtotal</p>
            <p className="basketCard-subtotal__price">£210</p>
          </div>
          <p className="basketCard-subtotal__discriprion">
            Taxes and shipping are calculated at checkout
          </p>
          <button type="button" className="basketCard-subtotal__button">
            Go to checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default BasketCard;
