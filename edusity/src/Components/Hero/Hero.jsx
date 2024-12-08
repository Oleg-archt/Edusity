import React from "react";
import "./Hero.css";
import dark_arrow from "../../assest/dark-arrow.png";

function Hero() {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We Ensure better for a better world</h1>
        <p>
          Our cutting-edge curriculc is design to empower students with the
          knowlege, skills, and experiences needed to excel in the dynamic field
          of education
        </p>
        <button className="btn ">
          Explore more <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
}

export default Hero;