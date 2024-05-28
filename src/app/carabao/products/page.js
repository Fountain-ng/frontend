'use client';
import '../../../styles/carabao-product.modules.css';
import Image from 'next/image';

import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
const CarabaoProducts = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header>
        <div className='carabao-fountain'>
          <Image
            src="/Fountain official logo white txtAsset 3@4x-8.png"
            alt="Fountain FMCG Logo"
            className='fountain-logo'
            width={200}
            height={40}
          />
        </div>

        <ul className={`navbar__menu-logout ${isMenuOpen ? 'navbar__menu--open' : ''}`}>
          <li className="navbar__item-logout">
            <Link href="/" className="navbar__link-logout">HOME</Link>
          </li>
          <li className="navbar__item">
            <Link href="/carabao" className="navbar__link-logout">SHOP</Link>
          </li>
          <li className="navbar__item">
            <Link href="#" className="navbar__link-logout">STORES</Link>
          </li>
        </ul>

        <div className="navbar__cta-logout">
          <Link href="#" className="navbar__cta-btn">
            <Image
              src="/bx-cart.svg"
              className="navbar__cta-img-logout"
              alt='cart icon'
              width={30}
              height={30}
            />
          </Link>
          <button className="navbar__cta-btn-menu-logout" onClick={handleMenuToggle}>
            {isMenuOpen ? (
              <Image
                src="/bx-x.svg"
                alt="Menu close button"
                width={30}
                height={30}
              />
            ) : (
              <Image
                src="/bx-menu.svg"
                alt="Menu toggle button"
                width={30}
                height={30}
              />
            )}
          </button>
        </div>
      </header>
      <section className="carabao-real">
        <motion.div
          ref={ref}
          className="carabao-real__container"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.div className="carabao-real__img" variants={itemVariants}>
            <Image
              src="/drink-pack-2.png"
              className='drink-pack-2'
              alt="Carabao Energy Drink"
              width={500}
              height={450}
            />
          </motion.div>
          <motion.div className="carabao-real__content" variants={itemVariants}>
            <h1 className="carabao-real__title">CARABAO ENERGY DRINK ORIGINAL (330ML CAN)</h1>
            <p className="carabao-real__price"><span className="price-span">N2000.00</span>N1500.00</p>
            <p className="carabao-real__size">Can Pack Size</p>
            <div className="carabao-real__quantity">
              <select className="carabao-real__select">
                <option value="1">24 x 300ml</option>
                <option value="2">36 x 300ml</option>
                <option value="3">48 x 300ml</option>
                <option value="4">60 x 300ml</option>
                <option value="5">72 x 300ml</option>
                <option value="6">90 x 300ml</option>
              </select>
            </div>
            <label htmlFor="quantity">Qty</label>
            <input type="number" id="quantity" name="quantity" min="2" max="100" required></input>
            <div className="carabao-real__cta">
              <a href='#' className="carabao-real__cta-btn">ADD TO CART</a>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}

export default CarabaoProducts;
