import { useContext, useEffect, useState } from 'react'

import './App.scss'
import Layout from './shared/layout/Layout'
import { Route, Routes } from 'react-router-dom'
import { DashboardPage, ProductPage } from './routes/routes'
import { GetGlobalContext } from './context/GlobalContext'

function App() {
  const globalContext = useContext(GetGlobalContext);
  useEffect(() => {
    if (window.innerWidth < 768) {
      globalContext.setSidebarStatus(false);
    }
  }, [])
  return (
    <Routes>
      <Route path='/' element={<Layout><DashboardPage /></Layout >} />
      <Route path='/dashboard' element={<Layout><DashboardPage /></Layout >} />
      <Route path='/products' element={<Layout><ProductPage /></Layout >} />
      <Route path='*' element={<Layout title={'404'}><DashboardPage /></Layout >} />
    </Routes>
  )
}

export default App
