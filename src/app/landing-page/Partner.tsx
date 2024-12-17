import "../../styles/partner.css";
import Ellipse from "@/icons/dot";
import Image from "next/image";
import img from "../../images/herobackgroundImg.png";
import { partner1, partner2, partner3 } from "@/images";


const Partner = () => {
    return (
        <section className="partnership">
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `url(${img.src})`, // Correct way to reference the imported image
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    filter: 'brightness(10%)',
                    zIndex: -1, // Ensures it's behind content
                }}
            ></div>
            <div className="partnership__title">
                <h1 className="partnership__title_text">PARTNER WITH US</h1>
            </div>
            <div className="partnership__container">
                <div className="partnership__container_overall">
                    <div className="partnership__container_main">
                        <div className="partnership__container_text_container">
                            <Ellipse />
                            <p className="partnership__container_text">Are you ready to offer the energy and drive that Carabao brings?</p>
                        </div>
                        <div className="partnership__container_text_container">
                            <Ellipse />
                            <p className="partnership__container_text">Join our wholesale network to stock Carabao in your store and boost your customer’s experience.</p>
                        </div>
                        <div className="partnership__container_text_container">
                            <Ellipse />
                            <p className="partnership__container_text">With exclusive bulk discounts, fast delivery, and dedicated support, we’re here to help you grow.</p>
                        </div>
                        <div className="partnership__container_text_container">
                            <Ellipse />
                            <p className="partnership__container_text">As we expand our product line, you'll have the first look at new additions, giving you an edge in the market.</p>
                        </div>
                        <a href="/distributor" className="learn_content_button">BECOME A PARTNER</a>

                    </div>
                </div>
                <div className="partnership__container_img">
                    <Image src={partner1} className="zoom-image" alt='partner image 1' />
                    <Image src={partner2} className="zoom-image" alt='partner image 2' />
                </div>
            </div>
        </section>
    )
};

export default Partner;
