import React from "react";
import "./Home.css";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Features from "../Features/Features";
import Listings from "../Listings/Listings";
import Promo from "../Promo/Promo";
import Spam from "../Spam/Spam";
import Footer from "../Footer/Footer";

function Home({ handleOpenPopup }) {
  return (
    <>
      <Header
        handleOpenPopup={handleOpenPopup}
      />
      <Hero />
      <Features />
      <Listings />
      <Promo />
      <Spam type = 'home' />
      <Footer />
    </>
  );
}

export default Home;
