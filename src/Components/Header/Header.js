import React from "react";
import logo from "../Assets/Logo.png";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="nav-menu">
        <li>SERVICES</li>
        <li>ABOUT US</li>
        <li>CONTACT US</li>
        <li>CAREERS</li>
      </div>
    </div>
  );
};

export default Header;
