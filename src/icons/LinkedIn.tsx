import { IconProps } from "../../utils/types";


const LinkedIn: React.FC<IconProps> = ({ size = 24, className = "" }) => {

    const svgSize = `${size}px`;

    return (

        <svg width="40" id="special_social_icon" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_288_545)" filter="url(#filter0_d_288_545)">
            <path d="M26.2234 4.5H5.77187C4.79219 4.5 4 5.27344 4 6.22969V26.7656C4 27.7219 4.79219 28.5 5.77187 28.5H26.2234C27.2031 28.5 28 27.7219 28 26.7703V6.22969C28 5.27344 27.2031 4.5 26.2234 4.5ZM11.1203 24.9516H7.55781V13.4953H11.1203V24.9516ZM9.33906 11.9344C8.19531 11.9344 7.27188 11.0109 7.27188 9.87187C7.27188 8.73281 8.19531 7.80937 9.33906 7.80937C10.4781 7.80937 11.4016 8.73281 11.4016 9.87187C11.4016 11.0062 10.4781 11.9344 9.33906 11.9344ZM24.4516 24.9516H20.8937V19.3828C20.8937 18.0562 20.8703 16.3453 19.0422 16.3453C17.1906 16.3453 16.9094 17.7937 16.9094 19.2891V24.9516H13.3563V13.4953H16.7687V15.0609H16.8156C17.2891 14.1609 18.4516 13.2094 20.1813 13.2094C23.7859 13.2094 24.4516 15.5813 24.4516 18.6656V24.9516Z" fill="#EFEFFD"/>
            </g>
            <defs>
            <filter id="filter0_d_288_545" x="0" y="0.5" width="40" height="40" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="4" dy="4"/>
            <feGaussianBlur stdDeviation="4"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_288_545"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_288_545" result="shape"/>
            </filter>
            <clipPath id="clip0_288_545">
            <rect width="24" height="24" fill="white" transform="translate(4 4.5)"/>
            </clipPath>
            </defs>
        </svg>


    );
};

export default LinkedIn;