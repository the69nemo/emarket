import React from "react";
import "./BasketCard.css";
import Img1 from "../../img/images/listings-img/3.jpg";
// import Img2 from "../../img/images/listings-img/1.jpg";

function BasketCard({ title, alt, src, prise, description }) {

  let count = 3;

  return (
    <div className="basketCard">
          <div className="basketCard__table-body">
            <div className="basketCard__table-row">
              <div className="basketCard__table-cell product-img">
                <img
                  className="basketCard__table-img"
                  src={src}
                  alt={alt}
                />
              </div>
              <div className="basketCard__table-cell product-disription">
                <h3 className="basketCard__table-product-title">
                  {title}
                </h3>
                <p className="basketCard__table-product-disription">
                  {description}
                </p>
                <p className="basketCard__table-product-price">{`£${prise}`}</p>
              </div>
              <div className="basketCard__table-cell product-quantity">
                <button
                  type="button"
                  className="basketCard__table-button decrement"
                >
                  -
                </button>
                <p className="basketCard__table-quantity">{count}</p>
                <button
                  type="button"
                  className="basketCard__table-button
                  increment"
                >
                  +
                </button>
              </div>
              <div className="basketCard__table-cell product-total">
                <p className="basketCard__table-total">{`£${count * prise}`}</p>
              </div>
            </div>
          </div>
        </div>


  );
}

export default BasketCard;
