'use client'
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import "../styles/Distributor.modules.css";

const Distributor = () => {
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
    <section className="distributor">
      <motion.div
        ref={ref}
        className="distributor__container"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <motion.div className="distributor__content" variants={itemVariants}>
          <h2 className="distributor__title">Become a Licensed Distributor</h2>
          <p className="distributor__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum, dolor non ultricies posuere, lectus quam auctor urna, ac tincidunt nunc turpis a nunc. Sed id magna non nisl fringilla vestibulum. Nulla facilisi. Sed ut nunc at nunc ultricies lacinia. Nullam eget odio nec mi viverra aliquam. Sed nec nunc in purus tincidunt fermentum. Nulla facilisi.
          </p>
          <a href="/distributorForm" className="distributor__button">Apply Now</a>
        </motion.div>
        <motion.div className="distributor__image" variants={itemVariants}>
          <img
            src="/distributor.png"
            alt="distributor"
            className="distributor__img"
            width="370"
            height="380"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Distributor;
