export const ConditionIcon = ({ color = "#33363F", size = 24 }) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4 8L3.29289 7.29289L2.58579 8L3.29289 8.70711L4 8ZM19 10C19 10.5523 19.4477 11 20 11C20.5523 11 21 10.5523 21 10H19ZM7.29289 3.29289L3.29289 7.29289L4.70711 8.70711L8.70711 4.70711L7.29289 3.29289ZM3.29289 8.70711L7.29289 12.7071L8.70711 11.2929L4.70711 7.29289L3.29289 8.70711ZM4 9H18V7H4V9ZM18 9C18.5523 9 19 9.44772 19 10H21C21 8.34315 19.6569 7 18 7V9Z"
                fill={color}
            />
            <path
                d="M20 16L20.7071 15.2929L21.4142 16L20.7071 16.7071L20 16ZM5 16L5 17L5 17L5 16ZM2 14C2 13.4477 2.44772 13 3 13C3.55229 13 4 13.4477 4 14L2 14ZM16.7071 11.2929L20.7071 15.2929L19.2929 16.7071L15.2929 12.7071L16.7071 11.2929ZM20.7071 16.7071L16.7071 20.7071L15.2929 19.2929L19.2929 15.2929L20.7071 16.7071ZM20 17L5 17L5 15L20 15L20 17ZM5 17C3.34315 17 2 15.6569 2 14L4 14C4 14.5523 4.44772 15 5 15L5 17Z"
                fill={color}
            />
        </svg>
    );
};
export const InputIcon = ({ color = "#33363F", size = 24 }) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M3 9V15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H15C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15V9C21 6.17157 21 4.75736 20.1213 3.87868C19.2426 3 17.8284 3 15 3H9"
                stroke="#33363F"
                strokeWidth="2"
                strokeLinecap="round"
            />
            <path
                d="M15 15V16H16V15H15ZM7.70711 6.29289C7.31658 5.90237 6.68342 5.90237 6.29289 6.29289C5.90237 6.68342 5.90237 7.31658 6.29289 7.70711L7.70711 6.29289ZM14 8V15H16V8H14ZM15 14H8V16H15V14ZM15.7071 14.2929L7.70711 6.29289L6.29289 7.70711L14.2929 15.7071L15.7071 14.2929Z"
                fill={color}
            />
        </svg>
    );
};
export const OutputIcon = ({ color = "#33363F", size = 24 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M3 3V2H2V3H3ZM12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L12.2929 13.7071ZM4 11V3H2V11H4ZM3 4H11V2H3V4ZM2.29289 3.70711L12.2929 13.7071L13.7071 12.2929L3.70711 2.29289L2.29289 3.70711Z"
            fill={color}
        />
        <path
            d="M4 15C4 16.8692 4 17.8038 4.40192 18.5C4.66523 18.9561 5.04394 19.3348 5.5 19.5981C6.19615 20 7.13077 20 9 20H14C16.8284 20 18.2426 20 19.1213 19.1213C20 18.2426 20 16.8284 20 14V9C20 7.13077 20 6.19615 19.5981 5.5C19.3348 5.04394 18.9561 4.66523 18.5 4.40192C17.8038 4 16.8692 4 15 4"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
        />
    </svg>
);
export const TextIcon = ({ color = "#33363F", size = 24 }) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M7 6V14.5925C7 16.3108 9.02384 17.2291 10.317 16.0976L11 15.5"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M4 9H10"
                stroke="#33363F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M14 9L19 17"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M19 9L14 17"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export const MathIcon = ({ color = "#33363F", size = 24 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M20 4L4 20" stroke="#33363F" strokeWidth="2" />
        <circle cx="6.5" cy="7.5" r="3.5" stroke={color} strokeWidth="2" />
        <circle cx="17.5" cy="16.5" r="3.5" stroke={color} strokeWidth="2" />
    </svg>
);

