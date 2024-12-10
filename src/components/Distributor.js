'use client'
import React from 'react';
import "../styles/Distributor.modules.css";

const Distributor = () => {
  return (
    <section className="distributor">
      <div className="distributor__container">
        <h2 className="distributor__title">Fuel Your Day with Carabao</h2>
        <div className="distributor__content">
          <div className='distributor__content-real'>
            <div className='distributor__content-sign'>
              <div className='sign'><span><img src='/icons/dot.png' alt='sign'></img></span><p className='sign-text'>Boost your energy with every sip, wherever you go.</p></div>
              <div className='sign'><span><img src='/icons/dot.png' alt='sign'></img></span><p className='sign-text'>Power through your busiest days with a refreshing.</p></div>
              <div className='sign'><span><img src='/icons/dot.png' alt='sign'></img></span><p className='sign-text'>Tropical flavors —stay energized, stay focused.</p></div>
            </div>
            <a href='/' className='distributor__button'>
              <p>LEARN MORE ABOUT CARABAO</p>
            </a>
          </div>
          <div className='distributor__content-img-main'>
            <div className='distributor__content-img'>
              <img src='/Frame 1522851622.png' alt='Carabao Energy Drink Original' width={260} height={300} />
              <img src='/Frame 1522851621.png' alt='Carabao Energy Drink Original' width={178} height={208} />
              <img src='/Frame 1522851620.png' alt='Carabao Energy Drink Original' width={150} height={208} />
            </div>
            <div className='distributor__content-img-slider'>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Distributor;
