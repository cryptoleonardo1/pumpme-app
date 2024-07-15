import { IconProps } from "../utils/types";

const Coins: React.FC<IconProps> = ({ size = 24, className = "" }) => {
    const svgSize = `${size}px`;

    return (
        <svg fill="none" className={className} height={svgSize} width={svgSize} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path d="M14 10.5C14 11.8807 11.7614 13 9 13C6.23858 13 4 11.8807 4 10.5M14 10.5C14 9.11929 11.7614 8 9 8C6.23858 8 4 9.11929 4 10.5M14 10.5V14.5M4 10.5V14.5M20 5.5C20 6.88071 17.7614 8 15 8C12.2386 8 10 6.88071 10 5.5M20 5.5C20 4.11929 17.7614 3 15 3C12.2386 3 10 4.11929 10 5.5M20 5.5V17.5C20 18.8807 17.7614 20 15 20C12.2386 20 10 18.8807 10 17.5V5.5M19.8184 11.5466C19.2834 11.9047 18.6062 12.1962 17.8184 12.3996M19.8184 14.5466C19.2834 14.9047 18.6062 15.1962 17.8184 15.3996M4 14.5C4 15.8807 6.23858 17 9 17C11.7614 17 14 15.8807 14 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            </g>
        </svg>
    );
};

export default Coins;