import React from "react";
import Image from "next/image";
import Normalnavbar from "../Nav-menu/Navbar-Green";
import Footer from "../landing-page/Footer";
import img from "../../images/distributorBackgroundImage.jpeg";
import '../../styles/distributorPage.css';
import NormalArrowRightt from "@/icons/NormalArrowRight2";
import { handshaking } from "@/images";

const OurDistributors = () => {
  return (
    <section>
      <div className="distributor_main">
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${img.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: 'brightness(30%)',
            zIndex: -1,
          }}
        ></div>
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
            <a href="/shop">OUR SHOP</a>
            
            
        </div>
      </div>

      <div className="distributor_main__form">
        <div className="distributor_main__form_overall_header">
            <h1 className="distributor_main__form_header">BECOME</h1>
            <h1 className="distributor_main__form_header">OUR</h1>
            <h1 className="distributor_main__form_header">PARTNER</h1>
        </div>
        <form className="distributor_main__form_class">
            <div className="distributor_main__form__input">
                <label htmlFor="full-name" className="distributor_main__form__input_name">Full name</label>
                <input type="text" placeholder="" title="Name" />
            </div>
            <div className="distributor_main__form__input">
                <label htmlFor="full-name" className="distributor_main__form__input_name">Email</label>
                <input type="text" placeholder="" />
            </div>
            <div className="distributor_main__form__input">
              <label htmlFor="phone-number" className="distributor_main__form__input_name">Phone number</label>
                <input type="text" placeholder="" />
            </div>
            <div className="distributor_main__form__input">
              <label htmlFor="store-address" className="distributor_main__form__input_name">Store's Name</label>
                <input type="text" placeholder="" />
            </div>
            <div className="distributor_main__form__input">
                <label htmlFor="store-address" className="distributor_main__form__input_name">Store's address</label>
                <input type="text" placeholder="" />
            </div>
            <a href="" className="distributor_main__form__btn">BECOME OUR PARTNER</a>
        </form>
      </div>

    <Footer/>



    </section>
  );
};

export default OurDistributors;