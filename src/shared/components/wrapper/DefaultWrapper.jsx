import React, { useContext } from 'react'
import { GetGlobalContext } from '../../../context/GlobalContext'

export const MainWrapper = ({ children, title }) => {
    const globalContext = useContext(GetGlobalContext);
    return (

        <main className={`pt-[50px] w-full xl:pt-[60px] duration-200 ${globalContext.sidebarStatus ? 'md:pl-[300px]' : ''}`}>
            <div className="site-container">
                {children}
            </div>
        </main>
    )
}

export const MainWrapperDefault = ({ children, title }) => {
    const globalContext = useContext(GetGlobalContext);
    return (

        <main className={`pt-[50px] w-full xl:pt-[60px] duration-200 ${globalContext.sidebarStatus ? 'md:pl-[300px]' : ''}`}>
            <div className="">
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


export const PageWrapper = ({ children, title }) => {
    return (
        <>
            <section className="pt-4 pb-2 lg:pb-4 xl:py-6 wrapper-header">
                <h2 className='text-lg md:text-xl lg:text-2xl font-Literata'>{title}</h2>
            </section>
            {/* <div className="md:h-4"></div> */}
            {children}

        </>
    )
}

