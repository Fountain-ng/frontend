'use client'
import { useState } from "react";
import "../styles/Services.modules.css";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Services = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="services" id="services">
      <motion.div
        ref={ref}
        className="services__container"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <motion.div className="services__container-1" variants={itemVariants}>
          <div className="services__container-1-1">
            <img
              src="/remove-outline.svg"
              alt="Fountain Beverages"
              className="services__container-1-img"
              width={80}
              height={60}
            />
            <h2 className="services__title">ABOUT US</h2>
          </div>
          <h1 className="services__container-1-description">What are we <br /> about?</h1>
          <p className="services__container-1-text">
            At Fountain, we are dedicated to energizing your life with
            premium energy drinks that embody vitality, adventure, and passion. Our mission is to empower individuals
            to embrace life's adventures with gusto, providing the energy and vitality needed to pursue their passions
            and dreams.
          </p>
        </motion.div>
        <motion.div className="services__container-2" variants={itemVariants}>
          <img
            src="/01.png"
            alt="Fountain Beverages"
            className="services__container-2-img"
            width={400}
            height={430}
          />
        </motion.div>
        <motion.div className="services__container-3" variants={itemVariants}>
          <img
            src="/04.png"
            alt="Love for Nature"
            className="services__container-3-img"
            width={400}
            height={430}
          />
        </motion.div>
        <motion.div className="services__container-4" variants={itemVariants}>
          <div className="services__container-4-4">
            <img
              src="/remove-outline.svg"
              alt="Fountain Beverages"
              className="services__container-4-img"
              width={80}
              height={80}
            />
            <h2 className="services__title">OUR SERVICES</h2>
          </div>
          <h1 className="services__container-1-description">What we offer?</h1>
          <p className="services__container-1-text">
            Fountain offers a diverse selection of premium energy drinks, each meticulously
            curated to provide the ultimate boost of energy, focus, and vitality. We are committed
            to ensuring the highest standards of quality, with rigorous testing and evaluation processes
            for every product.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;

