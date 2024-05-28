import React from "react";
import "../styles/Footer.modules.css";
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <Image
            src="/Fountain official logo white txtAsset 3@4x-8.png"
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
                <Image
                  src="/Group.svg"
                  alt="facebook"
                  width="20"
                  height="20"
                />
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <Image
                  src="/Group (1).svg"
                  alt="twitter"
                  width="20"
                  height="20"
                />
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <Image
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
  );
};

export default Footer;