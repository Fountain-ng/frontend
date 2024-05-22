import React from "react";
import "../styles/brands.modules.css";
import Image from 'next/image';

const brands = () => {
    return (
        <section className="brands">
            <div className="element-1">
                    <Image
                        src="/Element.png"
                        alt="brand1"
                        width={350}
                        height={350}
                    />
                </div>
                <div className="element-2">
                    <Image
                        src="/Element (1).png"
                        alt="brand2"
                        width={350}
                        height={350}
                    />
                </div>
                <div className="element-3">
                    <Image
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
                </div>
                <div className="brand-content-img">
                    <Image
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