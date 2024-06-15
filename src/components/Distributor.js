'use client'
import React from 'react';
import { Link } from "react-router-dom";
import "../styles/Distributor.modules.css";

const Distributor = () => {
  return (
    <section className="distributor">
      <div className="distributor__container">
        <div className="distributor__content">
          <h2 className="distributor__title">Become a Licensed Distributor</h2>
          <p className="distributor__text">
          Join our dynamic network of distributors and be at the forefront of the booming energy drink industry! As a licensed distributor, you'll gain exclusive access to our high-demand products, enjoy competitive pricing, and receive robust support to help grow your business. Benefit from our brand's strong market presence, innovative marketing strategies, and dedicated customer service. Partner with us and energize your entrepreneurial journey. Get started today and be a key player in bringing our premium energy drinks to consumers everywhere!          </p>
          <Link to="#" className="distributor__button">Apply Now</Link>
        </div>
        <div className="distributor__image">
          <img
            src="/fountain-image2.jpg"
            alt="distributor"
            className="distributor__img"
            width="370"
            height="380"
          />
        </div>
      </div>
    </section>
  );
};

export default Distributor;
