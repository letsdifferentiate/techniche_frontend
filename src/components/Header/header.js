import React from 'react'
import "./header.css"
import logo  from "./logo.svg"
import { Link } from 'react-router-dom'


function Header() {
  return (
    <div className='fixed top-0 w-[100vw] z-50'>

            <nav className="navbar">
            <div className="navbar-logo">
              <Link to="/">  <img src={logo} alt="Logo"/> </Link>
            </div>
            <ul className="navbar-links">
                <li><Link to="/events">Events</Link></li>
                <li><Link to="/competitions">Competitions</Link></li>
                <li><Link to="/workshops">Workshops</Link></li>
                <li><Link to="/pr_intern">PR Intern</Link></li>
            </ul>
            <div className="navbar-auth">
                <Link to="/login">Login/SignUp</Link>
                <Link to="/signup"><button className='register-button'>Register</button> </Link>
            </div>
            </nav>


    </div>
  )
}

export default Header