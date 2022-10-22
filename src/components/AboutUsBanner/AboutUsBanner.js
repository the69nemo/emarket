import React from "react";
import "./AboutUsBanner.css";
import LinkView from "../../blocks/link-view/link-view";

function AboutUsBanner() {
  return (
    <div className="aboutUsBanner">
      <div className="aboutUsBanner__container">
        <div className="aboutUsBanner__text-wrapper">
          <p className="aboutUsBanner__text">
            A brand built on the love of craftmanship, quality and outstanding
            customer service
          </p>
        </div>
        <div className="aboutUsBanner__link-wrapper">
          <LinkView text="View our products" />
        </div>
      </div>
    </div>
  );
}

export default AboutUsBanner;
