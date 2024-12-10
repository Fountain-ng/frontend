import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Services from './Ourservices';
import Products from './Products';
import Distributor from './Distributor';
import Brands from './Brands';
import Footer from './Footer';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Products />
      <Distributor />
      <Brands />
      <Footer />
    </>
  );
};

export default HomePage;
