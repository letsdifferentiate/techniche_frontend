import React from 'react'
import "./header.css"
import logo  from "./logo.svg"
import { Link } from 'react-router-dom'


function Header() {
  return (
    <div className='fixed top-0 w-[100vw] z-50'>

            <nav className="navbar">
            <div className="navbar-logo">
              <a href="#">  <img src={logo} alt="Logo"/> </a>
            </div>
            <ul className="navbar-links">
                <li><a href="#">Events</a></li>
                <li><a href="#">Competitions</a></li>
                <li><a href="#">Workshops</a></li>
                <li><a href="#">PR Intern</a></li>
            </ul>
            <div className="navbar-auth">
                <Link to="/login">Login/SignUp</Link>
                <a href="#"><button className='register-button'>Register</button> </a>
            </div>
            </nav>


    </div>
  )
}

export default Header