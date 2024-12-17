'use client'
import { useEffect } from 'react';
import "../../styles/Services.css"

const Services = () => {

  const useScrollAnimation = (selector: string, animationClass: string): void => {
    useEffect(() => {
      // Ensure IntersectionObserver is supported
      if (!("IntersectionObserver" in window)) return;
  
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(animationClass);
          } else {
            entry.target.classList.remove(animationClass);
          }
        });
      });
  
      const elements = document.querySelectorAll(selector);
      elements.forEach((el) => observer.observe(el));
  
      // Clean up observer when component unmounts
      return () => observer.disconnect();
    }, [selector, animationClass]);
  };

  useScrollAnimation(".animate", "fade-in-up");
  return (
    <section className="about">
      <div className="about__container">
    <div className="about-text">
      <h2 className="about__title-1 animate">WELCOME TO THE <span className="color">FOUNTAIN</span> FAMILY.</h2>
    </div>
    <div className="about__text fade-in-up">
      <h2 className="about__title-2 animate" data-aos="fade-up">
        WE ARE MORE THAN JUST A DISTRIBUTOR  
        <span className="about-image zoom-in" data-aos="zoom-in">
        </span>
      </h2>
    </div>
    <div className="about__text fade-in-up">
      <h2 className="about__title-3 animate">
        WE ARE YOUR GO-TO SOURCE 
        <span className="about-image zoom-in">
        </span> FOR <br/>
      </h2>
    </div>
    <div className="about__text fade-in-up">
      <h2 className="about__title-4 animate">
        <span className="about-image zoom-in animate">
        </span> ENERGY SOLUTIONS. 
        <span className="about-image zoom-in">
        </span>
      </h2>
    </div>

    <div className="about-description">
      <p className="about__description-1 slide-in-left">
        As the exclusive distributor of Carabao Energy Drink in Nigeria, 
        we ensure that the products you love are available wherever and 
        whenever you need them.
      </p>
      <p className="about__description-1 slide-in-right">
        We make quality energy products easily accessible, 
        whether you’re powering through a busy workday or 
        gearing up for your next big adventure. 
      </p>
    </div>
    <a href="/carabao" className="about-description-btn bounce-hover">
      OUR STORY, OUR BRAND
    </a>
  </div>
      {/* <div className="about__container">
        <div className="about-text">
          <h2 className="about__title-1">WELCOME TO THE <span className="color">FOUNTAIN</span> FAMILY.</h2>
        </div>
        <div className="about__text">
          <h2 className="about__title-2">WE ARE MORE THAN JUST A DISTRIBUTOR  <span className="about-image">
              <Image
                src={store}
                alt="Boxes in a Store"
                className="about-image-1"
              />
            </span>
          </h2>
        </div>
        <div className="about__text">
          <h2 className="about__title-3">WE ARE YOUR GO-TO SOURCE <span className="about-image">
              <Image
                src={icePolygon}
                alt="Polygon Ice"
                className="about-image-2"
              />
            </span> FOR <br/>
          </h2>
        </div>
        <div className="about__text">
          <h2 className="about__title-4"><span className="about-image">
              <Image
                src={sunsetExercise}
                alt="ggym image"
                className="about-image-3"
              />
            </span> ENERGY SOLUTIONS. 
            <span className="about-image">
              <Image
                src={gymExercise}
                alt="gym image"
                className="about-image-4"
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
        <a href="/carabao" className="about-description-btn">
            OUR STORY, OUR BRAND
        </a>
      </div> */}
    </section>
  );
};

export default Services;

