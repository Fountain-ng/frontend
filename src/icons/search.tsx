import { IconProps } from "../../utils/types";


const Search: React.FC<IconProps> = ({ size = 40, className = "" }) => {

    const svgSize = `${size}px`;

    return (
        <svg className={className} height={svgSize} width={svgSize} viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 29C25.2467 29 29.5 24.7467 29.5 19.5C29.5 14.2533 25.2467 10 20 10C14.7533 10 10.5 14.2533 10.5 19.5C10.5 24.7467 14.7533 29 20 29Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M30.5 30L28.5 28" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
};

export default Search;

