import React from 'react'
import TopBar from './topbar/TopBar'
import './Admin.css'
import Sidebar from './sidebar/Sidebar'

function Admin() {
  return (
    <div>
      <TopBar />
      <div className='containerAdmin'>
        <Sidebar />
        <div className='other'>
          other page 13
        </div>
      </div>
    </div>
  )
}

export default Admin