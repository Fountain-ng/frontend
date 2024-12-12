import { IconProps } from "../../utils/types";


const NormalArrowRightt: React.FC<IconProps> = ({ size = 24, className = "" }) => {

    const svgSize = `${size}px`;

    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.68262 14.9401L11.5726 10.0501C12.1501 9.47256 12.1501 8.52756 11.5726 7.94806L6.68262 3.06006" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>


    );
};

export default NormalArrowRightt;

