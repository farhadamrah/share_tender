import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <>
      <header className='main-header'>
        <div className='main-header__logo'>LOGO</div>
        <nav className='main-header__nav-menu'>
          <ul className='main-header__nav-menu--list'>
            <li className='main-header__nav-menu--list__item'>Əsas Səhifə</li>
            <li className='main-header__nav-menu--list__item'>Haqqımızda</li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
