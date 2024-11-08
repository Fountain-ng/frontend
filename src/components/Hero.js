'use client';

import React from "react";
import "../styles/Hero.modules.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <div className="hero_content_text">
          <h1 className="hero__title">Fuel your day with <span className="cursive">quality</span></h1>
          <p className="hero__description">We are the missing piece to finding products that elevate your everyday experience.</p>
        </div>
        <div className="hero__img">
          <img
            src="/video.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;