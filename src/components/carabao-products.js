'use client';
import '../styles/carabao-product.modules.css';
import React from 'react';
import {Link} from 'react-router-dom';
import GreenNavbar from './Navbar-Green';

const CarabaoProducts = () => {

  return (
    <>
      <GreenNavbar></GreenNavbar>
      <section className="carabao-real">
        <div className="carabao-real__container">
          <div className="carabao-real__img">
            <img
              src="/drink-pack-2.png"
              className='drink-pack-2'
              alt="Carabao Energy Drink"
              width={500}
              height={450}
            />
          </div>
          <div className="carabao-real__content">
            <h1 className="carabao-real__title">CARABAO ENERGY DRINK ORIGINAL (330ML CAN)</h1>
            <p className="carabao-real__price"><span className="price-span">N2000.00</span>N1500.00</p>
            <p className="carabao-real__size">Can Pack Size</p>
            <div className="carabao-real__quantity">
              <select className="carabao-real__select">
                <option value="1">24 x 300ml</option>
                <option value="2">36 x 300ml</option>
                <option value="3">48 x 300ml</option>
                <option value="4">60 x 300ml</option>
                <option value="5">72 x 300ml</option>
                <option value="6">90 x 300ml</option>
              </select>
            </div>
            <label htmlFor="quantity" className="quantity-real">Qty</label>
            <input type="number"  name="quantity" min="2" max="100" required></input>
            <div className="carabao-real__cta">
              <Link to='#' className="carabao-real__cta-btn">ADD TO CART</Link>
            </div>
          </div>
        </div>
      </section>

      <section className='carabao-real-details'>
        <div className="carabao-real-details__container">


          <div className="carabao-real-details__content"></div>


          <div className="carabao-real-details__content">
            <div className='carabao-real-details__content-header'>
              <p className='carabao-real-details__content-header-desc'>Description</p>
              <span className='carabao-real-details__content-header-icon'>
                <img 
                src='/chevron-down.png'
                width={24}
                height={24}
                alt='chevron-down'
                />
                </span>
            </div>
            {/* <div className='carabao-real-details__content-desc'>
              <p className='carabao-real-details__content-desc-p'>Our light and distinctive original energy recipe enjoyed by millions worldwide.</p>
              <p className='carabao-real-details__content-desc-p'>Carabao Energy Drink Original is a refreshing and great tasting low calorie energy drink. Enjoy our original, distinctive taste in this light and refreshingly carbonated energy drink. Half the sugar of traditional energy drinks and only 63 calories per can. Contains taurine, caffeine and B vitamins which replenishes energy* and relieves fatigue*.</p>
              <div className='carabao-real-details__content-desc-img'></div>
            </div> */}
          </div>


        <div className="carabao-real-details__content">
            <div className='carabao-real-details__content-header'>
              <p className='carabao-real-details__content-header-desc'>Ingredients</p>
              <span className='carabao-real-details__content-header-icon'>
                <img 
                src='/chevron-down.png'
                width={24}
                height={24}
                alt='chevron-down'
                />
                </span>
            </div>
            {/* <div className='carabao-real-details__content-desc'>
              <p className='carabao-real-details__content-desc-p'>Carabao Original Energy Drink: Carbonated Water, Sugar, Acid (Citric Acid), Taurine (0.3%), Flavourings, Caffeine (0.032%), Sweeteners (Aspartame Steviol Glycosides), Colours (Caramel Riboflavin), Inositol, Vitamins (Niacin, Pantothenic Acid, Vitamin B6, Vitamin B12), Preservative (Sodium Benzoate). Contains A Source Of Phenylalanine.</p>
              <p className='carabao-real-details__content-desc-p'>Nutrition (typical values per 100ml): Energy 81 kJ (19 kcal); Fat 0 g; of which Saturates 0 g; Carbohydrate 4.5 g; of which Sugars 4.5 g; Protein 1 g; Salt 0.2g. Vitamins & Minerals (typical values per 100ml): Niacin 10 mg (63%RI)*; Pantothenic Acid 2.5 mg (42%RI)*; Vitamin B6 2.5 mg (179%RI)* ; Vitamin B12 2.5 μg (100%RI)*. *RI = Reference Intake</p>
              <p className='carabao-real-details__content-desc-p'>Directions: Best served chilled. Once opened keep refrigerated and consume within 3 days.</p>
              <p className='carabao-real-details__content-desc-p'>Safety Warning: High caffeine content, not recommended for children, pregnant or breast-feeding women (32mg/100ml). Consume in moderation as part of a varied and balanced diet and healthy lifestyle.</p>
              <p className='carabao-real-details__content-desc-p'>*Niacin, pantothenic acid, vitamin B6 and vitamin B12 contribute to normal energy yielding metabolism and to the reduction of tiredness and fatigue.</p>
              <div className='carabao-real-details__content-desc-img'></div>
            </div> */}
          </div>




        <div className="carabao-real-details__content">
            <div className='carabao-real-details__content-header'>
              <p className='carabao-real-details__content-header-desc'>Delivery</p>
              <span className='carabao-real-details__content-header-icon'>
                <img 
                src='/chevron-down.png'
                width={24}
                height={24}
                alt='chevron-down'
                />
                </span>
            </div>
            {/* <div className='carabao-real-details__content-desc'>
              <p className='carabao-real-details__content-desc-p'>Our light and distinctive original energy recipe enjoyed by millions worldwide.</p>
              <p className='carabao-real-details__content-desc-p'>Carabao Energy Drink Original is a refreshing and great tasting low calorie energy drink. Enjoy our original, distinctive taste in this light and refreshingly carbonated energy drink. Half the sugar of traditional energy drinks and only 63 calories per can. Contains taurine, caffeine and B vitamins which replenishes energy* and relieves fatigue*.</p>
              <div className='carabao-real-details__content-desc-img'></div>
           </div> */}
        </div>




        <div className="carabao-real-details__content">
          <div className='carabao-real-details__content-header'>
            <p className='carabao-real-details__content-header-desc'>Ask a Question</p>
            <span className='carabao-real-details__content-header-icon'>
              <img 
              src='/chevron-down.png'
              width={24}
              height={24}
              alt='chevron-down'
              />
              </span>
          </div>
            {/* <div className='carabao-real-details__content-desc'>
              <p className='carabao-real-details__content-desc-p'>Our light and distinctive original energy recipe enjoyed by millions worldwide.</p>
              <p className='carabao-real-details__content-desc-p'>Carabao Energy Drink Original is a refreshing and great tasting low calorie energy drink. Enjoy our original, distinctive taste in this light and refreshingly carbonated energy drink. Half the sugar of traditional energy drinks and only 63 calories per can. Contains taurine, caffeine and B vitamins which replenishes energy* and relieves fatigue*.</p>
            </div> */}
          </div>



          </div>
      </section>    
    </>
  );
}

export default CarabaoProducts;