export const ClockIcon = ({ color = "#33363F", size = 24 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="2" />
        <path
            d="M16.5 12H12.25C12.1119 12 12 11.8881 12 11.75V8.5"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
        />
    </svg>
);

export const ApiIcon = ({ color = "#33363F", size = 24 }) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.5 11.8775C9.00757 12.2721 8.61029 12.781 8.34839 13.3646L8.34352 13.3754L8.34351 13.3755C8.26605 13.5481 8.2011 13.6928 8.14829 13.8038C8.10219 13.9008 8.03371 14.0417 7.94687 14.1632C7.82083 14.3396 7.65546 14.5347 7.414 14.691C7.17254 14.8472 6.92683 14.9182 6.71431 14.961C6.51342 15.0014 6.27177 15.0009 6.0642 15.0004H6.06419L6 15.0003C4.89543 15.0003 4 15.8958 4 17.0003C4 18.1049 4.89543 19.0003 6 19.0003H12H18C19.1046 19.0003 20 18.1049 20 17.0003C20 15.8958 19.1046 15.0003 18 15.0003L17.9358 15.0004H17.9358C17.7282 15.0009 17.4866 15.0014 17.2857 14.961C17.0732 14.9182 16.8275 14.8472 16.586 14.691C16.3445 14.5347 16.1792 14.3396 16.0531 14.1632C15.9663 14.0417 15.8978 13.9008 15.8517 13.8038C15.7989 13.6928 15.7339 13.548 15.6565 13.3754L15.6516 13.3646C15.3897 12.781 14.9924 12.2721 14.5 11.8775V9.54443C15.8201 10.1504 16.8818 11.2212 17.4763 12.5457C17.5599 12.732 17.6158 12.8563 17.6579 12.945C17.6683 12.9669 17.6767 12.9841 17.6835 12.9976L17.7032 12.9983C17.7668 13.0002 17.854 13.0003 18 13.0003C20.2091 13.0003 22 14.7912 22 17.0003C22 19.2095 20.2091 21.0003 18 21.0003H12H6C3.79086 21.0003 2 19.2095 2 17.0003C2 14.7912 3.79086 13.0003 6 13.0003C6.14598 13.0003 6.23318 13.0002 6.29677 12.9983L6.31654 12.9976C6.32326 12.9841 6.33167 12.9669 6.34206 12.945C6.38425 12.8563 6.44011 12.732 6.52373 12.5457C7.11818 11.2212 8.17993 10.1504 9.5 9.54443V11.8775ZM6.29756 13.034C6.29755 13.034 6.29761 13.0339 6.29774 13.0337L6.29777 13.0337L6.29756 13.034ZM17.7024 13.034C17.7024 13.034 17.7024 13.0339 17.7022 13.0337L17.7023 13.0337L17.7024 13.034Z"
                fill={color}
            />
            <path
                d="M12 3L11.2929 2.29289L12 1.58579L12.7071 2.29289L12 3ZM13 13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13L13 13ZM7.29289 6.29289L11.2929 2.29289L12.7071 3.70711L8.70711 7.70711L7.29289 6.29289ZM12.7071 2.29289L16.7071 6.29289L15.2929 7.70711L11.2929 3.70711L12.7071 2.29289ZM13 3L13 13L11 13L11 3L13 3Z"
                fill={color}
            />
        </svg>
    );
};
export const TranslatorIcon = ({ color = "#33363F", size = 24 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M4 18L8 6L12 18M6 14H10"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />

        <path
            d="M15 7H21M18 7V18M15 12H21"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
export const LLMIcon = ({ color = "#33363F", size = 24 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M12 3V21"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M21 12L3 12"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M12 12H14C15.1046 12 16 11.1046 16 10V7C16 5.89543 16.8954 5 18 5H20"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M12 12H10C8.89543 12 8 12.8954 8 14V17C8 18.1046 7.10457 19 6 19H4"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export const CloseIcon = ({ color = "#33363F", size = 24 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle cx="12" cy="12" r="9" fill="#7E869E" fillOpacity="0.25" />
        <path
            d="M9.0001 14.9997L15.0001 8.99966"
            stroke={color}
            strokeWidth="1.2"
        />
        <path d="M15 15L9 9" stroke={color} strokeWidth="1.2" />
    </svg>
);
