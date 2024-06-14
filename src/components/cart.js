import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import {AuthContext} from '../context/AuthContext';
import "../styles/cart.modules.css";


const Cart = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { authStatus, loading } = useContext(AuthContext);
  
    const handleMenuToggle = () => {
      setIsMenuOpen(!isMenuOpen);
    };
return (
    <>
    <header>
      <Link to="/">
        <img
          src="/Fountain official logo white txtAsset 3@4x-8.png"
          alt="Fountain FMCG Logo"
          className="land-navbar-img"
          width={200}
          height={40}
        />
      </Link>
      <ul className={`navbar__menu-normal ${isMenuOpen ? 'navbar__menu--open' : ''}`}>
        <li className="navbar__item">
          <Link to="/carabao" className="navbar__link-normal-cart">Our Brands</Link>
        </li>
        <li className="navbar__item">
          <Link to="/Cart" className="navbar__link-normal-cart">Our Shop</Link>
        </li>
        <li className="navbar__item">
          <Link to="#" className="navbar__link-normal-cart">Careers</Link>
        </li>
        {!loading && (
          authStatus ? (
            <li className="navbar__item">
              <Link to="/LogoutButton" className="navbar__link-normal-cart log-in">Profile</Link>
            </li>
          ) : (
            <li className="navbar__item">
              <Link to="/signIn" className="navbar__link-normal log-in">Login</Link>
            </li>
          )
        )}
      </ul>

      <div className="navbar__cta">
        <Link to="/Cart" className="navbar__cta-btn">
          <img
            src="/bx-cart.svg"
            className="navbar__cta-img-normal-cart"
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
            className="navbar__cta-img-normal-cart"
            alt="user icon"
            width={30}
            height={30}
          />
        </Link>
          ) : (
              <Link to="/signIn"className="navbar__cta-btn">
          <img
            src="/bx-user.svg"
            className="navbar__cta-img-normal-cart"
            alt="user icon"
            width={30}
            height={30}
          />
        </Link>
          )
        )}
        <button className="navbar__cta-btn-menu-cart" onClick={handleMenuToggle}>  
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
        <section className="cart-real">
            <div
            className="cart-real__container"
            >
                <h1 className="cart-header">CART</h1>
                <p className="cart-description">Your cart is empty</p>
                <Link to="/carabao" className="cart-link">Continue Shopping</Link>
            </div>
        </section>
    </>
);
};


export default Cart;