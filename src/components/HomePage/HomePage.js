import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './HomePage.scss';
import HomeTenders from './HomeTenders/HomeTenders';
import Login from './Login/Login';
import Register from './Register/Register';

const HomePage = () => {
  return (
    <>
      <Switch>
        <div className='home-page'>
          <section className='home-page__left'>
            <HomeTenders />
          </section>
          <section className='home-page__right'>
            <Route exact path='/'>
              <Login />
            </Route>
            <Route path='/register'>
              <Register />
            </Route>
          </section>
        </div>
      </Switch>
    </>
  );
};

export default HomePage;
