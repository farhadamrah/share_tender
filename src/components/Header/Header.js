import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <>
      <header className='main-header'>
        <div className='main-header__logo'>
          <Link to='/'>LOGO</Link>
        </div>
        <nav className='main-header__nav-menu'>
          <ul className='main-header__nav-menu--list'>
            <li className='main-header__nav-menu--list__item'>
              <Link to='/'>Əsas Səhifə </Link>
            </li>
            <li className='main-header__nav-menu--list__item'>Haqqımızda</li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
