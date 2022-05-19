import React from 'react'
import "../Pages/HomeStyles.css";
import { Link } from "react-router-dom";


const NavBar = (props) => {
  return (
    <div name = {props.name} className="nav-bar">
      <div className="logo">
        <div className="link">
          <Link to="/"><h1>MANAGEE</h1></Link>
        </div>
      </div>

      <div className="nav-links">
        <div className="link sign-up">
          <Link to="/auth">Sign up</Link>
        </div>
      </div>
    </div>
  )
}

export default NavBar;
