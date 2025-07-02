import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div>
        <div className="logo">
          <h1>up.<span>ng</span></h1>
        </div>
        <p>
           Up.ng offers a sleek, modern user interface designed specifically
           for today's education platforms. It supports a wide range of 
           features including online courses and tutorials, video lessons, 
           student and teacher dashboards, curriculum management, 
           earnings and analytics, ERP, HR tools, content management, 
           task and project tracking, eCommerce integration, and more.
        </p>
      </div>
      <div className='footerPriCon'>
        <div>
          <a href="#">Terms</a>
          <a href="#">privacy</a>
        </div>
        <p>Copyright 2025 © All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
