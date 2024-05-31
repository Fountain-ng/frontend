import {Link} from 'react-router-dom';
import '../styles/AuthForm.modules.css';
import React from 'react';

const AuthForm = ({ title, email, setEmail, password, setPassword, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="form">
      <h1 className="title">{title}</h1>
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
  );
};

export default AuthForm;