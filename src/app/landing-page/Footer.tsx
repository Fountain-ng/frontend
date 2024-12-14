import React from "react";
import "../../styles/Footer.css"
import Image from "next/image";
import { whiteLogo } from "@/images";
import Twitter from "@/icons/twitter";
import Link from "next/link";
import LinkedIn from "@/icons/LinkedIn";
import Instagram from "@/icons/Instagram";
import Internet from "@/icons/Internet";

const Footer = () => {
  return (
    <section className="footer">
        <div className="footer-container">
            <div>
                <Image src={whiteLogo} width={220} height={48} alt="Fountain logo"/>
            </div>
            <div className="footer_container_content">
                <div className="footer-location">
                    <h1 className="footer-header">Location</h1>
                    <div className="footer-location_content">
                        <span>KM 42 LEKKI-EPE EXPRESSWAY, SANGOTEDO, LEKKI, LAGOS STATE</span>
                    </div>
                </div>
                <div className="footer-contact">
                    <h1 className="footer-header">Contact Us</h1>
                    <div className="footer-location_content">
                        <span>+234-708-735-2090</span>
                        <span>contact@fountain.ng</span>
                    </div>
                </div>
                <div className="footer-brand">
                    <h1 className="footer-header">Brand Info</h1>
                    <div className="footer-location_content">
                        <span><a href="">OUR BRAND</a></span>
                        <span><a href="">OUR SHOP</a></span>
                        <span><a href="">CART</a></span>
                        <span><a href="">OUR STORES</a></span>
                        <span><a href="">ACCOUNT PROFILE</a></span>
                    </div>
                </div>
                <div className="footer-help">
                    <h1 className="footer-header">Help</h1>
                    <div className="footer-location_content">
                        <span><a href="">FAQS</a></span>
                        <span><a href="">CONTACT US</a></span>
                        <span><a href="">SHIPPING</a></span>
                        <span><a href="">PRIVACY POLICY</a></span>
                        <span><a href="">TERMS & CONDITION</a></span>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-bottom_content">
            <div className="footer-social_content">
                <p>©Copyright 2024 Fountain, Inc.</p>
                <div className="footer-socials">
                    <span><a href="#"><Twitter className="special_social_icon"/></a></span>
                    <span><a href="#"><LinkedIn className="special_social_icon"/></a></span>
                    <span><a href=""><Instagram className="special_social_icon"/></a></span>
                    <span><a href="#"><Internet className="special_social_icon"/></a></span>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Footer;