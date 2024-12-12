import React from "react";
import Image from "next/image";
import Normalnavbar from "../Nav-menu/Navbar-Green";
import Footer from "../landing-page/Footer";
import '../../styles/distributorPage.css';
import NormalArrowRightt from "@/icons/NormalArrowRight2";
import { handshaking } from "@/images";

const OurDistributors = () => {
  return (
    <section>
      <div className="distributor_main">
        <Normalnavbar />
        <div className="distributor_main__container">
          <div className="distributor_main__content">
            <h1 className="distributor_main__content-title">DISTRIBUTORS</h1>
            <p className="distributor_main__content-text">
                Delivering quality, energy, and trust—your reliable partner for seamless distribution.
            </p>
          </div>
        </div>
        <div className="distributor_main-names-identity">
            <a href="/">HOME</a>
            <p> <NormalArrowRightt/></p>
            <a href="/">OUR SHOP</a>
            
            
        </div>
      </div>

      <div className="distributor_main__form">
        <div className="distributor_main__form_overall_header">
            <h1 className="distributor_main__form_header">BECOME</h1>
            <h1 className="distributor_main__form_header"><span><Image src={handshaking} className="hand_shaking_img" alt=""/></span> OUR</h1>
            <h1 className="distributor_main__form_header">PARTNER</h1>
        </div>
        <form className="distributor_main__form_class">
            <div className="distributor_main__form__input">
                <label htmlFor="full-name">Full name</label>
                <input type="text" placeholder="John Doe" title="Name" />
            </div>
            <div className="distributor_main__form__input">
                <label htmlFor="full-name">Email</label>
                <input type="text" placeholder="johndoe@gmail.com" />
            </div>
            <div className="distributor_main__form__input">
              <label htmlFor="phone-number">Phone number</label>
                <input type="text" placeholder="+1-0456" />
            </div>
            <div className="distributor_main__form__input">
              <label htmlFor="store-address">Store's Name</label>
                <input type="text" placeholder="Hakkunna Ventures" />
            </div>
            <div className="distributor_main__form__input">
                <label htmlFor="store-address">Store's address</label>
                <input type="text" placeholder="16 NY city, Lagos" />
            </div>
            <a href="" className="distributor_main__form__btn">BECOME OUR PARTNER</a>
        </form>
      </div>

    <Footer/>



    </section>
  );
};

export default OurDistributors;