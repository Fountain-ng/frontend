"use client";
import React, { useState } from "react";
import { useSignup } from "../hooks";
import "../styles/Sign-up.modules.css";
import GreenNavbar from "./Navbar-Green";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const { mutate: signup, isLoading, isError, isSuccess } = useSignup();

  const handleSubmit = (event) => {
    event.preventDefault();
    signup(
      { firstName, lastName, userName, email, password },
      {
        onSuccess: (data) => {
          console.log("User signed up successfully:", data);
          window.location.href = "/";
        },
        onError: (error) => {
          setError(error.response?.data?.error || "Sign-up error");
        },
      }
    );
  };

  return (
    <>
      <GreenNavbar></GreenNavbar>
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
