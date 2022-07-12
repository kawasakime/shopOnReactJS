import React from "react";
import { useState } from "react";
import "./AboutUs.css";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

const AboutUs = () => {
  const [classes, setClasses] = useState(["first", "second", "third"]);

  const [slides, setSlides] = useState([
    { img: "aboutUs1.jpg", class: "first" },
    { img: "aboutUs2.jpg", class: "second" },
    { img: "aboutUs3.png", class: "third" },
  ]);

  function nextSlide() {
    const first_element = classes.shift();
    classes.push(first_element);
    editSlides();
  }

  function backSlide() {
    const first_element = classes.pop();
    classes.unshift(first_element);
    editSlides();
  }

  const editSlides = () => {
    const copySlides = [...slides];

    copySlides.forEach((e, i) => {
      e.class = classes[i];
    });

    setSlides(copySlides);
  };

  return (
    <div className="wrapper">
      <div className="about-us">
        <div className="slider">
          {slides.map((e) => {
            return (
              <img
                key={e.img}
                src={"./img/" + e.img}
                alt=""
                className={e.class}
              />
            );
          })}
          <button className="btn-switch-slide back" onClick={() => backSlide()}>
            <GrLinkPrevious />
          </button>
          <button className="btn-switch-slide next" onClick={() => nextSlide()}>
            <GrLinkNext />
          </button>
        </div>
        <h1>
          Комнаты с нашей мебелью
        </h1>
      </div>
    </div>
  );
};

export default AboutUs;
