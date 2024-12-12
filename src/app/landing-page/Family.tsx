import React from 'react';
import '../../styles/fountainfamily.css';
import Pin from '@/icons/pin';
import Ellipse from '@/icons/dot';


const FountainFamily = () => {
    return (
        <div>
            <section className='family'>
                <div className='family-container'>
                    <div className='family-container_overall'>
                        <h1 className='family-container_overall_header'>JOIN THE FOUNTAIN FAMILY</h1>
                        <div>
                            <p className='family-container-overall-text'>Sign up to unlock exclusive offers, stay updated  on new products, and enjoy a seamless shopping experience. Some benefits are:</p>
                        </div>  
                        <div className='family-container-overall-content'>
                        <div className="overall-main-content_backup"><Ellipse/><p>Early access to new product launches and special discounts just for members.</p></div>
                            <div className="overall-main-content_backup"><Ellipse/><p>Save your preferences and track orders with ease.</p></div>
                            <div className="overall-main-content_backup"><Ellipse/><p>Be the first to know about our expanding product range and exciting updates.</p></div>

                            <div className="overall-main-content"><Pin/><p>Early access to new product launches and special discounts just for members.</p></div>
                            <div className="overall-main-content"><Pin/><p>Save your preferences and track orders with ease.</p></div>
                            <div className="overall-main-content"><Pin/><p>Be the first to know about our expanding product range and exciting updates.</p></div>
                        </div>
                        <div>
                            <a className="family_content_button">LET’S GET STARTED</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FountainFamily;