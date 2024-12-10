import React from 'react';
import '../../styles/sponsors.css';
import NormalArrowLeft from '@/icons/NormalArrowLeft';
import NormalArrowRight from '@/icons/NormalArrowRight';
import Image from 'next/image';
import { blenco, chandever, ritz, chopilos, clubLogo, libraryLogo,shoprite } from '@/images';

const Sponsors = () => {
    return (
        <div>
            <section className='sponsors'>
                <div className='sponsors-container'>
                    <div className='sponsors-container_overall'>
                        <div><Image src={shoprite} alt=''/></div>
                        <div><Image src={clubLogo} alt=''/></div>
                        <div><Image src={libraryLogo} alt=''/></div>
                        <div><Image src={blenco} alt=''/></div>
                        <div><Image src={chopilos} alt=''/></div>
                        <div><Image src={chandever} alt=''/></div>
                        <div><Image src={ritz} alt=''/></div>
                    </div>
                    <div className='sponsors-btns'>
                        <a href=''><NormalArrowLeft /></a>
                        <a href=''><NormalArrowRight /></a>
                    </div>
                </div>
            </section>
        </div>
    )
}


export default Sponsors;