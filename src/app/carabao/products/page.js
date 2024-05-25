'use client';
import Link from 'next/link';
import { useState } from 'react';
import React from 'react';
import '../../../styles/carabao-product.modules.css';


const CarabaoProducts = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
    console.log("isMenuOpen:", !isMenuOpen);
    setIsMenuOpen(!isMenuOpen);
  };
    return (
        <>
        <header>
          <div className='carabao-fountain'>
            <img
            src="/Fountain official logo white txtAsset 3@4x-8.png"
            alt="Fountain FMCG Logo"
            className='fountain-logo'
            width={200}
            height={40}
            />
          </div>

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
          className="navbar__cta-img-logout"
          alt='cart icon'
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
    <section className="carabao-real">
      <div className="carabao-real__container">
        <div className="carabao-real__img">
          <img
            src="/drink-pack-2.png"
            className='drink-pack-2'
            alt="Carabao Energy Drink"
            width={500}
            height={450}
          />
        </div>
        <div className="carabao-real__content">
          <h1 className="carabao-real__title">CARABAO ENERGY DRINK ORIGINAL (330ML CAN)</h1>
          <p className="carabao-real__price"><span className="price-span">N2000.00</span>N1500.00</p>
          <p className="carabao-real__size">Can Pack Size</p>
           <div className="carabao-real__quantity">
            <select className="carabao-real__select">
              <option value="1">24 x 300ml</option>
              <option value="2">36 x 300ml</option>
              <option value="3">48 x 300ml</option>
              <option value="4">60 x 300ml</option>
              <option value="5">72 x 300ml</option>
              <option value="6">90 x 300ml</option>
            </select>
          </div>
          <label for="quantity">Qty</label>
          <input type="number" id="quantity" name="quantity" min="2" max="100" required></input>
          <div className="carabao-real__cta">
            <a href='#' className="carabao-real__cta-btn">ADD TO CART</a>
          </div>
        </div>
      </div>
    </section>
    </>
    )
}


export default CarabaoProducts;