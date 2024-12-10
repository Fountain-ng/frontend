'use client'
import "../styles/Services.modules.css";

const Services = () => {
  return (
    <section className="about">
      <div className="about__container">
        <div className="about-text">
          <h2 className="about__title-1">WELCOME TO THE FOUNTAIN FAMILY.</h2>
        </div>
        <div className="about__text">
          <h2 className="about__title-2">WE ARE MORE THAN JUST A DISTRIBUTOR  <span className="about-image">
              <img
                src="/icons/store.png"
                alt=""
              />
            </span>
          </h2>
        </div>
        <div className="about__text">
          <h2 className="about__title-3">WE ARE YOUR GO-TO SOURCE <span className="about-image">
              <img
                src="/icons/ice.png"
                alt=""
              />
            </span> FOR <br/> <span className="about-image">
              <img
                src="/icons/energy.png"
                alt=""
              />
            </span> ENERGY SOLUTIONS. 
            <span className="about-image">
              <img
                src="/icons/exercise.png"
                alt=""
              />
            </span>
          </h2>
        </div>

        <div className="about-description">
          <p className="about__description-1">
            As the exclusive distributor of Carabao Energy Drink in Nigeria, 
            we ensure that the products you love are available wherever and 
            whenever you need them.
          </p>
          <p className="about__description-1">
            We make quality energy products easily accessible, 
            whether you’re powering through a busy workday or 
            gearing up for your next big adventure. 
          </p>
        </div>
        <div className="about-description-story">
          <p className="about__description-story-text">
            OUR STORY, OUR BRAND
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;

