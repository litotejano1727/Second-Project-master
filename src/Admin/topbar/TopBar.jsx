import React from 'react'
import "./topbar.css"
import { Language, Settings, Notifications } from '@mui/icons-material';


function TopBar() {
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">Admin</span>
            </div>
            <div className="topRight">
              <div className="topbarIconContainer">
                <Notifications />
                <span className='topIconBadge'>2</span>
              </div>
              <div className="topbarIconContainer">
                <Language />
                <span className='topIconBadge'>2</span>
              </div>
              <div className="topbarIconContainer">
                <Settings/>
              </div>
              <img src="https://wallpaperaccess.com/full/766746.jpg" alt="avatar" className="topAvatar" />
            </div>
        </div>
    </div>
  )
}

export default TopBar