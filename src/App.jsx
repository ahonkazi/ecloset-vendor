import { useContext, useEffect, useState } from 'react'

import './App.scss'
import Layout, { LayoutDefault } from './shared/layout/Layout'
import { Route, Routes } from 'react-router-dom'
import { AttributePage, CategoriesPage, CouponPage, CustomerPage, DashboardPage, OrderPage, ProductDetails, ProductPage } from './routes/routes'
import { GetGlobalContext } from './context/GlobalContext'
import { ProductContext } from './context/ProductContext'
import ProductDetailsWindow from './pages/product-page/components/window/ProductDetails/ProductDetailsWindow'

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
      <Route path='/products' element={<Layout><ProductContext><ProductPage /></ProductContext></Layout >} />
      <Route path='/products/:id' element={<LayoutDefault><ProductDetails /></LayoutDefault>} />
      <Route path='/categories' element={<Layout><CategoriesPage /></Layout >} />
      <Route path='/attributes' element={<Layout><AttributePage /></Layout >} />
      <Route path='/coupons' element={<Layout><CouponPage /></Layout >} />
      <Route path='/customers' element={<Layout><CustomerPage /></Layout >} />
      <Route path='/orders' element={<Layout><OrderPage /></Layout >} />
      <Route path='*' element={<Layout title={'404'}><DashboardPage /></Layout >} />
    </Routes>
  )
}

export default App
