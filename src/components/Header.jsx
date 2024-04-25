import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import '../index.css'

const Header = ({toggleBackground,isNightMode}) => {
  const handleToggle=()=>{
    toggleBackground()
  }

  console.log(isNightMode+"header")
  return (
    <div className={`parents-nav ${isNightMode ? 'night-mode' : ''}`}>
      <ul className="li-parents">
        <li>
        <i class="ri-home-4-line"></i>
        &nbsp;
          <Link to="">Home</Link>
        </li>
        <li>
        <i class="ri-hexagon-fill"></i>
        &nbsp;
          <Link to="./about">About</Link>
        </li>
        <li>
        <i class="ri-contacts-book-2-fill"></i>
        &nbsp;
          <Link to="./contact">Contact</Link>
        </li>
        <li>
          <button onClick={handleToggle}>{isNightMode ? ('☀️ Day') : '🌃Night'}</button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
