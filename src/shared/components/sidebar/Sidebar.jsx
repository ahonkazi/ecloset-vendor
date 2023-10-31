import React, { useContext } from 'react'
import LogoGreen from '../../../assets/LogoGreen'
import { RxDashboard, RxListBullet } from 'react-icons/rx'
import './sidebar.scss';
import { Link, NavLink } from 'react-router-dom';
import { GetGlobalContext } from '../../../context/GlobalContext';
import LogoIconGreen from '../../../assets/LogoIconGreen';
import { AiOutlineLogout } from 'react-icons/ai';
import { Button, IconButton } from '@mui/material';
const Sidebar = () => {
    const globalContext = useContext(GetGlobalContext);
    return (
        <aside className={`${globalContext.sidebarStatus ? 'translate-x-0 w-full xs:w-[300px] ' : '-translate-x-full xs:translate-x-0 w-[60px]  '}   duration-300 overflow-hidden  h-screen  bg-white shadow-1 z-[100] fixed top-0 left-0`}>
            <div className="sidebar-header  h-[60px] flex  items-center">
                <div className="logo flex justify-between ml-2.5 mr-5 w-full ">
                    {/* <Link to={'/'} className='flex items-center justify-start'>
                        <span className={`${globalContext.sidebarStatus ? 'block' : 'hidden '}`}>
                            <LogoGreen />
                        </span>
                        <span className={`${globalContext.sidebarStatus ? 'hidden' : 'hidden xs:block'}`}>
                            <LogoIconGreen />
                        </span>
                    </Link> */}
                    <Link to={'/'} className='flex items-center h-full'>
                        <span className={`${globalContext.sidebarStatus ? '-translate-x-full' : ''} duration-300`}>
                            <LogoIconGreen />
                        </span>
                        <span className={`${globalContext.sidebarStatus ? '-translate-x-[60px]' : ''} duration-300`}>
                            <LogoGreen />
                        </span>

                    </Link>

                    <span className="md:hidden">
                        <IconButton  onClick={() => globalContext.setSidebarStatus(!globalContext.sidebarStatus)}>
                            <svg width="18px" height="18px" viewBox="0 0 25 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 1H25" stroke="black" />
                                <path d="M0 9H25" stroke="black" />
                                <path d="M0 17H25" stroke="black" />
                            </svg>
                        </IconButton>
                    </span>
                </div>
            </div>
            <div className="sidebar-menu font-WorkSans  h-[400px] mt-[30px] ">
                <ul className='flex flex-col gap-2 md:gap-4'>
                    {
                        globalContext?.sidebarMenu?.map((item, index) =>
                            <li>
                                <NavLink target={item.blank ? '_blank' : ''} to={item.path} className='sidebarMenuItem'>
                                    <div className={`duration-300 ${globalContext.sidebarStatus ? 'w-[20px] lg:w-[40px] ' : 'w-[40px]  flex justify-center xs:justify-start lg:w-[40px]'}   shrink-0 ml-2.5 mr-5`}>
                                        <p className="icon text-lg lg:text-2xl shadow-2 block bg-white p-2 rounded-md">
                                            {item.icon}
                                        </p>
                                    </div>
                                    <p className="text whitespace-nowrap">
                                        {item.title}
                                    </p>
                                </NavLink>
                            </li>
                        )
                    }
                    <li>
                        <button className='sidebarMenuItem'>
                            <div className={`duration-300 ${globalContext.sidebarStatus ? 'w-[20px] lg:w-[40px] ' : 'w-[40px]  flex justify-center xs:justify-start lg:w-[40px]'}   shrink-0 ml-2.5 mr-5`}>
                                <p className="icon text-lg lg:text-2xl shadow-2 block bg-white p-2 rounded-md">
                                    <AiOutlineLogout />
                                </p>
                            </div>
                            <p className="text whitespace-nowrap">
                                Logout
                            </p>
                        </button>
                    </li>

                </ul>
            </div>
        </aside>
    )
}

export default Sidebar