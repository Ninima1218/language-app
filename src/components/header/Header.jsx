import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../images/logo.png';
import '../../fonts/fonts.css';

function Header() {
  return (
    <header>
      <Link to="/">
      <div className="logo">
      <img src={logo} alt="logo" />
      </div>
      </Link>
      <h1>SPEAK UP</h1>
    </header>
  );
}

export default Header;