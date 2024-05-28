'use client';
import React from "react";
import "../styles/Navbar.modules.css";
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '../context/Authcontext';

const Navbar = () => {
  const { user } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="land-navbar">
        <Image
          src="/Fountain official logo dark txtAsset 4@4x-8 (1).png"
          alt="Fountain FMCG Logo"
          className="land-navbar-img"
          width={200}
          height={40}
        />
      <ul className={`navbar__menu-normal ${isMenuOpen ? 'navbar__menu--open' : ''}`}>
        <li className="navbar__item">
          <Link href="/" className="navbar__link-normal">HOME</Link>
        </li>
        <li className="navbar__item">
          <Link href="/carabao" className="navbar__link-normal">SHOP</Link>
        </li>
        <li className="navbar__item">
          <Link href="#" className="navbar__link-normal">STORES</Link>
        </li>
        {user ? (
          <Link href="/profile" className="navbar__link-normal log-in">
            PROFILE
          </Link>
        ) : (
          <Link href="/sign-in" className="navbar__link-normal log-in">
            LOG IN
          </Link>
        )}
      </ul>

      <div className="navbar__cta">
        <a href="/carabao/products" className="navbar__cta-btn">
          <Image
            src="/bx-cart.svg"
            className="navbar__cta-img-normal"
            alt="cart icon"
            width={30}
            height={30}
          />
        </a>
        <Link href={user ? "/profile" : "/sign-in"} className="navbar__cta-btn">
          <Image
            src="/bx-user.svg"
            className="navbar__cta-img-normal"
            alt="user icon"
            width={30}
            height={30}
          />
        </Link>
        <button className="navbar__cta-btn-menu" onClick={handleMenuToggle}>  
        {isMenuOpen ? (
          <Image
            src="/bx-x.svg"
            alt="Menu close button"
            width={30}
            height={30}
          />
        ) : (
          <Image
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
