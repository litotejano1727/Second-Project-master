import React from "react"
import "./style.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <h1>Online Shop</h1>
            <p>"Our computer is a powerful and reliable device that is perfect for all your computing needs. With a fast processor, plenty of storage, and a sharp display, this computer will help you stay productive and entertained wherever you are. Whether you're browsing the web, working on a project, or playing your favorite games, this computer has the speed and performance you need. Plus, with a sleek design and slim profile, it will look great on any desk or in any backpack. Shop now and get the best computer for your needs."</p>
            <div className='icon d_flex'>
              <div className='img d_flex'>
                <i class='fa-brands fa-google-play'></i>
                <span>Google Play</span>
              </div>
              <div className='img d_flex'>
                <i class='fa-brands fa-app-store-ios'></i>
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className='box'>
            <h2>About Us</h2>
            <ul>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li>
            </ul>
          </div>
          <div className='box'>
            <h2>Contact Us</h2>
            <ul>
              <li>Metro Manila Philippines</li>
              <li>Email: help-online-shop@gmail.com</li>
              <li>Phone: +639876543210</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
