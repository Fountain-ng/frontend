'use client'
import "../styles/Services.modules.css";

const Services = () => {
  return (
    <section className="services" id="services">
      <div
        className="services__container"
      >
        <div className="services__container-1">
          <div className="services__container-1-1">
            <img
              src="/remove-outline.svg"
              alt="Fountain Beverages"
              className="services__container-1-img"
              width={80}
              height={60}
            />
            <h2 className="services__title">ABOUT US</h2>
          </div>
          <h1 className="services__container-1-description">What are we <br /> about?</h1>
          <p className="services__container-1-text">
            At Fountain, we are dedicated to energizing your life with
            premium energy drinks that embody vitality, adventure, and passion. Our mission is to empower individuals
            to embrace life&apos;s adventures with gusto, providing the energy and vitality needed to pursue their passions
            and dreams.
          </p>
        </div>
        <div className="services__container-2">
          <img
            src="/01.png"
            alt="Fountain Beverages"
            className="services__container-2-img"
            width={400}
            height={430}
          />
        </div>
        <div className="services__container-3">
          <img
            src="/04.png"
            alt="Love for Nature"
            className="services__container-3-img"
            width={400}
            height={430}
          />
        </div>
        <div className="services__container-4">
          <div className="services__container-4-4">
            <img
              src="/remove-outline.svg"
              alt="Fountain Beverages"
              className="services__container-4-img"
              width={80}
              height={80}
            />
            <h2 className="services__title">OUR SERVICES</h2>
          </div>
          <h1 className="services__container-1-description">What we offer?</h1>
          <p className="services__container-1-text">
            Fountain offers a diverse selection of premium energy drinks, each meticulously
            curated to provide the ultimate boost of energy, focus, and vitality. We are committed
            to ensuring the highest standards of quality, with rigorous testing and evaluation processes
            for every product.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;

