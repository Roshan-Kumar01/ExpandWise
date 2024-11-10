// src/Header.js
import React from 'react';
import './Header.css';
import { FaHome, FaInfoCircle, FaPhone, FaUser, FaBars } from 'react-icons/fa';

const Header = ({ isMenuOpen, toggleMenu }) => {
  return (
    <header className="header">
      {/* Hamburger Icon */}
      <button className="header__hamburger" onClick={toggleMenu}>
        <FaBars />
      </button>
      
      <div className="header__logo">
        <h1>ExpandWise</h1>
      </div>

      {/* Navigation Menu */}
      <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
        <a href="/" className="header__link">
          <FaHome /> Home
        </a>
        <a href="#about" className="header__link">
          <FaInfoCircle /> About
        </a>
        <a href="#services" className="header__link">
          <FaUser /> Services
        </a>
        <a href="#contact" className="header__link">
          <FaPhone /> Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
