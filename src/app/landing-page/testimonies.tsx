import React from 'react';
import '../../styles/testimonies.css';
import NormalArrowLeft from '@/icons/NormalArrowLeft';
import NormalArrowRight from '@/icons/NormalArrowRight';

const Testimonies = () => {
    return (
        <div>
            <section className='testimonies'>
                <div className='testimonies-container'>
                    <a href=''><NormalArrowLeft /></a>
                    <div className='testimony'>
                        <p className='testimony_text'>“Carabao gives me the energy boost I need for my early morning runs.”</p>
                        <p className='testimony_name'>-- Kelly</p>
                    </div>
                    <a href=''><NormalArrowRight /></a>
                </div>
            </section>
        </div>
    )
}


export default Testimonies;