import { IconProps } from "../../utils/types";


const Twitter: React.FC<IconProps> = ({ size = 24, className = "" }) => {

    const svgSize = `${size}px`;

    return (

        <svg width="40" height="37" id="special_social_icon" viewBox="0 0 40 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_288_544)">
            <path d="M11.5502 24.2497C20.6045 24.2497 25.5583 16.7465 25.5583 10.2416C25.5583 10.0307 25.5536 9.81505 25.5442 9.60412C26.5079 8.90722 27.3395 8.04401 28 7.05505C27.1025 7.45436 26.1496 7.71514 25.1739 7.82849C26.2013 7.21266 26.9705 6.24523 27.3391 5.10552C26.3726 5.67831 25.3156 6.08237 24.2134 6.30037C23.4708 5.51132 22.489 4.98887 21.4197 4.81381C20.3504 4.63874 19.2532 4.82081 18.2977 5.33185C17.3423 5.8429 16.5818 6.65446 16.1338 7.64107C15.6859 8.62767 15.5754 9.73437 15.8195 10.7901C13.8625 10.6918 11.9480 10.1835 10.2 9.29785C8.45203 8.41225 6.90969 7.16919 5.67297 5.64927C5.0444 6.733 4.85206 8.0154 5.13503 9.23585C5.418 10.4563 6.15506 11.5232 7.19641 12.2197C6.41463 12.1949 5.64998 11.9844 4.96563 11.6057V11.6666C4.96492 12.8039 5.3581 13.9063 6.07831 14.7865C6.79852 15.6667 7.80132 16.2703 8.91625 16.4947C8.19206 16.6929 7.43198 16.7218 6.69484 16.5791C7.00945 17.5572 7.62157 18.4126 8.44577 19.0261C9.26997 19.6395 10.2651 19.9804 11.2923 20.001C9.54842 21.3709 7.39417 22.1139 5.17656 22.1104C4.78329 22.1098 4.3904 22.0857 4 22.0382C6.25286 23.4835 8.87353 24.2511 11.5502 24.2497Z" fill="#EFEFFD"/>
            </g>
            <defs>
            <filter id="filter0_d_288_544" x="0" y="-1.5" width="40" height="40" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="4" dy="4"/>
            <feGaussianBlur stdDeviation="4"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_288_544"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_288_544" result="shape"/>
            </filter>
            </defs>
        </svg>


    );
};

export default Twitter;