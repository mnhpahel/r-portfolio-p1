import React from "react";
import { Link } from "react-router-dom";

import "./HeroImg.css";
import HeroIntroImg from "../../assets/heroimg3.jpg";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img src={HeroIntroImg} className="hero-img" alt="HeroImage" />
      </div>
      <div className="content">
        <p>Hi, I'm a Beganar Web Developer</p>
        <h1>React Developer</h1>
        <div>
          <Link className="btn" to="/project">
            Projects
          </Link>
          <Link className="btn btn-light" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
