import { createContext, useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { BsFileEarmarkText } from "react-icons/bs";
import { GiSettingsKnobs } from "react-icons/gi";
import { useLocation } from "react-router-dom";
import { split } from "postcss/lib/list";

export const GetGlobalContext = createContext();
export const GlobalContext = ({ children }) => {
    const [activeMenuItem, setActiveMenuItem] = useState(0);
    const location = useLocation();

    const paths = split(location.pathname, '/');
    const [lastOpenedLink, setLastOpenedLink] = useState(0)
    const sidebarMenu = [
        { blank: false, title: 'Dashboard', path: '/dashboard', icon: <RxDashboard /> },
        {
            blank: false, title: 'Catalog', path: '/catalog', icon: <AiOutlineUnorderedList />,
            subMenu: [
                { title: 'Products', 'path': '/catalog/products' },
                { title: 'Categories', 'path': '/catalog/categories' },
                { title: 'Attiributes', 'path': '/catalog/attiributes' },
                { title: 'Coupons', 'path': '/catalog/coupons' },
            ]
        },
        {
            blank: false, title: 'Customers', path: '/customers', icon: <svg width="1em" height="1em" viewBox="0 0 25 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_582_418)">
                    <path d="M22.1067 3.49673H12.5V3.49846H2.89327C2.29845 3.49758 1.94196 3.31378 1.93257 3.40955V2.62146C1.93257 2.13854 2.36413 1.74622 2.89327 1.74622H24.0281C24.5591 1.74622 24.9888 1.35476 24.9888 0.870926C24.9888 0.387093 24.5591 -0.00434113 24.0281 -0.00434113H2.89327C1.36993 -0.00434113 0.131776 1.08121 0.030706 2.44626H0.0112305V25.3786C0.0112305 26.8265 1.30398 28.0044 2.89327 28.0044H22.1067C23.696 28.0044 24.9888 26.8265 24.9888 25.3785V5.68576C24.9888 4.47884 23.696 3.49673 22.1067 3.49673ZM23.0674 25.3785C23.0674 25.8614 22.6359 26.2538 22.1067 26.2538H2.89331C2.3642 26.2538 1.9326 25.8615 1.9326 25.3785V5.14376C2.23223 5.20753 2.55097 5.24899 2.89331 5.24899H12.5V5.24729H22.1067C22.694 5.24729 23.0674 5.53532 23.0674 5.68576V25.3785H23.0674Z" fill="#6B6B6B" />
                    <path d="M15.802 16.2063C16.7253 15.4636 17.3203 14.3898 17.3203 13.182C17.3203 10.9485 15.3257 9.13216 12.8753 9.13216C10.4248 9.13216 8.43026 10.9485 8.43026 13.182C8.43026 14.3279 8.9602 15.3589 9.80243 16.0965C7.51766 17.088 5.92346 19.1957 5.92346 21.6509C5.92346 22.1347 6.35316 22.5262 6.88417 22.5262C7.41517 22.5262 7.84487 22.1347 7.84487 21.6509C7.84487 19.2157 10.0195 17.2344 12.6914 17.2344C15.3632 17.2344 17.5379 19.2157 17.5379 21.651C17.5379 22.1347 17.9676 22.5262 18.4986 22.5262C19.0296 22.5262 19.4593 22.1348 19.4593 21.651C19.4593 19.2778 17.9642 17.2371 15.802 16.2064L15.802 16.2063ZM12.8753 10.8827C14.2675 10.8827 15.3989 11.9144 15.3989 13.182C15.3989 14.4505 14.2675 15.4821 12.8753 15.4821C11.4831 15.4821 10.3516 14.4505 10.3516 13.182C10.3516 11.9144 11.483 10.8827 12.8753 10.8827Z" fill="#6B6B6B" />
                </g>
                <defs>
                    <clipPath id="clip0_582_418">
                        <rect width="25" height="28" fill="currentColor" />
                    </clipPath>
                </defs>
            </svg>
        },
        { blank: false, title: 'Orders', path: '/orders', icon: <BsFileEarmarkText /> },
        { blank: false, title: 'Settings', path: '/settings', icon: <GiSettingsKnobs /> },
        {
            blank: true, title: 'Online Store', path: 'https://ecloset-frontend.vercel.app', icon: <svg width="1em" height="1em" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_582_631)">
                    <path d="M23.672 2.62568C23.6309 1.90776 23.3142 1.23361 22.7882 0.744295C22.2623 0.25498 21.5679 -0.0115821 20.8503 0.000386261H4.12142C3.40985 -0.00069282 2.72495 0.271655 2.20777 0.761343C1.69059 1.25103 1.38051 1.92078 1.34137 2.63266L0 12.1799C0.00543807 12.6657 0.142889 13.1409 0.397587 13.5544C0.652284 13.9678 1.0146 14.3039 1.44561 14.5266V21.9777C1.45113 22.7836 1.77546 23.5544 2.34746 24.121C2.91945 24.6875 3.69239 25.0037 4.49671 24.9999H20.4819C22.567 24.9999 23.533 23.6908 23.533 21.9777V14.5544C23.9755 14.3347 24.3486 13.9966 24.6111 13.5774C24.8736 13.1583 25.0153 12.6746 25.0203 12.1798L23.672 2.62568ZM21.9762 21.9777C21.9915 22.1739 21.9635 22.3711 21.8944 22.5553C21.8252 22.7395 21.7165 22.9063 21.576 23.0438C21.4354 23.1813 21.2665 23.2862 21.081 23.351C20.8956 23.4159 20.6982 23.4392 20.5028 23.4192H4.51757C4.13166 23.4229 3.75999 23.2734 3.48386 23.0032C3.20773 22.7331 3.04962 22.3644 3.04413 21.9777V14.8748H21.9762V21.9777ZM22.2403 13.294H2.78004C2.47902 13.3062 2.18473 13.2026 1.95736 13.0046C1.72999 12.8066 1.58671 12.529 1.55682 12.2286L2.87734 2.68835C2.91167 2.38245 3.05775 2.1001 3.28744 1.89568C3.51714 1.69126 3.8142 1.57922 4.12142 1.58115H20.8503C21.1569 1.57636 21.454 1.68776 21.6821 1.89306C21.9102 2.09837 22.0525 2.38242 22.0805 2.68835L23.4705 12.2286C23.4405 12.5302 23.2963 12.8088 23.0674 13.0071C22.8385 13.2053 22.5425 13.308 22.2403 13.294L22.2403 13.294Z" fill="#6B6B6B" />
                    <path d="M19.5923 7.01978H5.05969C4.83204 7.01978 4.61372 7.11038 4.45275 7.27167C4.29179 7.43295 4.20135 7.6517 4.20135 7.87979C4.20135 8.10787 4.29179 8.32662 4.45275 8.4879C4.61372 8.64919 4.83204 8.73979 5.05969 8.73979H19.5923C19.82 8.73979 20.0383 8.64919 20.1993 8.4879C20.3602 8.32662 20.4507 8.10787 20.4507 7.87979C20.4507 7.6517 20.3602 7.43295 20.1993 7.27167C20.0383 7.11038 19.82 7.01978 19.5923 7.01978Z" fill="#6B6B6B" />
                </g>
                <defs>
                    <clipPath id="clip0_582_631">
                        <rect width="25" height="25" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        },
    ];

    const [sidebarStatus, setSidebarStatus] = useState(false);
    return (
        <GetGlobalContext.Provider value={{ sidebarMenu, setLastOpenedLink, lastOpenedLink, setActiveMenuItem, activeMenuItem, sidebarStatus, setSidebarStatus }}>
            {children}
        </GetGlobalContext.Provider>
    )
}