import React, { useState } from 'react'
import {Link} from "react-scroll";
import './Navbar.css'
import logo from "../Assets/Logo.png";

const Navbar = () => {

    const [nav,setnav] = useState(false);

    const changeBackground=() => {
        if (window.scrollY >=50){
            setnav(true);
        }
        else{
            setnav(false);
        }
    }
    window.addEventListener("scroll",changeBackground);


  return (
    <nav className={nav ? "nav active" : "nav"}>
        <Link to='main' className="logo" smooth={true} duration={1000}>
            <img src={logo} alt="" />
        </Link>      

        <input type="checkbox" className='menu-btn' id='menu-btn' />
        <label htmlFor="menu-btn" className='menu-icon' >
            <span className='nav-icon'></span>
        </label>
        <ul className='menu'>
            <li><Link to="" smooth={true} duration={1000}>HOME</Link></li>
            <li><Link to="" smooth={true} duration={1000}>SERVICES</Link></li>
            <li><Link to="" smooth={true} duration={1000}>ABOUT US</Link></li>
            <li><Link to="" smooth={true} duration={1000}>CONTACT US</Link></li>
            <li><Link to="" smooth={true} duration={1000}>CAREERS</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar