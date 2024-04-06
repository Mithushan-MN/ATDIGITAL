import React from "react";
import imgtwo from "../Assets/image 1 (3).png";
import "./Section2.css";

const Section2 = () => {
  return (
    <div className="section2">
      <div className="sectiontxt2">
        <h2>Digital Strategy Consulting</h2>
        <p>
          Your digital strategy should complement the overall marketing strategy
          of the company. In online marketing, each component will never work in
          isolation and every business needs a different mix. We provide a clear
          concept and strategic overview to find the most efficient model for
          your business.
        </p>
        <button>LEARN MORE</button>
      </div>
      <div className="sectionimg2">
        <img src={imgtwo} alt="" />
      </div>
    </div>
  );
};

export default Section2;
