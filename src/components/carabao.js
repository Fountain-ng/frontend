'use client';
import { Link } from 'react-router-dom';
import React, { useState, useContext} from 'react';
import '../styles/all-brands.modules.css';
import {AuthContext} from '../context/AuthContext';

const AllBrands = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { authStatus, loading } = useContext(AuthContext);
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
          <Link to="/Cart" className="navbar__cta-btn">
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
      <main>
        <section className='all-brands'>
          <div className='all-brands__container'>
          </div>
          <div className='all-brands__content'>
            <h1 className='all-brands__header'>GET READY TO BRING IT ON!</h1>
            <h2 className='all-brands__title'>Carabao Energy Drink</h2>
            <Link to="/carabao-products" className='all-brands__btn'>VIEW PRODUCTS</Link>
          </div>
        </section>
        <section className='all-brands-products'>
          <h1 className='all-brands-products__title'>OUR PRODUCTS</h1>
          <div className='all-brands-products__container'>
            <img
              src='/download.png'
              alt='Products'
              className='all-brands-img'
              width={350}
              height={350}
            />
            <div className='all-brands-head'>
              <h1 className='all-brands-products__header'>ORIGINAL</h1>
              <p className='all-brands-products__description'>
                Carabao Original is a refreshing and great tasting non-carbonated energy drink. Contains taurine, caffeine and B vitamins which replenishes energy and relieves fatigue. Niacin, pantothenic acid, vitamin B6 and vitamin B12 contribute to normal energy yielding metabolism and to the reduction of tiredness and fatigue.
              </p>
              <Link to="/carabao-products" className='all-brands-products__btn'>Shop Now</Link>
            </div>
          </div>
        </section>
        <section className='carabao-details'>
          <div className='carabao-details__container'>
            <div className='carabao-details__content'>
              <img
                src="/fruits.png"
                alt='Carabao energy fruits'
                width={120}
                height={120}
              />
              <p className='fruity-header'>Sparkling Fruity Flavours</p>
              <p className='fruity-name'>Five refreshingly light fruity flavours, each taste just like a soft drink!</p>
            </div>
            <div className='carabao-details__content'>
              <img
                src="/games.png"
                alt='Carabao energy fruits'
                width={120}
                height={120}
              />
              <p className='fruity-header'>Energy For All Occasions</p>
              <p className='fruity-name'>Pre-workout at the gym, coffee-substitute at a desk or mixer at a party!</p>
            </div>
            <div className='carabao-details__content'>
              <img
                src="/sugar.png"
                alt='Carabao energy fruits'
                width={120}
                height={120}
              />
              <p className='fruity-header'>Lower Sugar</p>
              <p className='fruity-name'>Carabao Energy Drink has no fat, low salt and lower sugar - half the sugar of traditional energy drinks.</p>
            </div>
            <div className='carabao-details__content'>
              <img
                src="/calorie.png"
                alt='Carabao energy fruits'
                width={120}
                height={120}
              />
              <p className='fruity-header'>Low Calorie Stimulation</p>
              <p className='fruity-name'>63 cal or less per can, so no guilt or hidden calories to ruin your diet or nutrition plan.</p>
            </div>
            <div className='carabao-details__content'>
              <img
                src="/bottle.png"
                alt='Carabao energy fruits'
                width={120}
                height={120}
              />
              <p className='fruity-header'>Energy Without Crash</p>
              <p className='fruity-name'>Get an energy boost without crash thanks to our unique formula of sugar, caffeine and B vitamins.</p>
            </div>
            <div className='carabao-details__content'>
              <img
                src="/check.png"
                alt='Carabao energy fruits'
                width={120}
                height={120}
              />
              <p className='fruity-header'>Vegetarian & Vegan Friendly</p>
              <p className='fruity-name'>Suitable for vegans and vegetarians as none of our ingredients are from animals or animal bi-products.</p>
            </div>
          </div>
        </section>
        <footer className="all-brands-footer">
          <div className="all-brands-footer__container">
            <div className="all-brands-footer__content">
              <img
                src="/Fountain official logo dark txtAsset 4@4x-8 (1).png"
                alt="logo"
                width="180"
                height="40"
                className="footer__logo"
              />
              <p className="all-brands-footer__text">Copyright 2024 Fountain, Inc. Terms & Privacy</p>
            </div>
            <div className="all-brands-footer__content-2">
              <div className="all-brands-footer__blog">
                <p className="all-brands-footer__text">More on the blog</p>
                <Link to="#" target="_blank" rel="noreferrer">About Fountain</Link>
                <Link to="#" target="_blank" rel="noreferrer">Products</Link>
                <Link to="#" target="_blank" rel="noreferrer">Shop</Link>
              </div>
              <div className="all-brands-footer__jobs">
                <p className="all-brands-footer__text">More on Fountain</p>
                <Link to="#" target="_blank">The team</Link>
                <Link to="#" target="_blank" rel="noreferrer">Jobs</Link>
                <div className="all-brands-footer__socials">
                  <Link to="#" target="_blank" rel="noreferrer">
                    <img
                      src="/Group.svg"
                      alt="facebook"
                      width="20"
                      height="20"
                    />
                  </Link>
                  <Link to="#" target="_blank" rel="noreferrer">
                    <img
                      src="/Group (1).svg"
                      alt="twitter"
                      width="20"
                      height="20"
                    />
                  </Link>
                  <Link to="#" target="_blank" rel="noreferrer">
                    <img
                      src="/Group (2).svg"
                      alt="instagram"
                      width="20"
                      height="20"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

export default AllBrands;
