'use client';
import { useState } from 'react';
import AuthForm from './AuthForm';
// import { useAuth } from '../context/Authcontext';
import '../styles/Sign-in.modules.css';
import {Link} from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  // const { login } = useAuth();
  const [password, setPassword] = useState('');
  const [setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    console.log('Form submitted');
    try {
      const response = await fetch('http://localhost:8080/api/v1/auth/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      console.log("API response:", data); 
      if (data.message === "Login successful.") {
        // login(data.data.user, data.data.tokens.accessToken);
      } else {
        setError(data.error);
      }
    } catch (error) {
      setError('An unexpected error occurred.');
      console.error("An unexpected error occurred:", error);
    }
  };

  return (
    <>
    <header>
      <Link to="#" className="header__logo">
        <img
          src="/Fountain official logo white txtAsset 3@4x-8.png"
          alt="Fountain FMCG Logo"
          className='fountain-logo'
          width={200}
          height={40}
        />
      </Link>

      <ul className="navbar__menu">
        <li className="navbar__item">
            <Link to="/" className="navbar__link">HOME</Link>
        </li>
        <li className="navbar__item">
          <Link to="/carabao" className="navbar__link">SHOP</Link>
        </li>
        <li className="navbar__item">
          <Link to="#footer" className="navbar__link">STORES</Link>
        </li>
      </ul>

      <div className="navbar__cta">
        {/* <Link href="#" className="navbar__cta-btn">
          <Image 
          src="/bx-search.svg"
          className="navbar__cta-img"
          width={30}
          height={30}
          />
        </Link> */}
        <Link to="#" className="navbar__cta-btn">
          <img
          src="/bx-cart.svg"
          className="navbar__cta-img"
          alt="cart icon"
          width={30}
          height={30}
          />
        </Link>
        <Link to="/sign-in" className="navbar__cta-btn">
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
        <AuthForm
          title="Login"
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleSubmit={handleSubmit}
        />
      </div>
    </section>
    </>
  );
};

export default SignIn;
