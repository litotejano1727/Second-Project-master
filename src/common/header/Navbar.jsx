import React, { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [MobileMenu, setMobileMenu] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='categories d_flex'>
            <span class='fa-solid fa-border-all'></span>
            <h4>
              Categories
            </h4>
          </div>

          <div className='navlink'>
            <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
              
              <li>
                <Link to='/'>home</Link>
              </li>
              <li>
                <Link to='/categories'>pages</Link>
              </li>
              <li>
                <Link to='/vendor'>account</Link>
              </li>
              <li>
                <Link to='/track'>track</Link>
              </li>
              <li>
                <Link to='/contact'>contact</Link>
              </li>
              <li>
               <Link to='/signin'>Login</Link>
               </li>
            </ul>

            <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
              {MobileMenu ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
