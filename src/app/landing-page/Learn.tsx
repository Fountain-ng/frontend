import Ellipse from "@/icons/dot";
import "../../styles/learnfountain.css";
import Image from "next/image";
import Link from "next/link";
import { largeDrink } from "@/images";

const Learn = () => {
    return (

    <section className="learn">
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
                </div>
                <a className="learn_content_button">LEARN MORE ABOUT CARABAO </a>
            </div>
            <div className="learn__content-images">
                <div className="learn__content-image">
                    <Image
                        src={largeDrink}
                        alt="Learn1"
                        width={300}
                        height={350}
                    />
                </div>
            </div>
        </div>
        </div>
    </section>

    )

}

export default Learn;