import React from 'react';
import logo from '../../../assets/logo.svg';

import './Header.css'

export const Header = () => (
  <header className="Header">
    <img src={logo} className="Header-logo" alt="logo" />
    <h1 className="Header-title">Welcome to React</h1>
  </header>
);

export default Header;