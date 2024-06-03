'use client';
import React from "react";
import "../styles/Navbar.modules.css";
import {useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import {AuthContext} from '../context/AuthContext';

const Navbar = () => {
  const { authStatus, loading } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="land-navbar">
        <img
          src="/Fountain official logo dark txtAsset 4@4x-8 (1).png"
          alt="Fountain FMCG Logo"
          className="land-navbar-img"
          width={200}
          height={40}
        />
      <ul className={`navbar__menu-normal ${isMenuOpen ? 'navbar__menu--open' : ''}`}>
        <li className="navbar__item">
          <Link to="/" className="navbar__link-normal">HOME</Link>
        </li>
        <li className="navbar__item">
          <Link to="/carabao" className="navbar__link-normal">SHOP</Link>
        </li>
        <li className="navbar__item">
          <Link to="/Cart" className="navbar__link-normal">BASKET</Link>
        </li>
        <li className="navbar__item">
          <Link to="/Cart" className="navbar__link-normal cart-nav">CART</Link>
        </li>
        {!loading && (
          authStatus ? (
            <li className="navbar__item">
              <Link to="/LogoutButton" className="navbar__link-normal log-in">PROFILE</Link>
            </li>
          ) : (
            <li className="navbar__item">
              <Link to="/signIn" className="navbar__link-normal log-in">LOG IN</Link>
            </li>
          )
        )}
      </ul>

      <div className="navbar__cta">
        <Link to="/Cart" className="navbar__cta-btn">
          <img
            src="/bx-cart.svg"
            className="navbar__cta-img-normal"
            alt="cart icon"
            width={30}
            height={30}
          />
        </Link>
        {!loading && (
          authStatus ? (
            <Link to="/LogoutButton"className="navbar__cta-btn">
          <img
            src="/bx-user.svg"
            className="navbar__cta-img-normal"
            alt="user icon"
            width={30}
            height={30}
          />
        </Link>
          ) : (
              <Link to="/signIn"className="navbar__cta-btn">
          <img
            src="/bx-user.svg"
            className="navbar__cta-img-normal"
            alt="user icon"
            width={30}
            height={30}
          />
        </Link>
          )
        )}
        <button className="navbar__cta-btn-menu" onClick={handleMenuToggle}>  
        {isMenuOpen ? (
          <img
            src="/bx-x.svg"
            alt="Menu close button"
            width={30}
            height={30}
          />
        ) : (
          <img
            src="/bx-menu.svg"
            alt="Menu toggle button"
            width={30}
            height={30}
          />
        )}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
