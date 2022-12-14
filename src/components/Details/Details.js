import React, { useState } from "react";
import "./Details.css";
import { useParams } from "react-router-dom";

function Details({ handleAddProductInBasket, allData }) {
  let { id } = useParams();
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    count > 1 ? setCount(count - 1) : setCount(1);
  };

  const choosenProduct = allData.filter((el) => el.id == id);

  const handleSetChoosenProduct = () => {
    handleAddProductInBasket(choosenProduct)
  };

  return (
    <div className="details">
      <div className="details__container">
        <div className="details__img-wrapper">
          <img
            src={choosenProduct[0].img}
            alt="product"
            className="details__img"
          />
        </div>
        <div className="details__text-wrapper">
          <div className="details__text-title-wrapper">
            <h2 className="details__text-title">{choosenProduct[0].name}</h2>
            <p className="details__text-prise">{`£${choosenProduct[0].prise}`}</p>
          </div>
          <div className="details__text-desriprion-wrapper">
            <p className="details__text-desriprion-title">Description</p>
            <p className="details__text-desriprion">
              {choosenProduct[0].description}
            </p>
            <ul className="details__text-desriprion-list">
              <li className="details__text-desriprion-list-item">
                Premium material
              </li>
              <li className="details__text-desriprion-list-item">
                Handmade upholstery
              </li>
              <li className="details__text-desriprion-list-item">
                Quality timeless classic
              </li>
            </ul>
          </div>
          <div className="details__text-dimensions-wrapper">
            <h3 className="details__text-dimensions-title">Dimensions</h3>
            <div className="details__text-dimensions-container">
              <div className="details__text-dimensions-parametrs height">
                <p className="details__text-dimensions-parametrs-title">
                  Height
                </p>
                <p className="details__text-dimensions-parametrs-value">{`${choosenProduct[0].dimensions.height}cm`}</p>
              </div>
              <div className="details__text-dimensions-parametrs width">
                <p className="details__text-dimensions-parametrs-title">
                  Width
                </p>
                <p className="details__text-dimensions-parametrs-value">{`${choosenProduct[0].dimensions.width}cm`}</p>
              </div>
              <div className="details__text-dimensions-parametrs depth">
                <p className="details__text-dimensions-parametrs-title">
                  Depth
                </p>
                <p className="details__text-dimensions-parametrs-value">{`${choosenProduct[0].dimensions.depth}cm`}</p>
              </div>
            </div>
          </div>
          <div className="details__text-amount-wrapper">
            <div className="details__text-amount-container">
              <p className="details__text-amount-text">Amount:</p>
              <div className="details__text-amount-btn-wrapper">
                <button
                  onClick={handleDecrement}
                  type="button"
                  className="details__text-amount-btn decrement"
                >
                  -
                </button>
                <p className="details__text-amount">{count}</p>
                <button
                  onClick={handleIncrement}
                  type="button"
                  className="details__text-amount-btn
                  increment"
                >
                  +
                </button>
              </div>
            </div>
            <div className="details__text-btn-wrapper">
              <button
                className="details__text-btn"
                type="button"
                onClick={handleSetChoosenProduct}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
