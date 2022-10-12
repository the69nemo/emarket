import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Features from '../Features/Features';
import Listings from '../Listings/Listings';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <Listings />
    </div>
  );
}

export default App;
