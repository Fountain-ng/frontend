import { IconProps } from "../../utils/types";


const Ellipse: React.FC<IconProps> = ({ size = 12, className = "" }) => {

    const svgSize = `${size}px`;

    return (
        <svg className={className} height={svgSize} width={svgSize} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="6" cy="6" r="6" fill="white"/>
        </svg>
    );
};

export default Ellipse;
