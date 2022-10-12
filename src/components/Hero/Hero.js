import React from 'react';
import './Hero.css';
import '../../blocks/link-view/link-view.css'
import HeroBg from '../../img/images/hero-bg.jpg';

function Hero() {
  return (
    <div className='hero'>
      <div className='hero__container'>
        <div className='hero__text-container'>
          <div className='hero__text-wrapper'>
            <h2 className='hero__text-title'>Luxury homeware for people who love timeless design quality</h2>
            <p className='hero__text-subtitle'>Shop the new Spring 2022 collection today</p>
          </div>
          <a className='link-view' href='#'>View collection</a>
        </div>
        <img src={HeroBg} className='hero__img' alt='hero img'/>
      </div>
    </div>
   );
}

export default Hero;