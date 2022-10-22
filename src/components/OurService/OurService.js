import React from "react";
import "./OurService.css";
import LinkView from "../../blocks/link-view/link-view";
import Img from "../../img/images/inside-weather-Uxqlfigh6oE-unsplash.jpg";

function OurService() {
  return (
    <div className="ourService">
      <div className="ourService__container">
        <div className="ourService__img-wrapper">
          <img className="ourService__img" src={Img} alt="sofa" />
        </div>
        <div className="ourService__text-wrapper">
          <div className="ourService__text-container">
            <h2 className="ourService__text-title">
              Our service isn’t just personal, it’s actually hyper personally
              exquisite
            </h2>
            <p className="ourService__text-discriprion">
              When we started Avion, the idea was simple. Make high quality
              furniture affordable and available for the mass market.
            </p>
            <p className="ourService__text-discriprion">
              Handmade, and lovingly crafted furniture and homeware is what we
              live, breathe and design so our Chelsea boutique become the hotbed
              for the London interior design community.
            </p>
          </div>

          <LinkView text="Get in touch" />
        </div>
      </div>
    </div>
  );
}

export default OurService;
