"use client";
import React, { useEffect, useRef } from "react";
import '../../styles/sponsors.css';
import NormalArrowLeft from '@/icons/NormalArrowLeft';
import NormalArrowRight from '@/icons/NormalArrowRight';
import Image from 'next/image';
import { blenco, chandever, ritz, chopilos, clubLogo, libraryLogo,shoprite } from '@/images';

const Sponsors = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

        // Function to auto-scroll horizontally
        useEffect(() => {
            const scroll = scrollRef.current;
            let direction = 1; // Controls scroll direction
            const speed = 2; // Adjust speed here

            const animateScroll = () => {
            if (scroll) {
                scroll.scrollLeft += direction * speed;
                // Reverse direction when reaching the end
                if (
                scroll.scrollLeft + scroll.clientWidth >= scroll.scrollWidth ||
                scroll.scrollLeft <= 0
                ) {
                direction *= -1;
                }
            }
            requestAnimationFrame(animateScroll);
            };

            animateScroll();
        }, []);
    return (
        <div>
            <section className="sponsors">
                <div className="sponsors-container">
                    <div className="sponsors-container_overall" ref={scrollRef}>
                    <div><Image src={shoprite} alt="Shoprite" /></div>
                    <div><Image src={clubLogo} alt="Club" /></div>
                    <div><Image src={libraryLogo} alt="Library" /></div>
                    <div><Image src={blenco} alt="Blenco" /></div>
                    <div><Image src={chopilos} alt="Chopilos" /></div>
                    <div><Image src={chandever} alt="Chandever" /></div>
                    <div><Image src={ritz} alt="Ritz" /></div>
                    {/* Duplicate for seamless loop */}
                    <div><Image src={shoprite} alt="Shoprite" /></div>
                    <div><Image src={clubLogo} alt="Club" /></div>
                    <div><Image src={libraryLogo} alt="Library" /></div>
                    </div>
                    <div className="sponsors-btns">
                    <button className="scroll-btn left" onClick={() => scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" })}>
                        <NormalArrowLeft/>
                    </button>
                    <button className="scroll-btn right" onClick={() => scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" })}>
                        <NormalArrowRight/>
                    </button>
                    </div>
                </div>
            </section>
        </div>
    )
}


export default Sponsors;