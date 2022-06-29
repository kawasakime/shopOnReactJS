import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="wrapper">
      <div className="about-us">
        <h1>Комнаты с нашей <br></br>мебелью</h1>
        <div className="slider">
          <img src="./img/aboutUs1.jpg" alt="" className="first"/>
          <img src="./img/aboutUs2.jpg" alt="" className="second"/>
          <img src="./img/aboutUs3.png" alt="" className="third"/>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
