import Ellipse from "@/icons/dot";
import "../../styles/learnfountain.css";
import Image from "next/image";
import Link from "next/link";
import img from "../../images/manHoldingDrink.png";
import { largeDrink, mediumDrink, smallDrink } from "@/images";
import NormalArrowLeftt from "@/icons/NormalArrowLeftt";
import NormalArrowRightt from "@/icons/NormalArrowRight2";

const Learn = () => {
    return (

    <section className="learn">
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
                filter: 'brightness(50%)',
                zIndex: -1, // Ensures it's behind content
            }}
        ></div>
        <div className="learn__title">
            <h1 className="learn__title_text">Fuel Your Day with Carabao</h1>
        </div>
        <div className="learn__container_overall">
        <div className="learn__container">
            <div className="learn_content_overall">
                <div className="learn__content">
                    <div className="learn-content-text">
                        <Ellipse />
                        <p className="learn__content-text-1">Boost your energy with every sip, wherever you go.</p>
                    </div>
                    <div className="learn-content-text">
                        <Ellipse />
                        <p className="learn__content-text-1">Power through your busiest days with a refreshing.</p>
                    </div>
                    <div className="learn-content-text">
                        <Ellipse />
                        <p className="learn__content-text-1">Tropical flavors —stay energized, stay focused.</p>
                    </div>
                    <a href="/carabao" className="learn_content_button">LEARN MORE ABOUT CARABAO </a>
                </div>
            </div>
            <div className="learn__content-images_container">
                <div className="learn__content-images">
                    <div className="learn__content-image">
                        <Image
                            className="learn__content-image learn_image_zero"
                            src={largeDrink}
                            alt="Learn1"
                            width={260}
                            height={300}
                        />
                    </div>
                    <div className="learn__content-image">
                        <Image
                            className="learn__content-image learn_image_one"
                            src={smallDrink}
                            alt="Learn1"
                            width={178}
                            height={208}
                        />
                    </div>
                    <div className="learn__content-image">
                        <Image
                            className="learn__content-image learn_image_two"
                            src={mediumDrink}
                            alt="Learn1"
                            width={178}
                            height={208}
                        />
                    </div>
                </div>
                <div className="learn__content_sliders">
                    <a href="" className="learn__content_sliders_btn" aria-disabled><NormalArrowLeftt/></a>
                    <a href="" className="learn__content_sliders_btn"><NormalArrowRightt/></a>
                </div>
            </div>
        </div>

        </div>
    </section>

    )

}

export default Learn;
