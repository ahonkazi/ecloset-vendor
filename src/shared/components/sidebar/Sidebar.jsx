import React, { useContext, useEffect, useState } from 'react'
import LogoGreen from '../../../assets/LogoGreen'
import { RxDashboard, RxListBullet } from 'react-icons/rx'
import './sidebar.scss';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { GetGlobalContext } from '../../../context/GlobalContext';
import LogoIconGreen from '../../../assets/LogoIconGreen';
import { AiOutlineLogout } from 'react-icons/ai';
import { Button, IconButton } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import { split } from 'postcss/lib/list';
const Sidebar = () => {
    const globalContext = useContext(GetGlobalContext);
    const location = useLocation();
    const paths = split(location.pathname, '/');
    useEffect(() => {
        if (paths.includes('catalog')) {
            globalContext.setActiveMenuItem(2);
            globalContext.setSidebarStatus(true);

        }
    }, [])

    const moreMenuOptions = (index) => {

        if (globalContext.sidebarStatus === false) {
            if (index === 2) {
                globalContext.setSidebarStatus(true);
            }
        }
    }
    return (
        <aside className={`${globalContext.sidebarStatus ? 'translate-x-0 w-full xs:w-[300px] ' : '-translate-x-full xs:translate-x-0 w-[60px]  '}   duration-300 overflow-hidden  h-screen  bg-white shadow-1 z-[100] fixed top-0 left-0`}>
            <div className="sidebar-header  h-[60px] flex  items-center">
                <div className="logo flex justify-between ml-2.5 mr-5 w-full ">

                    <Link to={'/'} className='flex items-center h-full'>
                        <span className={`${globalContext.sidebarStatus ? '-translate-x-full' : ''} duration-300`}>
                            <LogoIconGreen />
                        </span>
                        <span className={`${globalContext.sidebarStatus ? '-translate-x-[60px]' : ''} duration-300`}>
                            <LogoGreen />
                        </span>

                    </Link>

                    <span className="md:hidden">
                        <IconButton onClick={() => { globalContext.setSidebarStatus(!globalContext.sidebarStatus); globalContext.setActiveMenuItem(0) }}>
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
                <ul className='flex flex-col'>
                    {
                        globalContext?.sidebarMenu?.map((item, index) =>
                            <li onClick={() => { globalContext.setLastOpenedLink(index + 1); }} >
                                <div className="sidebarMenuItemWrapper">
                                    <NavLink onClick={() => { globalContext.activeMenuItem === index + 1 ? globalContext.setActiveMenuItem(0) : globalContext.setActiveMenuItem(index + 1); moreMenuOptions(index + 1) }} target={item.blank ? '_blank' : ''} to={item.path} className='sidebarMenuLink'>
                                        <div className="sidebarMenuItem">
                                            <div className={`duration-300 ${globalContext.sidebarStatus ? 'w-[20px] lg:w-[40px] ' : 'w-[40px]  flex justify-center xs:justify-start lg:w-[40px]'}   shrink-0 ml-2.5 mr-5`}>
                                                <p className="icon text-lg lg:text-2xl shadow-2 block bg-white p-2 rounded-md">
                                                    {item.icon}
                                                </p>
                                            </div>
                                            <p className="text whitespace-nowrap">
                                                {item.title}
                                            </p>
                                        </div>
                                    </NavLink>
                                    {
                                        (item.subMenu && (globalContext.activeMenuItem === index + 1)) && (

                                            <motion.div style={{ overflow: "clip" }} transition={{ duration: 0.3 }} exit={{ height: '0' }} initial={{ height: '0' }} animate={{ height: 'auto' }} >
                                                <ul className='flex flex-col pl-16'>
                                                    {
                                                        item.subMenu?.map(subMenu =>
                                                            <li className='' >
                                                                <NavLink to={subMenu.path} className="subMenuItem">
                                                                    <span className='w-1 shrink-0 h-1 rounded-full bg-DarkGray'></span>
                                                                    <p>{subMenu.title}</p>
                                                                </NavLink>

                                                            </li>

                                                        )
                                                    }

                                                </ul>


                                            </motion.div>


                                        )
                                    }

                                </div>
                            </li>
                        )
                    }
                    <li>
                        <button className='sidebarMenuItem '>
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