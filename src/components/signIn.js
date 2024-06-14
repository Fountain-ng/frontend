import React, { useState} from 'react';
import { useLogin } from '../hooks/useLogin';
import '../styles/Sign-in.modules.css';
import { Link } from 'react-router-dom';
import GreenNavbar from './Navbar-Green';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loginMutation = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    loginMutation.mutate({ email, password }, {
      onSuccess: (response) => {
        const { accessToken, refreshToken } = response.data.tokens;
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
    <GreenNavbar></GreenNavbar>
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



