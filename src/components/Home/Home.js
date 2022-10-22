import React from "react";
import "./Home.css";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Features from "../Features/Features";
import Listings from "../Listings/Listings";
import Promo from "../Promo/Promo";
import Spam from "../Spam/Spam";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Listings />
      <Promo />
      <Spam />
      <Footer />
    </>
  );
}

export default Home;