'use client';

import React from "react";
import "../../styles/Hero.css";
import img from "../../images/herobackgroundImg.png";
import Image from 'next/image';
import { mainheroImg } from "@/images";

const Hero = () => {
  return (
    <section className="hero">
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${img.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(10%)',
          zIndex: -1, 
        }}
      ></div>
      <div className="hero__content">
        <div className="hero_content_text">
          <h1 className="hero__title">Fuel your day with <span className="cursive">quality</span></h1>
          <p className="hero__description">We are the missing piece to finding products that elevate your everyday experience.</p>
        </div>
        <div className="hero__img">
          <Image
            src={mainheroImg}
            className="hero__real__img"
            alt="Main Hero Image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
