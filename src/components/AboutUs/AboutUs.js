import React from 'react';
import './AboutUs.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Promo from '../Promo/Promo';
import Features from '../Features/Features';
import AboutUsBanner from '../AboutUsBanner/AboutUsBanner';
import OurService from '../OurService/OurService';
import Spam from "../Spam/Spam";

function AboutUs({ handleOpenPopup }) {
  return (
    <div>
      <Header
        handleOpenPopup={handleOpenPopup}
      />
      <AboutUsBanner />
      <Promo />
      <OurService />
      <Features />
      <Spam />
      <Footer />
    </div>
   );
}

export default AboutUs;