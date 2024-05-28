'use client';
import { useState } from 'react';
import '../../styles/distributorForm.modules.css';
import Link from 'next/link';
import { useAuth } from '../../context/Authcontext';

const DistributorForm = () => {
    const { user } = useAuth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleMenuToggle = () => {
      
      setIsMenuOpen(!isMenuOpen);
    };
  return (
    <>
    <header className="distributor-navbar">
        <img
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
          <img 
            src="/bx-cart.svg"
            className="navbar__cta-img-normal"
            alt="cart icon"
            width={30}
            height={30}
          />
        </a>
        <Link href={user ? "/profile" : "/sign-in"} className="navbar__cta-btn">
          <img
            src="/bx-user.svg"
            className="navbar__cta-img-normal"
            alt="user icon"
            width={30}
            height={30}
          />
        </Link>
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
    <section className="distributorForm">
    
    <div className="distributor-form__container">
    <h1 className="title">Form</h1>
        <form className="main-form">
            <div className="email">
            <label htmlFor="email" className="email-label">First Name</label>
            <input
                type="text"
                id="firstname"
                className="email-input"
                onChange={(e) => setFirstName(e.target.value)}
                required
            />
            </div>
            <div className="email">
            <label htmlFor="email" className="email-label">Last Name</label>
            <input
                type="text"
                id="lastName"
                onChange={(e) => setLastName(e.target.value)}
                className="email-input"
                required
            />
            </div>
            <div className="email">
                <label htmlFor="email" className="email-label">Email</label>
                <input
                    type="email"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="email-input"
                    required
                />
            </div>
            <div className="email">
                <label htmlFor="phone" className="email-label">Phone Number</label>
                <input
                    type="phone"
                    id="phone"
                    onChange={(e) => setPassword(e.target.value)}
                    className="email-input"
                    required
                />
            </div>
            <div className="email">
                <label htmlFor="email" className="email-label">Company Name</label>
                <input
                    type="text"
                    id="companyName"
                    onChange={(e) => setLastName(e.target.value)}
                    className="email-input"
                    required
                />
            </div>
            <div className="email">
                <label htmlFor="address" className="email-label">Company Address</label>
                <input
                    type="text"
                    id="address"
                    onChange={(e) => setUserName(e.target.value)}
                    className="email-input"
                    required
                />
            </div>
            <a href='#' type="submit" className="input-btn">SUBMIT</a>
        </form>
    </div>
    </section>

    </>
  )
}

export default DistributorForm;