import React, { useState } from 'react';
import { useLogin } from '../hooks/useLogin';
import '../styles/Sign-in.modules.css';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loginMutation = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    loginMutation.mutate({ email, password }, {
      onSuccess: (response) => {
        console.log('User logged in successfully:', response);
        const { accessToken, refreshToken } = response.data.tokens;
        console.log('Setting access token:', accessToken);
        console.log('Setting refresh token:', refreshToken);
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        window.location.href = '/';
      },
      onError: (error) => {
        console.error('Login failed:', error);
      }
    });
  };

  return (
    <>
    <header className='signIn-header'>
        <img
          src="/Fountain official logo white txtAsset 3@4x-8.png"
          alt="Fountain FMCG Logo"
          className='fountain-logo'
          width={200}
          height={40}
        />
      <ul className="navbar__menu-signIn">
        <li className="navbar__item-signIn">
            <Link to="/" className="navbar__link-signIn">HOME</Link>
        </li>
        <li className="navbar__item-signIn">
          <Link to="/carabao" className="navbar__link-signIn">SHOP</Link>
        </li>
        <li className="navbar__item-signIn">
          <Link to="#footer" className="navbar__link-signIn">STORES</Link>
        </li>
      </ul>

      <div className="navbar__cta">
        <Link to="#" className="navbar__cta-btn">
          <img
          src="/bx-cart.svg"
          className="navbar__cta-img"
          alt="cart icon"
          width={30}
          height={30}
          />
        </Link>
        <Link to="/signIn" className="navbar__cta-btn">
          <img
          src="/bx-user.svg"
          className="navbar__cta-img"
          alt='user icon'
          width={30}
          height={30}
          />
        </Link>
        <button className="navbar__cta-btn menu">
          <img
          src="/bx-menu.svg"
          className="navbar__cta-menu"
          alt='menu icon'
          width={30}
          height={30}
          />
        </button>
      </div>
    </header>
    <section className="SignIn">
      <div className="SignIn__container">
        <form onSubmit={handleSubmit} className="SignIn-form">
        <h1 className="title">SIGN IN</h1>
        <div className="email">
          <label htmlFor="email" className="email-label">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="email-input"
            required
          />
        </div>
        <div className="password">
          <label htmlFor="password" className="input-label">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="password-input"
            required
          />
        </div>
        <button type="submit" className="input-btn">SIGN IN</button>
        <Link to="/SignUp" className="create">Create account</Link>
      </form>
      </div>
    </section>
    </>
  );
};

export default SignIn;



