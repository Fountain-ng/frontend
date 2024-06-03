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
            <Link to="#" className="navbar__link-logout">STORES</Link>
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
          {!loading && (
          authStatus ? (
            <Link to="/LogoutButton"className="navbar__cta-btn">
          <img
            src="/bx-user.svg"
            className="navbar__cta-img-normal-main"
            alt="user icon"
            width={30}
            height={30}
          />
        </Link>
          ) : (
              <Link to="/signIn"className="navbar__cta-btn">
          <img
            src="/bx-user.svg"
            className="navbar__cta-img-normal-main"
            alt="user icon"
            width={30}
            height={30}
          />
        </Link>
          )
        )}
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