import React from 'react'
import { Link } from 'react-router-dom'

import '../Styles/navbar.css'
import SidebarToggle from './SidebarToggle'
import pp from '../Images/pp.png'

const Navbar: React.FC = () => {
  return (
    <nav className='navbar navbar'>
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src={pp} alt="" width="25" className="me-2 d-inline-block align-text-top" />
          Developer Ralsei
        </Link>
        <ul className="nav-links">
          <li className="nav-item"><a href="#header">Home</a></li>
          <li className="nav-item"><a href="#aboutme">About Me</a></li>
          <li className="nav-item"><a href="#contactme">Contact Me</a></li>
        </ul>
        <SidebarToggle />
      </div>
    </nav>
  )
}

export default Navbar