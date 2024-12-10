'use client';
import ArrowRight from "@/icons/Arrowright";
import ArrowDown from "@/icons/Arrowdown";
import ArrowLeft from "@/icons/Arrowleft";
import ArrowUp from "@/icons/Arrowup";
import "../../styles/Product.css"
import { drinkPack } from "@/images";
import Image from "next/image";

const Products = () => {

  return (
    <section className="product">
      <div className="product__title">
        <h1 className="product__title_text">CHOOSE QUALITY, CHOOSE FOUNTAIN</h1>
      </div>
      <div className="product__container">
        <div className="product__content-1">
          <div className="product__content-text">
            <span className="product__content-number">01</span>
            <div className="product_content-text-main">
              <h1 className="product__heading">Nationwide Delivery</h1>
              <p className="product__description">Fast, reliable delivery across Nigeria.</p>
            </div>
          </div>
          <div className="product__content-text">
            <span className="product__content-number">03</span>
            <div className="product_content-text-main">
              <h1 className="product__heading">Store Locator</h1>
              <p className="product__description">Find our products at a store near you.</p>
            </div>
          </div>
        </div>


        <div className="column">
          <div className="product_arrows">
            <ArrowUp />
            <ArrowDown />
          </div>
          <div className="product__content-img">
            <Image
              src={drinkPack}
              alt="Carabao Energy Drink Original"
              width={452}
              height={336}
            />
          </div>
          <div className="product_arrows">
            <ArrowRight />
            <ArrowLeft />
          </div>
        </div>
        <div className="product__content-1">
          <div className="product__content-text">
            <div className="product_content-text-main">
              <h1 className="product__heading">Wholesale Distribution</h1>
              <p className="product__description">Partner with us for wholesale order and bulk supplies.</p>
            </div>
            <span className="product__content-number">02</span>
          </div>
          <div className="product__content-text">
            <div className="product_content-text-main">
              <h1 className="product__heading">Happy Customers</h1>
              <p className="product__description">Ensure smooth experience every step of the way.</p>
            </div>
            <span className="product__content-number">04</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
