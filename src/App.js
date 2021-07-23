import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../src/App.scss';
import 'antd/dist/antd.css';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import TenderForm from './components/TenderForm/TenderForm';

const App = () => {
  return (
    // <div className='App'>
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route exact path='/tender-form'>
          <TenderForm />
        </Route>
      </Switch>
      <Footer />
    </Router>
    // </div>
  );
};

export default App;
