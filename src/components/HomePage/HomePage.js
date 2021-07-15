import React from 'react';
import './HomePage.scss';
import HomeTenders from './HomeTenders/HomeTenders';
import Login from './Login/Login';

const HomePage = () => {
  return (
    <>
      <div className='home-page'>
        <section className='home-page__left'>
          <HomeTenders />
        </section>
        <section className='home-page__right'>
          <Login />
        </section>
      </div>
    </>
  );
};

export default HomePage;
