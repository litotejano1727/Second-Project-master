import React from 'react'
import './sidebar.css'
import { Home, Timeline, PermIdentity, Storefront, BarChart, MailOutline, DynamicFeed, ChatBubbleOutline, WorkOutline, ReportProblem, AddShoppingCart, PersonAddAlt} from '@mui/icons-material'
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
                    <Link to="/Admin/newUser" className='link'>
                        <li className="sidebarListItem">
                            <PersonAddAlt className='sidebarIcon' />
                            Add Users
                        </li>
                    </Link>
                    <Link to="/Admin/Products" className='link'>
                        <li className="sidebarListItem">
                            <Storefront className='sidebarIcon'/> 
                            Products
                        </li>
                    </Link>
                    <Link to="/Admin/newproduct" className='link'>
                        <li className="sidebarListItem">
                            <AddShoppingCart className='sidebarIcon'/>
                            Add Products
                        </li>
                    </Link>
                    <li className="sidebarListItem">
                        <BarChart className='sidebarIcon'/> 
                        Transactions
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