import React from "react";
import { useState } from "react";
import "./styles/navbar.css";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    const [menuToggle, setMenuToggle] = useState(false);

  return (
    <>
    <nav>
    <NavLink to="/">
    <img src='https://patterns.boston.gov/images/public/seal.svg?sa26hg' alt='logo' className='seal'></img>
    </NavLink>
    
      {/* <Link className="title">Boston Housing Guide</Link> */}
      
      {/* set the menuToggle state to be the opposite of what it was by doing !menuToggle in the setMenuToggle() setter */}
      <div className="menu" onClick={() => {setMenuToggle(!menuToggle)}}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuToggle ? 'open': ''}>
        <li>
          <NavLink to="/">Homebuying guide</NavLink>
        </li>
        <li>
          <NavLink to="/resources">Homebuying Resources</NavLink>
        </li>
        <li>
          <NavLink to="/about">About This Site</NavLink>
        </li>
      </ul>
    </nav>
    
    </>
  );
};

export default NavBar;
