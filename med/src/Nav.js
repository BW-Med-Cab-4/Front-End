import React from 'react'
import {Link} from 'react-router-dom'

function Nav (){
    return (
    <nav className ="header-nav">
        <ul className ="navbar">
          <li className = "nav-item">
            <Link to = "/"> Home </Link>
          </li>
          <li className = "nav-item">
            <Link to = "/login"> Login</Link>
          </li>
          <li className = "nav-item">
            <Link to = "/signup"> Sign up</Link>
          </li>
        </ul>
    </nav>
    )
}
export default Nav;