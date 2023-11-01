import React from 'react'
import Header from '../components/header/Header'
import Sidebar from '../components/sidebar/Sidebar'
import { MainWrapper } from '../components/wrapper/DefaultWrapper'

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