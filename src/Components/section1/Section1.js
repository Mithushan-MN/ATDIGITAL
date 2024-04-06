import React from "react";
import "./Section1.css";
import img0ne from "../Assets/image 2 (1).png";

const Section1 = () => {
  return (
    <div className="section1">
      <div className="sectionimg">
        <img src={img0ne} alt="" />
      </div>
      <div className="sectiontxt">
        <h2>Web & Mobile App Development</h2>
        <p>
          Your web and mobile Apps are pieces of the puzzle to grow your
          business. We use frameworks which tailor content and engagement
          methods to respond to different intents shown by your potential
          customers who interact with your business online.
        </p>
        <button>LEARN MORE</button>
      </div>
    </div>
  );
};

export default Section1;
