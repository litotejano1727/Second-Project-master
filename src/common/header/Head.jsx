import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container d_flex containerhead'>
          <div className='contactInfo'>
            <div className="contact Numbe pointer">
              <i className='fa fa-phone'></i>
              <label className="pointer"> +639876543210</label>
            </div>
            <div className="contact Email pointer">
              <i className='fa fa-envelope pointer'></i>
              <label className="pointer"> support@online-shop.com</label>
            </div>
          </div>
          <div className='right RText'>
            <label className="pointer">Theme FAQ"s</label>
            <label className="pointer">Need Help?</label>
            <span className="pointer">🏳️‍⚧️</span>
            <label className="pointer">EN</label>
            <span className="pointer">🏳️‍⚧️</span>
            <label className="pointer">PHP</label>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
