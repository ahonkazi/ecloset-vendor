import { useState } from 'react'

import './App.scss'
import Layout from './shared/layout/Layout'
import { Route, Routes } from 'react-router-dom'
import { DashboardPage } from './routes/routes'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout><DashboardPage /></Layout >} />
      <Route path='/dashboard' element={<Layout><DashboardPage /></Layout >} />
    </Routes>
  )
}

export default App
