'use client';

import React from "react";
import Image from 'next/image';
import "../styles/Hero.modules.css";
import SplitStringUsingRegex from "@/utils/splittextspring";
import {motion, variants} from "framer-motion";

const Hero = () => {

  const charVariants = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1, transition: { duration: 1 } }
  }
  const headingChars = SplitStringUsingRegex("Refreshing Moments Await with Fountain Beverages");
  const textChars = SplitStringUsingRegex("Welcome to Fountain");

  return (
    <motion.section className="hero">
      <div className="hero__content">
        <div className="hero__img">
          <Image
            src="/remove-outline.svg"
            alt="Fountain Beverages"
            width={80}
            height={80}
          />
          <motion.p className="hero__description"
          initial="hidden"
          whileInView= "reveal"
          transition={{ staggerChildren: .01}}
          >
          {textChars.map((char, index) => (
            <motion.span
              key={index}
              variants={charVariants}  
            >
              {char}
            </motion.span>
          ))}
        </motion.p>
      </div>
      <motion.h1 className="hero__title"
      initial="hidden"
      whileInView= "reveal"
      transition={{ staggerChildren: .02}}
      >
        {headingChars.map((char, index) => (
          <motion.span
            key={index}
            variants={charVariants}
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>
        
        <a href="#services" className="hero__cta">
        <Image
          src="/bx-down-arrow-alt.svg"
          className="hero__cta-img"
          alt="down arrow"
          width={30}
          height={30}
        />
        </a>
      </div>
    </motion.section>
  );
};

export default Hero;