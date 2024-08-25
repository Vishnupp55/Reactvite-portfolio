import React from 'react'
import './Navbar.css/'
import logo from '../../assets/logo.jpg'
const Navbar = () => {
  return (
    <div className='navbar'>
        <img className='logo' src={logo} alt="" />
        <ul className='nav-menu'>
            <li className='anchor-link'>home</li>
            <li className='anchor-link'>about</li>
            <li className='anchor-link'>service</li>
            <li className='anchor-link'>portfolio</li>
            <li className='anchor-link'>contact</li>
        </ul>
        <div className='nav-connect'>
            connect me 

        </div>
    </div>
  )
}

export default Navbar