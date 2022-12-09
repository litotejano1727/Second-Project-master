import React from 'react'
import './sidebar.css'
import { Home, Timeline, TrendingUp, PermIdentity, Storefront, AttachMoney, BarChart} from '@mui/icons-material'

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul>
                    <li className="sidebarListItem active">
                        <Home className='sidebarIcon' /> 
                        Home
                    </li>
                    <li className="sidebarListItem">
                        <Timeline className='sidebarIcon'/> 
                        Analiytics
                    </li>
                    <li className="sidebarListItem">
                        <TrendingUp className='sidebarIcon'/> 
                        Sales
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Quick Menu</h3>
                <ul>
                    <li className="sidebarListItem">
                        <PermIdentity className='sidebarIcon'/> 
                        Users
                    </li>
                    <li className="sidebarListItem">
                        <Storefront className='sidebarIcon'/> 
                        Products
                    </li>
                    <li className="sidebarListItem">
                        <AttachMoney className='sidebarIcon'/> 
                        Transactions
                    </li>
                    <li className="sidebarListItem">
                        <BarChart className='sidebarIcon'/> 
                        Reports
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Staff</h3>
                <ul>
                    <li className="sidebarListItem">
                        <Home className='sidebarIcon'/> 
                        Home
                    </li>
                    <li className="sidebarListItem">
                        <Timeline className='sidebarIcon'/> 
                        Analiytics
                    </li>
                    <li className="sidebarListItem">
                        <TrendingUp/> 
                        Sales
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notifications</h3>
                <ul>
                    <li className="sidebarListItem">
                        <Home className='sidebarIcon'/> 
                        Home
                    </li>
                    <li className="sidebarListItem">
                        <Timeline className='sidebarIcon'/> 
                        Analiytics
                    </li>
                    <li className="sidebarListItem">
                        <TrendingUp/> 
                        Sales
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Sidebar