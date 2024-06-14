'use client';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import React from 'react';
import '../styles/all-brands.modules.css';

const AllBrands = () => {
  return (
    <>
      <Navbar/>
      <main>
      <section className='all-brands-1'>
          <div className='all-brands__container-1'>
          </div>
          <div className='all-brands__content-1'>
            <h1 className='all-brands__header-1'>GET READY TO BRING IT ON!</h1>
            <h2 className='all-brands__title-1'>Carabao Energy Drink</h2>
            <Link to="/carabao-products" className='all-brands__btn-1'>BUY NOW</Link>
          </div>
        </section>
        <section className='all-brands-products'>
          <h1 className='all-brands-products__title'>OUR PRODUCTS</h1>
          <div className='all-brands-products__container'>
            <img
              src="/424428900_2489162597956505_8765206352264754478_n 1.png" 
              alt='Products'
              className='all-brands-img'
              width={350}
              height={350}
            />
            <div className='all-brands-head'>
              <h1 className='all-brands-products__header'>ORIGINAL</h1>
              <p className='all-brands-products__description'>
                Carabao Original is a refreshing and great tasting non-carbonated energy drink. Contains taurine, caffeine and B vitamins which replenishes energy and relieves fatigue. Niacin, pantothenic acid, vitamin B6 and vitamin B12 contribute to normal energy yielding metabolism and to the reduction of tiredness and fatigue.
              </p>
              <Link to="/carabao-products" className='all-brands-products__btn'>ORDER NOW</Link>
            </div>
          </div>
        </section>
        <section className='carabao-details'>
          <div className='carabao-details__container'>
            <div className='carabao-details__content'>
              <img
                src="/fruits.png"
                alt='Carabao energy fruits'
                width={120}
                height={120}
              />
              <p className='fruity-header'>Sparkling Fruity Flavours</p>
              <p className='fruity-name'>Five refreshingly light fruity flavours, each taste just like a soft drink!</p>
            </div>
            <div className='carabao-details__content'>
              <img
                src="/games.png"
                alt='Carabao energy fruits'
                width={120}
                height={120}
              />
              <p className='fruity-header'>Energy For All Occasions</p>
              <p className='fruity-name'>Pre-workout at the gym, coffee-substitute at a desk or mixer at a party!</p>
            </div>
            <div className='carabao-details__content'>
              <img
                src="/sugar.png"
                alt='Carabao energy fruits'
                width={120}
                height={120}
              />
              <p className='fruity-header'>Lower Sugar</p>
              <p className='fruity-name'>Carabao Energy Drink has no fat, low salt and lower sugar - half the sugar of traditional energy drinks.</p>
            </div>
            <div className='carabao-details__content'>
              <img
                src="/calorie.png"
                alt='Carabao energy fruits'
                width={120}
                height={120}
              />
              <p className='fruity-header'>Low Calorie Stimulation</p>
              <p className='fruity-name'>63 cal or less per can, so no guilt or hidden calories to ruin your diet or nutrition plan.</p>
            </div>
            <div className='carabao-details__content'>
              <img
                src="/bottle.png"
                alt='Carabao energy fruits'
                width={120}
                height={120}
              />
              <p className='fruity-header'>Energy Without Crash</p>
              <p className='fruity-name'>Get an energy boost without crash thanks to our unique formula of sugar, caffeine and B vitamins.</p>
            </div>
            <div className='carabao-details__content'>
              <img
                src="/check.png"
                alt='Carabao energy fruits'
                width={120}
                height={120}
              />
              <p className='fruity-header'>Vegetarian & Vegan Friendly</p>
              <p className='fruity-name'>Suitable for vegans and vegetarians as none of our ingredients are from animals or animal bi-products.</p>
            </div>
          </div>
        </section>
        {/* <section className='carabao'>
            <div className='carabao-cup'>
              <div className='carabao-cup-content'>
                <h1 className='carabao-cup-header'>IGNITE THE CARABAO SPIRIT IN YOU.</h1>
              </div>
            </div>
        </section> */}
        <section className='carabao-history'>
          <div className='carabao-history__container'>
            <div className='carabao-history__content'>
              <h1 className='carabao-history__header'>Coming Alive into the Culture</h1>
              <p className='carabao-history__description'>
              Fountain’s distinctive voice is informed by deep consumer insight and powered by precision marketing to ensure it connects with key cultural moments. In August 2023, Fountain launched its first nationwide campaign: Energy Unleashed. Inspired by the bold and invigorating Carabao Energy Drink, this campaign features some of the most influential local culture makers.</p>       
            </div>
            <div className='carabao-history__img'>
              <img
                src="/ai-gen.jpg"
                alt='Carabao energy drink'
                width={400}
                height={400}
              />
            </div>
          </div>
        </section>
        <section className='all-brands'>
          <div className='all-brands__container'>
            <div className='all-brands__content'>
              <img
                src='/efl_logo (2).png'
                alt='Carabao energy drink'
                className='efl-logo'
                width={400}
                height={400}
              />
              <div className='all-brands__text'>
                <h1 className='all-brands__header'>Carabao Cup</h1>
                <p className='all-brands__description'>
                Official partners of fountain beverages
                </p>
                <p className='all-brands__description-2'>We love football! That's why we're the proud partner of the Carabao Cup.</p>
                <Link to="#" className='all-brands__btn'>Learn more</Link>
              </div>
              <img
                src='/Untitled-3 (1).png'
                alt='Carabao energy drink'
                width={400}
                height={400}
              />
            </div>
          </div>
        </section>
        
        <footer className="all-brands-footer">
          <div className="all-brands-footer__container">
            <div className="all-brands-footer__content">
              <img
                src="/Fountain official logo dark txtAsset 4@4x-8 (1).png"
                alt="logo"
                width="180"
                height="40"
                className="footer__logo"
              />
              <p className="all-brands-footer__text">Copyright 2024 Fountain, Inc. Terms & Privacy</p>
            </div>
            <div className="all-brands-footer__content-2">
              <div className="all-brands-footer__blog">
                <p className="all-brands-footer__text">More on the blog</p>
                <Link to="#" target="_blank" rel="noreferrer">About Fountain</Link>
                <Link to="/carabao" target="_blank" rel="noreferrer">Products</Link>
                <Link to="/carabao-products" target="_blank" rel="noreferrer">Shop</Link>
              </div>
              <div className="all-brands-footer__jobs">
                <p className="all-brands-footer__text">More on Fountain</p>
                <Link to="#" target="_blank">The team</Link>
                <Link to="https://www.instagram.com/p/C6wKv9sIs8l/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" rel="noreferrer">Jobs</Link>
                <div className="all-brands-footer__socials">
                  <Link to="#" target="_blank" rel="noreferrer">
                    <img
                      src="/Group (5).svg"
                      alt="facebook"
                      width="24"
                      height="24"
                    />
                  </Link>
                  <Link to="#" target="_blank" rel="noreferrer">
                    <img
                      src="/Group (3).svg"
                      alt="twitter"
                      width="24"
                      height="24"
                    />
                  </Link>
                  <Link to="https://www.instagram.com/fountain.ng/" target="_blank" rel="noreferrer">
                    <img
                      src="/Group (4).svg"
                      alt="instagram"
                      width="24"
                      height="24"
                    />
                  </Link>
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
