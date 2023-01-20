import React from 'react'
import TopBar from './topbar/TopBar'
import './Admin.css'
import Sidebar from './sidebar/Sidebar'
import  Home  from './pages/home/Home'

function Admin() {
  return (
    <div>
      <TopBar />
      <div className='containerAdmin'>
        <Sidebar />
        <Home />
      </div>
    </div>
  )
}

export default Admin