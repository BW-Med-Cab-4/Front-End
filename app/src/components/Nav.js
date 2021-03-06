import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav className="header-nav">
        <ul className="navbar">
          <li className="nav-item">
            {/* <Link to = "/"> Home </Link> */}
            <a href="https://dazzling-cori-82e5f3.netlify.app/"> Home </a>
          </li>
          <li className="nav-item">
            <Link to="/login"> Login</Link>
          </li>
          <li className="nav-item">
            <Link to="/"> Sign up</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
