import React from "react";
import "../styles/brands.modules.css";
import { Link } from "react-router-dom";

const brands = () => {
    return (
        <section className="brands">
            <div className="element-1">
                    <img
                        src="/Element.png"
                        alt="brand1"
                        width={350}
                        height={350}
                    />
                </div>
                <div className="element-2">
                    <img
                        src="/Element (1).png"
                        alt="brand2"
                        width={350}
                        height={350}
                    />
                </div>
                <div className="element-3">
                    <img
                        src="/water2.png"
                        alt="brand3"
                        className="water-bg"
                        width={300}
                        height={300}
                    />
                </div>
            <div className="brands__container">
                <div className="brands__content">
                    <h2>Explore our Brands</h2>
                    <p>Take your time to go through our products to see and make informed decision.</p>
                    <Link to= "/carabao" className="brands__content-btn">See all</Link> 
                </div>
                <div className="brand-content-img">
                    <img
                        src="/pack.png"
                        alt="brand3"
                        className="brand-content-img-2"
                        width={385}
                        height={300}
                    />
                </div>
            </div>
        </section>
    )
}


export default brands; 