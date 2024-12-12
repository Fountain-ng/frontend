import { IconProps } from "../../utils/types";


const NormalArrowRight: React.FC<IconProps> = ({ size = 24, className = "" }) => {

    const svgSize = `${size}px`;

    return (
        <svg width="43" height="33" id="NormalArrowRight" viewBox="0 0 43 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0.993342" y1="17.2569" x2="40.9925" y2="17.0003" stroke="#31453A" strokeWidth="2"/>
            <path d="M32.0064 32.6944L32.2944 30.5938C33.0682 24.9516 36.2647 19.9276 41.0478 16.8363L42.2556 16.0557" stroke="#31453A" strokeWidth="1.95421"/>
            <path d="M42.099 17.2032L40.3373 16.0234C35.6053 12.8546 32.491 7.77917 31.8093 2.12509L31.6372 0.697312" stroke="#31453A" strokeWidth="1.95421"/>
        </svg>

    );
};

export default NormalArrowRight;

