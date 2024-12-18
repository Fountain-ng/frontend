import React from "react";
import Image from "next/image";
import Normalnavbar from "../../Nav-menu/Navbar-Green";
import Footer from "../../landing-page/Footer";
import "../../../styles/carabao-product.css";
import img from "../../../images/manholdingcarabao.png";
// import NormalArrowRightt from "@/icons/NormalArrowRight2";
import {
  askamaya,
  blenco,
  carabaoInfluencerImage,
  chandever,
  chopilos,
  clubLogo,
  coupleHoldingdrinks,
  drinkPack,
  ebeano,
  founder,
  four,
  journey,
  libraryLogo,
  one,
  passion,
  ritz,
  secretPalace,
  shoprite,
  star,
  teamImage,
  three,
  two,
  vodaBeach,
} from "@/images";
import NormalArrowLeftt from "@/icons/NormalArrowLeftt";

const Carabao = () => {
  return (
    <section>
      <div className="carabao">
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${img.src})`, // Correct way to reference the imported image
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "brightness(30%)",
            zIndex: -1, // Ensures it's behind content
          }}
        ></div>
        <Normalnavbar />
        <div className="carabao__container">
          <div className="carabao__content">
            <h1 className="carabao__content-title">CARABAO</h1>
            <p className="carabao__content-text">
              Experience the Energy of Carabao.
            </p>
          </div>
        </div>
        <div className="carabao-names-identity">
          <a href="/">HOME</a>
          <p>
            {" "}
            <NormalArrowLeftt />
          </p>
          <a href="/brand">OUR BRAND</a>
          <p className="carabao-names-identity_special">
            {" "}
            <NormalArrowLeftt />
          </p>
          <a href="/store" className="carabao-names-identity_special">
            STORES
          </a>
          <p className="carabao-names-identity_special">
            {" "}
            <NormalArrowLeftt />
          </p>
          <a href="/brand/carabao" className="carabao-names-identity_special">
            CARABAO
          </a>
        </div>
      </div>

      {/* CARABAO ABOUT */}
      <div className="carabao_about">
        <div className="carabao_about_container">
          <div className="carabao_about_container_text">
            <p>
              Carabao Energy Drink is a globally recognized brand, celebrated
              for its unique flavor, low-sugar formulation, and health benefits,
              including rich doses of B6 and B12 vitamins. With a Superior Taste
              Award from the International Tasting Institute, Carabao stands as
              a symbol of quality and vitality worldwide.
            </p>
          </div>
          <Image src={coupleHoldingdrinks} id="coupleHoldingdrink" alt="" />
        </div>
      </div>

      {/* CARABAO INFLUENCERS */}
      <div className="carabao_influencers">
        <div className="carabao_influencer_container">
          <div className="carabao_influencer_container_text">
            <p>
              In Nigeria, Carabao is more than a drink — it is a lifestyle
              choice, endorsed by renowned athletes like Alex Iwobi and Kelvin
              Bassey, whose strength and spirit reflect the Carabao values.
              Through our partnership, we’re bringing these values to every
              corner of the country.
            </p>
          </div>
          <Image src={carabaoInfluencerImage} id="coupleHoldingdrink" alt="" />
        </div>
      </div>

      {/* BRANDS SPONSOR */}

      <div className="brand__sponsor">
        <div className="brand__sponsor_container">
          <div>
            <Image src={shoprite} alt="" />
          </div>
          <div>
            <Image src={clubLogo} alt="" />
          </div>
          <div>
            <Image src={libraryLogo} alt="" />
          </div>
          <div>
            <Image src={blenco} alt="" />
          </div>
          <div>
            <Image src={chopilos} alt="" />
          </div>
          <div>
            <Image src={chandever} alt="" />
          </div>
          <div>
            <Image src={ritz} alt="" />
          </div>
          <div>
            <Image src={secretPalace} alt="" />
          </div>
          <div>
            <Image src={ebeano} alt="" />
          </div>
          <div>
            <Image src={askamaya} alt="" />
          </div>
          <div>
            <Image src={vodaBeach} alt="" />
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Carabao;
