'use client';
import React from "react";
import "../styles/Navbar.modules.css";
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <header className="land-navbar">
      <Link to="/">
        <img
          src="/logo-white.png"
          alt="Fountain FMCG Logo"
          className="land-navbar-img"
          width={200}
          height={40}
        />
      </Link>

      <div className="navbar__cta">
        <Link to="/signIn" className="navbar__cta-btn">
          <img
            src="/icons/user.png"
            className=""
            alt="cart icon"
            width={30}
            height={30}
          />
        </Link>
        <Link to="" className="navbar__cta-btn">
          <img
            src="/icons/search-normal.png"
            className=""
            alt="cart icon"
            width={30}
            height={30}
          />
        </Link>
        <Link to="" className="navbar__cta-btn">
          <img
            src="/icons/menu.png"
            className=""
            alt="cart icon"
            width={30}
            height={30}
          />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
