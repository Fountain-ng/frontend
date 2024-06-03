'use client';
import '../styles/carabao-product.modules.css';
import React, { useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from '../context/AuthContext';

const CarabaoProducts = () => {
  const { authStatus, loading } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => {
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
            <Link to="/" className="navbar__link-logout">HOME</Link>
          </li>
          <li className="navbar__item">
            <Link to="/carabao" className="navbar__link-logout">SHOP</Link>
          </li>
          <li className="navbar__item">
            <Link to="/Cart" className="navbar__link-logout">BASKET</Link>
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

        <div className="navbar__cta-logout">
          <Link to="#" className="navbar__cta-btn">
            <img
              src="/bx-cart.svg"
              className="navbar__cta-img-logout"
              alt='cart icon'
              width={30}
              height={30}
            />
          </Link>
          <Link to="/LogoutButton"className="navbar__cta-btn">
          <img
            src="/bx-user.svg"
            className="navbar__cta-img-normal-main"
            alt="user icon"
            width={30}
            height={30}
          />
        </Link>
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
        <div
          className="carabao-real__container"
        >
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
            <label htmlFor="quantity" className="quantity-real">Qty</label>
            <input type="number"  name="quantity" min="2" max="100" required></input>
            <div className="carabao-real__cta">
              <Link to='#' className="carabao-real__cta-btn">ADD TO CART</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CarabaoProducts;
