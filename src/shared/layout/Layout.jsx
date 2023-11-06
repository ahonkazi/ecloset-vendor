import React from 'react'
import Header from '../components/header/Header'
import Sidebar from '../components/sidebar/Sidebar'
import { MainWrapper, MainWrapperDefault } from '../components/wrapper/DefaultWrapper'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <Sidebar />
            <MainWrapper>
                {children}
            </MainWrapper>
        </>
    )
}

export default Layout

export const LayoutDefault = ({ children }) => {
    return (
        <>
            <Header />
            <Sidebar />
            <MainWrapperDefault>
                {children}
            </MainWrapperDefault>
        </>
    )
}
