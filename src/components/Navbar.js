'use client';
import React from "react";
import "../styles/Navbar.modules.css";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {useAuthStatus} from '../hooks/useAuthStatus';

const Navbar = () => {
  const { data: authStatus, isLoading } = useAuthStatus();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    
    setIsMenuOpen(!isMenuOpen);
  };
  const isAuthenticated = authStatus && authStatus.data && authStatus.data.user;

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
          <Link to="#" className="navbar__link-normal">STORES</Link>
        </li>
        {!isLoading && (
          isAuthenticated ? (
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
        <Link to="/carabao/products" className="navbar__cta-btn">
          <img
            src="/bx-cart.svg"
            className="navbar__cta-img-normal"
            alt="cart icon"
            width={30}
            height={30}
          />
        </Link>
        {!isLoading && (
          isAuthenticated ? (
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
