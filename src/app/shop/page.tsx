"use client";
import React from "react";
import { useState } from "react";
import "../../styles/shop.css";
import Image from "next/image";
import Footer from "../landing-page/Footer";
import NormalArrowLeftt from "@/icons/NormalArrowLeftt";
import img from "../../images/shopBackgroundImg.png";
import Normalnavbar from "../Nav-menu/Navbar-Green";
import { singleCarabaoDrink } from "@/images";

const Shop = () => {
  const [quantity, setQuantity] = useState(1); // State to track quantity
  const [showModal, setShowModal] = useState(true);
  const pricePerUnit = 10000; // Set the price per unit product

  // Handlers for increment and decrement
  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <section className={`${showModal ? "shop__bg_modal" : ""}`}>
      <div className="shop">
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${img.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: -1,
          }}
        ></div>
        <Normalnavbar />
        <div className="shop__container">
          <div className="shop__content">
            <h1 className="shop__content-title">OUR SHOP</h1>
            <p className="shop__content-text">
              Start exploring our stores near you and let us serve you.
            </p>
          </div>
        </div>
        <div className="shop-names-identity">
          <p>
            {" "}
            <NormalArrowLeftt />
          </p>
          <a href="/">HOME</a>
        </div>
      </div>

      <div className="shop__store_selection">
        <div className="shop__store_selection__container">
          <div className="shop__store_selection__content">
            <h1 className="shop__store_selection__content-title">CATEGORIES</h1>
            <p className="shop_special">ALL PRODUCTS</p>
            <p className="shop__store_selection__content-text">CARABAO</p>
          </div>
          <div className="shop__store_selection__content_product">
            <Image
              src={singleCarabaoDrink}
              className="shop__store_selection__content_product_image"
              alt=""
            />
            <div className="shop__store_selection__content_product__text">
              <h1>ORIGINAL</h1>
              <p>12 Packs</p>
              <div className="shop__store_selection__content_product__container">
                <div className="shop__store_selection__content_product__counter">
                  <button
                    className="shop__store_selection__content_product__counter__btn"
                    onClick={decrement}
                  >
                    -
                  </button>
                  <span
                    style={{
                      margin: "0 10px",
                      fontSize: "16px",
                      fontWeight: "bold",
                    }}
                  >
                    {quantity}
                  </span>
                  <button
                    className="shop__store_selection__content_product__counter__btn"
                    onClick={increment}
                  >
                    +
                  </button>
                </div>
                <span className="shop__store_selection__content_product__container_price">
                  ₦{(pricePerUnit * quantity).toLocaleString()}
                </span>
              </div>
              <button
                onClick={() => {
                  setShowModal(true);
                }}
                className="shop_btn"
              >
                ORDER NOW
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <div
        className={`${showModal ? "shop__modal_open" : "shop__modal_close"}`}
      >
        <div>
          <p>You will be redirected to WhatsApp to complete your order.</p>
          <div className="shop__modal_open_buttons">
            <button
              onClick={() => {
                setShowModal(false);
              }}
            >
              Cancel
            </button>
            <button
              onClick={() => {
                const phoneNumber = "+2348116604581";
                const message = `Hi fountain, I will like to get ${quantity} pack(s) of carabao drink.`;
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                  message
                )}`;
                window.location.href = whatsappUrl;
              }}
            >
              Okay
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
