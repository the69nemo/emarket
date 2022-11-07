import React from 'react';
import './PageNotFound.css';
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div className='pageNotFound'>
      <div className='pageNotFound__container'>
        <h2 className='pageNotFound__title'>404</h2>
        <div className='pageNotFound__text-container'>
          <h3 className='pageNotFound__text-title'>SORRY!</h3>
          <p className='pageNotFound__text'>The page you're looking for was not found </p>
          <Link to='/' className='pageNotFound__link'>&lt; Go back</Link>
        </div>
      </div>
    </div>
   );
}

export default PageNotFound;