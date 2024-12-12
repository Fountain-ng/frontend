'use client';
import '../../styles/storeLocator.css';
import Searchblack from '@/icons/search-black';
import Locatoricon from '@/icons/locator';
import { map } from '@/images';
import Image from 'next/image';


const Locator = () => {
    return (
        <section className='store'>
            <h1 className='store-title'>FIND A STORE NEAR YOU</h1>
            <div className='store-locator-container'>
                <div className='search-container'>
                    <div className='search-field'>
                        <div className='search_field_icon'>
                            <Searchblack />
                            <input className='search_field_input' placeholder='Search location ...' />
                        </div>
                    </div>
                    <div className='search-locations'>
                        <div className="status-card">
                            <div className="location">
                                <Locatoricon/> <p className='location-text'>Km 42 Lekki-Epe Expressway, Sangotedo, Lekki, Lagos State. <span className='store-status'>Open.</span> Open till 6:00PM</p>
                            </div>
                        </div>
                        <div className="status-card">
                            <div className="location">
                                <Locatoricon/> <p className='location-text'>Km 42 Lekki-Epe Expressway, Sangotedo, Lekki, Lagos State. <span className='store-status closed'>Closed</span> Open till 6:00PM</p>  
                            </div>
                        </div>
                        <div className="status-card">
                            <div className="location">
                                <Locatoricon/> <p className='location-text'>Km 42 Lekki-Epe Expressway, Sangotedo, Lekki, Lagos State. <span className='store-status'>Open.</span> Open till 6:00PM</p>    
                            </div>
                        </div>
                    </div>
                </div>
                <div className='map-container'>
                    <Image src={map} className='map-container_img' alt='map' />
                </div>
            </div>
            <a href="/store" className="map_content_button">VISIT OUR STORES</a>
        </section>
    )
}


export default Locator;