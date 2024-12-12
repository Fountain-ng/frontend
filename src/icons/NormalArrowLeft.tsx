import { IconProps } from "../../utils/types";


const NormalArrowLeft: React.FC<IconProps> = ({ size = 24, className = "" }) => {

    const svgSize = `${size}px`;

    return (
        <svg width="42" height="35" id="NormalArrowLeft" viewBox="0 0 42 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.2">
            <line x1="41.0063" y1="17" x2="1.00711" y2="17.2565" stroke="#31453A" strokeWidth="2"/>
            <path d="M10.9922 1.30561L10.7041 3.40619C9.93034 9.04841 6.73379 14.0724 1.95078 17.1637L0.742957 17.9443" stroke="#31453A" strokeWidth="1.95421"/>
            <path d="M0.89957 16.7968L2.66128 17.9766C7.39328 21.1454 10.5075 26.2208 11.1892 31.8749L11.3614 33.3027" stroke="#31453A" strokeWidth="1.95421"/>
            </g>
        </svg>


    );
};

export default NormalArrowLeft;










