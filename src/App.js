import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '../src/App.scss';
import 'antd/dist/antd.css';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    // <div className='App'>
    <Router>
      <Header />
      <HomePage />
      <Footer />
    </Router>
    // </div>
  );
};

export default App;
