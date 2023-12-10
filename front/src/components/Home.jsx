import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

function Home() {

  return (
    <div className="container">
     <Header />
     <Outlet />
    </div>   
  )
}
export default Home
