import { IconProps } from "../../utils/types";


const NormalArrowLeftt: React.FC<IconProps> = ({ size = 30, className = "" }) => {

    const svgSize = `${size}px`;

    return (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.80249 11.6199L4.99916 7.81655C4.54999 7.36738 4.54999 6.63238 4.99916 6.18322L8.80249 2.37988" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>


    );
};

export default NormalArrowLeftt;
