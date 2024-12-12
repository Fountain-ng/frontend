import { IconProps } from "../../utils/types";


const Cart: React.FC<IconProps> = ({ size = 24, className = "" }) => {

    const svgSize = `${size}px`;

    return (

        <svg className={className} height={svgSize} width={svgSize} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.5 2H4.24001C5.32001 2 6.17 2.93 6.08 4L5.25 13.96C5.11 15.59 6.39999 16.99 8.03999 16.99H18.69C20.13 16.99 21.39 15.81 21.5 14.38L22.04 6.88C22.16 5.22 20.9 3.87 19.23 3.87H6.32001" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16.75 22C17.4404 22 18 21.4404 18 20.75C18 20.0596 17.4404 19.5 16.75 19.5C16.0596 19.5 15.5 20.0596 15.5 20.75C15.5 21.4404 16.0596 22 16.75 22Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8.75 22C9.44036 22 10 21.4404 10 20.75C10 20.0596 9.44036 19.5 8.75 19.5C8.05964 19.5 7.5 20.0596 7.5 20.75C7.5 21.4404 8.05964 22 8.75 22Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9.5 8H21.5" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

    );
};

export default Cart;
