import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <>
      <div className='footer'>
        <nav className='footer__nav'>
          <ul className='footer__nav--list'>
            <li>Haqqımızda</li>
            <li>Əlaqə</li>
            <li>Qaydalar və şərtlər</li>
          </ul>
        </nav>
        <p className='footer__copyright'>
          Copyright © 2021 |
          <Link to='https://www.butagrup.com.tr/?lang=az'>ButaGrup</Link>
        </p>
      </div>
    </>
  );
};

export default Footer;
