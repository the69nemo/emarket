import React from "react";
import "./Hero.css";
import "../../blocks/link-view/link-view.css";
import HeroBg from "../../img/images/hero-bg.jpg";
import LinkView from "../../blocks/link-view/link-view";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__container">
        <div className="hero__text-container">
          <div className="hero__text-wrapper">
            <h2 className="hero__text-title">
              Luxury homeware for people who love timeless design quality
            </h2>
            <p className="hero__text-subtitle">
              Shop the new Spring 2022 collection today
            </p>
          </div>
          <LinkView text='View collection'/>
        </div>
        <div className="hero__img-container" />
      </div>
    </div>
  );
}

export default Hero;
