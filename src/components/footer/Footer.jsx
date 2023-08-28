import React from "react";
import "./Footer.css";
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size="20" style={{ color: "#fff", marginRight: "2rem" }} className="l-icon"/>
            <div>
              <p>D-block, Mirpur-12</p>
              <p>Bangladesh</p>
            </div>
          </div>
          <div className="phone">
              <FaPhone
                size="20"
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              <h4>
              12-2324-12234
            </h4>
          </div>
          <div className="email">
              <FaMailBulk
                size="20"
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              <h4>
              npahel9@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h2>About the company</h2>
          <p>
            This is me Nurul Hassan. CEO & Founder of nhpGroup. <br /> I enjoy
            discussing new projects and design challenges.
          </p>
          <div className="social">
            <FaFacebook
              size="20"
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <FaTwitter
              size="20"
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <FaLinkedin
              size="20"
              style={{ color: "#fff", marginRight: "2rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
