'use client';

import React from "react";
import "../styles/Hero.modules.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <div className="hero__img">
          <img
            src="/remove-outline.svg"
            alt="Fountain Beverages"
            width={80}
            height={80}
          />
          <p className="hero__description">
          Welcome to Fountain
          </p>
      </div>
      <h1 className="hero__title">Refreshing Moments Await with Fountain Beverages</h1>
      </div>
    </section>
  );
};

export default Hero;