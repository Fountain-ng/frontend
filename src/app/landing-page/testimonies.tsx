"use client";
import React, { useState, useEffect } from "react";
import '../../styles/testimonies.css';
import NormalArrowLeftt from '@/icons/NormalArrowLeft';
import NormalArrowRight from '@/icons/NormalArrowRight';

const testimoniesData = [
    {
      text: "“Carabao gives me the energy boost I need for my early morning runs.”",
      name: "-- Kelly",
    },
    {
      text: "“This drink is a game-changer! I feel refreshed and ready for any challenge.”",
      name: "-- John",
    },
    {
      text: "“Perfect for those long days when I need to stay energized and focused.”",
      name: "-- Sarah",
    },
  ];


const Testimonies = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-swipe effect every 4 seconds
    useEffect(() => {
        const interval = setInterval(() => {
        nextTestimony();
        }, 4000);
        return () => clearInterval(interval); // Cleanup on unmount
    }, [currentIndex]);

    const nextTestimony = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimoniesData.length);
    };

    const prevTestimony = () => {
        setCurrentIndex(
        (prevIndex) =>
            (prevIndex - 1 + testimoniesData.length) % testimoniesData.length
        );
    };


    return (
        <div>
            <section className='testimonies'>
                <div className='testimonies-container'>
                    <button className="arrow-button" onClick={prevTestimony}>
                        <NormalArrowLeftt />
                    </button>
                    <div className='testimony'>
                    <p className="testimony_text">{testimoniesData[currentIndex].text}</p>
                    <p className="testimony_name">{testimoniesData[currentIndex].name}</p>
                    </div>
                    <button className="arrow-button" onClick={nextTestimony}>
                        <NormalArrowRight />
                    </button>
                </div>
            </section>
        </div>
    )
}


export default Testimonies;