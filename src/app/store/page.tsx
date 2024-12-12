import React from "react";
import Image from "next/image";
import Normalnavbar from "../Nav-menu/Navbar-Green";
import Footer from "../landing-page/Footer";
import '../../styles/store.css';
import NormalArrowRightt from "@/icons/NormalArrowRight2";
import Locator from "../landing-page/storeLocator";
import NormalArrowLeftt from "@/icons/NormalArrowLeftt";

const Store = () => {
  return (
    <section>
      <div className="store_main">
        <Normalnavbar />
        <div className="store__container">
          <div className="store__content">
            <h1 className="store__content-title">OUR STORES</h1>
            <p className="store__content-text">
            Start exploring our stores near you and let us serve you.
            </p>
          </div>
        </div>
        <div className="store-names-identity">
            <p> <NormalArrowLeftt/></p>
            <a href="/">HOME</a>
            
        </div>
      </div>


    <Locator/>
    <Footer/>



    </section>
  );
};

export default Store;