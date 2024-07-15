import { IconProps } from "../utils/types";

const Friends: React.FC<IconProps> = ({ size = 24, className = "" }) => {
    const svgSize = `${size}px`;

    return (
        <svg fill="currentColor" className={className} height={svgSize} width={svgSize} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <g>
                    <g>
                        <path fillRule="evenodd" clipRule="evenodd" d="M11.9961 19C7.99805 19 4.65625 18.3945 4.65625 15.9998C4.65625 13.6051 7.98145 12.5 11.9961 12.5C16.0059 12.5 19.3359 13.5865 19.3359 15.9905C19.3359 18.3923 16.0205 19 11.9961 19Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path fillRule="evenodd" clipRule="evenodd" d="M11.9961 9.89633C14.4118 9.89633 16.3554 7.95272 16.3554 5.53705C16.3554 3.12138 14.4118 1.17773 11.9961 1.17773C9.58035 1.17773 7.63675 3.12138 7.63675 5.53705C7.62905 7.94492 9.55985 9.88856 11.9679 9.89633H11.9961Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M18.3633 8.82129C19.5768 8.49128 20.4753 7.39334 20.4753 6.08952C20.4753 4.71282 19.4698 3.56616 18.1607 3.3125" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M18.9776 11.8848C20.7066 11.8848 22.2058 13.0639 22.2058 14.5014C22.2058 15.3922 21.6903 16.182 20.8684 16.5781" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M5.62891 8.82129C4.41536 8.49128 3.51687 7.39334 3.51687 6.08952C3.51687 4.71282 4.52243 3.56616 5.83144 3.3125" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M5.01465 11.8848C3.28564 11.8848 1.78645 13.0639 1.78645 14.5014C1.78645 15.3922 2.30197 16.182 3.12383 16.5781" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </g>
                </g>
            </g>
        </svg>
    );
};

export default Friends;