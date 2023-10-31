import React, { useContext } from 'react'
import { GetGlobalContext } from '../../../context/GlobalContext'

export const MainWrapper = ({ children }) => {
    const globalContext = useContext(GetGlobalContext);
    return (

        <main className={`pt-[50px] w-full xl:pt-[60px] duration-200 ${globalContext.sidebarStatus ? 'md:pl-[300px]' : ''}`}>
            <div className="site-container">
                {children}
            </div>
        </main>
    )
}

export const HeaderWrapper = ({ children }) => {
    const globalContext = useContext(GetGlobalContext);
    return (

        <main className={`duration-200 w-full ${globalContext.sidebarStatus ? 'md:pl-[300px]' : ''}`}>
            <div className="site-container">
                {children}
            </div>
        </main>
    )
}

