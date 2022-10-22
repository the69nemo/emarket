import React from "react";
import "./Details.css";
import Img from "../../img/images/eugene-chystiakov-3neSwyntbQ8-unsplash.jpg";

function Details() {
  return (
    <div className="details">
      <div className="details__container">
        <div className="details__img-wrapper">
          <img src={Img} alt="product" className="details__img" />
        </div>
        <div className="details__text-wrapper">
          <div className="details__text-title-wrapper">
            <h2 className="details__text-title">The Dandy Chair</h2>
            <p className="details__text-prise">£250</p>
          </div>
          <div className="details__text-desriprion-wrapper">
            <p className="details__text-desriprion-title">Description</p>
            <p className="details__text-desriprion">
              A timeless design, with premium materials features as one of our
              most popular and iconic pieces. The dandy chair is perfect for any
              stylish living space with beech legs and lambskin leather
              upholstery.
            </p>
            <ul className="details__text-desriprion-list">
              <li className="details__text-desriprion-list-item">Premium material</li>
              <li className="details__text-desriprion-list-item">Handmade upholstery</li>
              <li className="details__text-desriprion-list-item">Quality timeless classic</li>
            </ul>
          </div>
          <div className="details__text-dimensions-wrapper">
            <h3 className="details__text-dimensions-title">Dimensions</h3>
            <div className="details__text-dimensions-container">
              <div className="details__text-dimensions-parametrs height">
                <p className="details__text-dimensions-parametrs-title">Height</p>
                <p className="details__text-dimensions-parametrs-value">110cm</p>
              </div>
              <div className="details__text-dimensions-parametrs width">
                <p className="details__text-dimensions-parametrs-title">Width</p>
                <p className="details__text-dimensions-parametrs-value">75cm</p>
              </div>
              <div className="details__text-dimensions-parametrs depth">
                <p className="details__text-dimensions-parametrs-title">Depth</p>
                <p className="details__text-dimensions-parametrs-value">50cm</p>
              </div>
            </div>
          </div>
          <div className="details__text-amount-wrapper">
            <div className="details__text-amount-container">
              <p className="details__text-amount-text">Amount:</p>
              <div className="details__text-amount-btn-wrapper">
                <button
                  type="button"
                  className="details__text-amount-btn decrement"
                >
                  -
                </button>
                <p className="details__text-amount">1</p>
                <button
                  type="button"
                  className="details__text-amount-btn
                  increment"
                >
                  +
                </button>
              </div>
            </div>
            <div className="details__text-btn-wrapper">
              <button className="details__text-btn" type="button">
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
