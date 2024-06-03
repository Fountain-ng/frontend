'use client'
import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import { useSignup } from '../hooks/useSignup';
import '../styles/Sign-up.modules.css';


const SignUp = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const { mutate: signup, isLoading, isError, isSuccess } = useSignup();

  const handleSubmit = (event) => {
    event.preventDefault();
    signup(
      { firstName, lastName, userName, email, password },
      {
        onSuccess: (data) => {
          console.log('User signed up successfully:', data);
          window.location.href = '/';
        },
        onError: (error) => {
          setError(error.response?.data?.error || 'Sign-up error');
        },
      }
    );
  };

  return (
    <>
      <header className='SignUp-header'>
        <img
          src="/Fountain official logo white txtAsset 3@4x-8.png"
          alt="Fountain FMCG Logo"
          className="fountain-logo"
          width={200}
          height={40}
        />
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
          <li className="navbar__item">
              <Link to="/signIn" className="navbar__link-normal log-in">LOG IN</Link>
            </li>
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
      <section className="SignUp">
        <div className="SignUp__container">
          <form onSubmit={handleSubmit} className="SignUp-Form">
            <h1 className="SignUp-title">Create Account</h1>
            <div className="detailsForSignUp">
              <label htmlFor="firstname" className="signUp-label">
                First Name
              </label>
              <input
                type="text"
                id="firstname"
                className="email-input"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="detailsForSignUp">
              <label htmlFor="lastName" className="signUp-label">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="email-input"
                required
              />
            </div>
            <div className="detailsForSignUp">
              <label htmlFor="userName" className="signUp-label">
                User Name
              </label>
              <input
                type="text"
                id="userName"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="email-input"
                required
              />
            </div>
            <div className="detailsForSignUp">
              <label htmlFor="email" className="signUp-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="email-input"
                required
              />
            </div>
            <div className="detailsForSignUp">
              <label htmlFor="password" className="signUp-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="password-input"
                required
              />
            </div>
            <button type="submit" className="signUp-btn" disabled={isLoading}>
              CREATE
            </button>
          </form>
          {isError && <p className="error">{error}</p>}
          {isSuccess && <p className="success">User signed up successfully!</p>}
        </div>
      </section>
    </>
  );
};

export default SignUp;
