// src/app/page.js
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Ourservices';
import Products from '../components/Products';
import Distributor from '@/components/Distributor';
import Brands from '../components/brands';
import Footer from '../components/Footer';

export default function HomePage() {
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
}
