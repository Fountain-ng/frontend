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
          <p className="hero__description">Welcome to Fountain</p>
        </div>
        <h1 className="hero__title">Refreshing Moments Await with Fountain Beverages</h1>
        
        <a href="#services" className="hero__cta">
        <img
          src="/bx-down-arrow-alt.svg"
          className="hero__cta-img"
          alt="down arrow"
          width={30}
          height={30}
        />
        </a>
      </div>
    </section>
  );
};

export default Hero;