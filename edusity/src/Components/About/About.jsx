import React, { useState } from "react";
import "./About.css";
import about_img from "../../assest/about.png";
import play_img from "../../assest/play-icon.png";

const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img
          src={play_img}
          alt=""
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>About Iniversity</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Embark on a transformative education journey with our university's
          comprehensive education programs. Our cutting-edge curriculum is
          design to empower students with knowledge, skills, and experiences to
          excel in the dynamic field of educaion
        </p>
        <p>
          With a focus on innovation, hands-on learning, and personalized
          mentorchip, our programs prepare aspiring educators to make a
          meaningful impact in classrooms, schools, and communities.
        </p>
        <p>
          Whether you aspire to become a teacher, administrator, counselor, or
          educational leader, our diverse range of programs offer the perfect
          pathway to achieve your goals and unlock your full potential in
          shaping the future of education
        </p>
      </div>
    </div>
  );
};

export default About;
