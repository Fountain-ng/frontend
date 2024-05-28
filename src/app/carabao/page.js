'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import '../../styles/all-brands.modules.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AllBrands = () => {
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
    console.log("isMenuOpen:", !isMenuOpen);
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header>
        <div className='carabao-fountain'>
          <img
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
            <Link href="#footer" className="navbar__link-logout">STORES</Link>
          </li>
        </ul>

        <div className="navbar__cta-logout">
          <Link href="#" className="navbar__cta-btn">
            <img
              src="/bx-cart.svg"
              className="navbar__cta-img-logout"
              alt='cart icon'
              width={30}
              height={30}
            />
          </Link>
          <button className="navbar__cta-btn-menu-logout" onClick={handleMenuToggle}>
            {isMenuOpen ? (
              <img
                src="/bx-x.svg"
                alt="Menu close button"
                width={30}
                height={30}
              />
            ) : (
              <img
                src="/bx-menu.svg"
                alt="Menu toggle button"
                width={30}
                height={30}
              />
            )}
          </button>
        </div>
      </header>
      <main>
        <section className='all-brands'>
          <motion.div
            ref={ref}
            className='all-brands_container'
            initial="hidden"
            animate={controls}
            variants={containerVariants}
          >
            <motion.div className='all-brands__content' variants={itemVariants}>
              <img
                src='/text-on-banner.png'
                alt='Carabao logo'
                className='brand-main-img'
                width={500}
                height={200}
              />
              <a href='/carabao/products' className='all-brands__cta'>VIEW PRODUCTS</a>
            </motion.div>
            <motion.div className='all-brands__brands' variants={itemVariants}>
              <motion.img
                src='/double.png'
                alt='Product image'
                className='carabao_product_image_new'
                width={450}
                height={450}
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
            </motion.div>
          </motion.div>
        </section>
        <section className='all-brands-products'>
          <h1 className='all-brands-products__title'>OUR PRODUCTS</h1>
          <div className='all-brands-products__container'>
            <motion.img
              src='/download.png'
              alt='Product image'
              className='all-brands-img'
              width={350}
              height={350}
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
            <div className='all-brands-head'>
              <h1 className='all-brands-products__header'>ORIGINAL</h1>
              <p className='all-brands-products__description'>
                Carabao Original is a refreshing and great tasting non-carbonated energy drink. Contains taurine, caffeine and B vitamins which replenishes energy and relieves fatigue. Niacin, pantothenic acid, vitamin B6 and vitamin B12 contribute to normal energy yielding metabolism and to the reduction of tiredness and fatigue.
              </p>
            </div>
          </div>
        </section>
        <section className='carabao-details'>
          <div className='carabao-details__container'>
            <motion.div className='carabao-details__content' variants={itemVariants}>
              <img
                src="/fruits.png"
                alt='Carabao energy fruits'
                width={120}
                height={120}
              />
              <p className='fruity-header'>Sparkling Fruity Flavours</p>
              <p className='fruity-name'>Five refreshingly light fruity flavours, each taste just like a soft drink!</p>
            </motion.div>
            <motion.div className='carabao-details__content' variants={itemVariants}>
              <img
                src="/games.png"
                alt='Carabao energy fruits'
                width={120}
                height={120}
              />
              <p className='fruity-header'>Energy For All Occasions</p>
              <p className='fruity-name'>Pre-workout at the gym, coffee-substitute at a desk or mixer at a party!</p>
            </motion.div>
            <motion.div className='carabao-details__content' variants={itemVariants}>
              <img
                src="/sugar.png"
                alt='Carabao energy fruits'
                width={120}
                height={120}
              />
              <p className='fruity-header'>Lower Sugar</p>
              <p className='fruity-name'>Carabao Energy Drink has no fat, low salt and lower sugar - half the sugar of traditional energy drinks.</p>
            </motion.div>
            <motion.div className='carabao-details__content' variants={itemVariants}>
              <img
                src="/calorie.png"
                alt='Carabao energy fruits'
                width={120}
                height={120}
              />
              <p className='fruity-header'>Low Calorie Stimulation</p>
              <p className='fruity-name'>63 cal or less per can, so no guilt or hidden calories to ruin your diet or nutrition plan.</p>
            </motion.div>
            <motion.div className='carabao-details__content' variants={itemVariants}>
              <img
                src="/bottle.png"
                alt='Carabao energy fruits'
                width={120}
                height={120}
              />
              <p className='fruity-header'>Energy Without Crash</p>
              <p className='fruity-name'>Get an energy boost without crash thanks to our unique formula of sugar, caffeine and B vitamins.</p>
            </motion.div>
            <motion.div className='carabao-details__content' variants={itemVariants}>
              <img
                src="/check.png"
                alt='Carabao energy fruits'
                width={120}
                height={120}
              />
              <p className='fruity-header'>Vegetarian & Vegan Friendly</p>
              <p className='fruity-name'>Suitable for vegans and vegetarians as none of our ingredients are from animals or animal bi-products.</p>
            </motion.div>
          </div>
        </section>
        <footer className="footer">
          <div className="footer__container">
            <div className="footer__content">
              <img
                src="/Fountain official logo dark txtAsset 4@4x-8 (1).png"
                alt="logo"
                width="180"
                height="40"
                className="footer__logo"
              />
              <p className="footer__text">Copyright 2024 Fountain, Inc. Terms & Privacy</p>
            </div>
            <div className="footer__content-2">
              <div className="footer__blog">
                <p className="footer__text">More on the blog</p>
                <a href="#" target="_blank" rel="noreferrer">About Fountain</a>
                <a href="#" target="_blank" rel="noreferrer">Products</a>
                <a href="#" target="_blank" rel="noreferrer">Shop</a>
                <a href="#" target="_blank" rel="noreferrer"></a>
                <a href="#" target="_blank" rel="noreferrer"></a>
              </div>
              <div className="footer__jobs">
                <p className="footer__text">More on Fountain</p>
                <a href="#" target="_blank">The team</a>
                <a href="#" target="_blank" rel="noreferrer">Jobs</a>
                <a href="#" target="_blank" rel="noreferrer">Shop</a>
                <a href="#" target="_blank" rel="noreferrer">Press</a>
                <div className="footer__socials">
                  <a href="#" target="_blank" rel="noreferrer">
                    <img
                      src="/Group.svg"
                      alt="facebook"
                      width="20"
                      height="20"
                    />
                  </a>
                  <a href="#" target="_blank" rel="noreferrer">
                    <img
                      src="/Group (1).svg"
                      alt="twitter"
                      width="20"
                      height="20"
                    />
                  </a>
                  <a href="#" target="_blank" rel="noreferrer">
                    <img
                      src="/Group (2).svg"
                      alt="instagram"
                      width="20"
                      height="20"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

export default AllBrands;
