'use client';
import "../styles/Product.modules.css";
import { Link } from "react-router-dom";

const Products = () => {
  const isDisabled = true;

  return (
    <section className="product">
      <div className="product__title">
        <h1>Our Products</h1>
      </div>
      <div className="product__btns">
      <Link to="#" className={`product__btn ${isDisabled ? 'product__btn--disabled' : ''}`}>
        <img
          src="/bx-chevron-left.svg"
          className="product__btn-img"
          alt="Previous"
          width={35}
          height={35}
        />
      </Link>
      <Link to="#" className={`product__btn ${isDisabled ? 'product__btn--disabled' : ''}`}>
        <img
          src="/bx-chevron-right.svg"
          className="product__btn-img"
          alt="Next"
          width={35}
          height={35}
        />
      </Link>
    </div>
      <div
        className="product__container"
      >
        <div className="product__content">
          <h1 className="product__heading">Carabao Energy Drink Original</h1>
          <p className="product__description">
          Our light and distinctive original energy recipe enjoyed by millions worldwide.

          Carabao Energy Drink Original is a refreshing and great tasting low calorie energy drink. Enjoy our original, distinctive taste in this light and refreshingly carbonated energy drink. Half the sugar of traditional energy drinks and only 63 calories per can. Contains taurine, caffeine and B vitamins which replenishes energy* and relieves fatigue*.           </p>
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
          <Link to="/protected" className="product__cta">SHOP NOW</Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
