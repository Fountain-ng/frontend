import { IconProps } from "../../utils/types";


const Menu: React.FC<IconProps> = ({ size = 24, className = "" }) => {

    const svgSize = `${size}px`;

    return (
        <svg className={className} height={svgSize} width={svgSize} viewBox="0 0 31 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.5 1H29.5" stroke="white" stroke-width="2" stroke-linecap="round"/>
            <path d="M1.5 7H29.5" stroke="white" stroke-width="2" stroke-linecap="round"/>
            <path d="M1.5 13H29.5" stroke="white" stroke-width="2" stroke-linecap="round"/>
        </svg>

    );
};

export default Menu;

