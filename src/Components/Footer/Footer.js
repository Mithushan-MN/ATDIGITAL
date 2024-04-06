import React from "react";
import "./Footer.css";
import logo from "../Assets/Logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fmain">
        <div className="fleft">
          <img src={logo} />
          <p>
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve single objective - your
            business results.
          </p>
        </div>
        <div className="fright">
            <div className="frightone">
                <h3>Our Technologies</h3>
                <span>ReactJS</span>
                <span>Gatsby</span>
                <span>NextJS</span>
                <span>NodeJS</span>
            </div>
            <div className="frighttwo">
                <h3>Our Services</h3>
                <span>Social media Marketing</span>
                <span>Web & Mobile App Development</span>
                <span>Data & Analytics</span>
                
            </div>
        </div>
      </div>

      <div className="fbottom">
      <hr></hr>
      <div className="bottomlinks">
        <p>Privacy Policy</p>
        <p>|</p>
        <p>Terms & Conditions</p>
      </div>
      </div>
      

    </div>
  );
};

export default Footer;
