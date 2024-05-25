'use client';

import { useAuth } from '../../context/Authcontext';
import Link from 'next/link';
import { useState } from 'react';
import React from 'react';
import '../../styles/profiles.modules.css';

const Profile = () => {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    console.log("isMenuOpen:", !isMenuOpen);
    setIsMenuOpen(!isMenuOpen);
  };

  if (!user) {
    // You can handle redirection to sign-in page if user is not logged in
    return <p>Redirecting to sign in...</p>;
  }

  return (
    <>
    <header>
      <a href="#" className="header__logo">
        <img
          src="/Fountain official logo white txtAsset 3@4x-8.png"
          alt="Fountain FMCG Logo"
          className='fountain-logo'
          width={200}
          height={40}
        />
      </a>

      <ul className={`navbar__menu-logout ${isMenuOpen ? 'navbar__menu--open' : ''}`}>
        <li className="navbar__item-logout">
            <Link href="/" className="navbar__link-logout">HOME</Link>
        </li>
        <li className="navbar__item">
          <Link href="#products" className="navbar__link-logout">SHOP</Link>
        </li>
        <li className="navbar__item">
          <Link href="#footer" className="navbar__link-logout">STORES</Link>
        </li>
      </ul>

      <div className="navbar__cta-logout">
        {/* <Link href="#" className="navbar__cta-btn">
          <Image 
          src="/bx-search.svg"
          className="navbar__cta-img"
          width={30}
          height={30}
          />
        </Link> */}
        <Link href="#" className="navbar__cta-btn">
          <img
          src="/bx-cart.svg"
          alt='cart-icon'
          className="navbar__cta-img-logout"
          width={30}
          height={30}
          />
        </Link>
        {/* <Link href="/sign-in" className="navbar__cta-btn">
          <Image 
          src="/bx-user.svg"
          className="navbar__cta-img"
          width={30}
          height={30}
          />
        </Link> */}
        <button className="navbar__cta-btn-menu-logout" onClick={handleMenuToggle}>  
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
    <div className='profile'>
        <div className='profile-header'>
            <h1>MY ACCOUNT</h1>
            <button className='logout-btn' onClick={logout}>Logout</button>
        </div>
        <div className='profile-content'>
            <div className='profile-orders'>
                <h2>ORDER HISTORY</h2>
                <p>You haven&apos;t placed any orders yet.</p>
            </div>
            <div className='profile-details'>
                <h2>ACCOUNT DETAILS</h2>
                <p>Welcome, {user.firstName} {user.lastName}!</p>
            </div>
        </div>
    </div>
    </>
  );
};

export default Profile;
