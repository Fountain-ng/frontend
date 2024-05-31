import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.modules.css";

const Footer = () => {
  return (
    <footer className="landing-footer">
      <div className="footer__container">
        <div className="footer__content">
          <img
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
          <Link to="#" target="_blank" rel="noreferrer">About Fountain</Link>
          <Link to="#" target="_blank" rel="noreferrer">Products</Link>
          <Link to="#" target="_blank" rel="noreferrer">Shop</Link>
          </div>
          <div className="footer__jobs">
            <p className="footer__text">More on Fountain</p>
              <Link to="#" target="_blank">The team</Link>
              <Link to="#" target="_blank" rel="noreferrer">Jobs</Link>
              <div className="footer__socials">
              <Link to="#" target="_blank" rel="noreferrer">
                <img
                  src="/Group.svg"
                  alt="facebook"
                  width="20"
                  height="20"
                />
              </Link>
              <Link to="#" target="_blank" rel="noreferrer">
                <img
                  src="/Group (1).svg"
                  alt="twitter"
                  width="20"
                  height="20"
                />
              </Link>
              <Link to="#" target="_blank" rel="noreferrer">
                <img
                  src="/Group (2).svg"
                  alt="instagram"
                  width="20"
                  height="20"
                />
              </Link>
          </div>
          </div>
          </div>
      </div>
    </footer>
  );
};

export default Footer;