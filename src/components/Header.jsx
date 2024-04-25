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
      <li className="li-parents">
        <ul>
        <i class="ri-home-4-line"></i>
        &nbsp;
          <Link to="">Home</Link>
        </ul>
        <ul>
        <i class="ri-hexagon-fill"></i>
        &nbsp;
          <Link to="./about">About</Link>
        </ul>
        <ul>
        <i class="ri-contacts-book-2-fill"></i>
        &nbsp;
          <Link to="./contact">Contact</Link>
        </ul>
        <ul>
          <button onClick={handleToggle}>{isNightMode ? ('☀️ Day') : '🌃Night'}</button>
        </ul>
      </li>
    </div>
  );
};

export default Header;
