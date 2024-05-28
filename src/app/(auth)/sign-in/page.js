'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AuthForm from '../../../components/AuthForm';
import { useAuth } from '../../../context/Authcontext';
import '../../../styles/Sign-in.modules.css';
import Link from 'next/link';
import Image from 'next/image';

const SignIn = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const { login } = useAuth();
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

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
        login(data.data.user, data.data.tokens.accessToken);
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
      <a href="#" className="header__logo">
        <Image
          src="/Fountain official logo white txtAsset 3@4x-8.png"
          alt="Fountain FMCG Logo"
          className='fountain-logo'
          width={200}
          height={40}
        />
      </a>

      <ul className="navbar__menu">
        <li className="navbar__item">
            <Link href="/" className="navbar__link">HOME</Link>
        </li>
        <li className="navbar__item">
          <Link href="/carabao" className="navbar__link">SHOP</Link>
        </li>
        <li className="navbar__item">
          <Link href="#footer" className="navbar__link">STORES</Link>
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
        <Link href="#" className="navbar__cta-btn">
          <Image
          src="/bx-cart.svg"
          className="navbar__cta-img"
          alt="cart icon"
          width={30}
          height={30}
          />
        </Link>
        <Link href="/sign-in" className="navbar__cta-btn">
          <Image
          src="/bx-user.svg"
          className="navbar__cta-img"
          alt='user icon'
          width={30}
          height={30}
          />
        </Link>
        <button className="navbar__cta-btn menu">
          <Image
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
