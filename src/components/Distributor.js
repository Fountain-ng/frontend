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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum, dolor non ultricies posuere, lectus quam auctor urna, ac tincidunt nunc turpis a nunc. Sed id magna non nisl fringilla vestibulum. Nulla facilisi. Sed ut nunc at nunc ultricies lacinia. Nullam eget odio nec mi viverra aliquam. Sed nec nunc in purus tincidunt fermentum. Nulla facilisi.
          </p>
          <Link to="/distributorForm" className="distributor__button">Apply Now</Link>
        </div>
        <div className="distributor__image">
          <img
            src="/distributor.png"
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
