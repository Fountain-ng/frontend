import React from 'react';
import Navbar from "./Nav-menu/Navbar";
import Hero from './landing-page/Hero';
import Services from './landing-page/Ourservices';
import Products from './landing-page/Products';
import Learn from './landing-page/Learn';
import Locator from './landing-page/storeLocator';
import Partner from './landing-page/Partner';
import FountainFamily from './landing-page/Family';
import Testimonies from './landing-page/testimonies';
import Sponsors from './landing-page/sponsors';
import Footer from './landing-page/Footer';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Products />
      <Learn />
      <Locator />
      <Partner />
      <Testimonies />
      <FountainFamily />
      <Sponsors />
      <Footer />
    </>
  );
};

export default HomePage;

