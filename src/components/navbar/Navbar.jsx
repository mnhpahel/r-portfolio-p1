import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

// importing navbar.css
import "./Navbar.css";

const Navbar = () => {
  const [hamburgerClick, sethamburgerClick] = useState(true);
  const [scrollColor, setScrollColor] = useState(false);

  const handleHamburgerClick = () => {
    sethamburgerClick(!hamburgerClick);
  };

  const changeScrollColor = () => {
    if(window.scrollY >= 100){
      setScrollColor(true);
    }else{
      setScrollColor(false);
    }
  };

  // if you use addEventListener then you don't need to use onScroll.
  window.addEventListener('scroll', changeScrollColor);

  return (
    <div className={scrollColor ? "header header-scroll-bg" : "header"}/* onScroll={changeScrollColor} */>
      <Link to="/">
        <h1>nhpGroup</h1>
      </Link>
      <ul className={hamburgerClick ? "nav-menu" : "nav-menu active"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/project">Project</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleHamburgerClick}>
        {hamburgerClick ? (
          <GiHamburgerMenu
            size={20}
            style={{ color: "#fff" }}
          />
        ) : (
          <FaTimes
            size={20}
            style={{ color: "#fff" }}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
