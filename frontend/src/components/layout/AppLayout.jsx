import React from 'react'
import Header from '../common/Header'
import { Outlet } from 'react-router'
import Footer from '../common/Footer'

function AppLayout() {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
      
    </div>
  )
}

export default AppLayout
