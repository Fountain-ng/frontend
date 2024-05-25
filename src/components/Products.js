import React from "react";
import "../styles/Product.modules.css";

const Products = () => {
  return (
    <section className="product">
      <div className="product__title">
        <h1>Our Products</h1>
      </div>
      <div className="product__btns">
        <a href="#" className="product__btn">
          <img
            src="/bx-chevron-left.svg"
            className="product__btn-img"
            alt="Previous"
            width={35}
            height={35}
          />
        </a>
        <a href="#" className="product__btn">
          <img
            src="/bx-chevron-right.svg"
            className="product__btn-img"
            alt="Next"
            width={35}
            height={35}
          />
        </a>
      </div>
      <div className="product__body-img">
      </div>
      <div className="product__container">
        <div className="product__content">
          <h1 className="product__heading">Carabao Energy Drink Original</h1>
          <p className="product__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      <div className="column">
      <div className="product__content-img">
        <div className="product__img">
          <img
            src="/drink.png"
            alt="Carabao Energy Drink Original"
            width={300}
            height={300}
          />
        </div>
        <p className="product__name">Carabao Energy Drink</p>
      </div>
        <a href="/carabao" className="product__cta">SHOP NOW</a>
      </div>
      </div>
    </section>
  );
};

export default Products;


