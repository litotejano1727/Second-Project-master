import React from 'react'
import './sidebar.css'
import { Home, Timeline, TrendingUp, PermIdentity, Storefront, AttachMoney, BarChart, MailOutline, DynamicFeed, ChatBubbleOutline, WorkOutline, ReportProblem} from '@mui/icons-material'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul>
                    <Link to="/admin" className='link'>
                        <li className="sidebarListItem active">
                            <Home className='sidebarIcon' /> 
                            Home
                        </li>
                    </Link>
                    <Link to="/admin" className='link'>
                        <li className="sidebarListItem">
                            <Timeline className='sidebarIcon'/> 
                            Analiytics
                        </li>
                    </Link>
                    <Link to="/admin" className='link'>
                        <li className="sidebarListItem">
                            <TrendingUp className='sidebarIcon'/> 
                            Sales
                        </li>
                    </Link>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Quick Menu</h3>
                <ul>
                    <Link to="/Admin/User" className='link'>
                        <li className="sidebarListItem">
                            <PermIdentity className='sidebarIcon'/> 
                            Users
                        </li>
                    </Link>
                    <Link to="/Admin/Products" className='link'>
                        <li className="sidebarListItem">
                            <Storefront className='sidebarIcon'/> 
                            Products
                        </li>
                    </Link>
                    <Link to="/Admin" className='link'>
                        <li className="sidebarListItem">
                            <AttachMoney className='sidebarIcon'/> 
                            Transactions
                        </li>
                    </Link>
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
                        <MailOutline className='sidebarIcon'/> 
                        Mail
                    </li>
                    <li className="sidebarListItem">
                        <DynamicFeed className='sidebarIcon'/> 
                        Feedback
                    </li>
                    <li className="sidebarListItem">
                        <ChatBubbleOutline className='sidebarListItem'/> 
                        Messages
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notifications</h3>
                <ul>
                    <li className="sidebarListItem">
                        <WorkOutline className='sidebarIcon'/> 
                        Manage
                    </li>
                    <li className="sidebarListItem">
                        <Timeline className='sidebarIcon'/> 
                        Analiytics
                    </li>
                    <li className="sidebarListItem">
                        <ReportProblem className/> 
                        Reports
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Sidebar