import React from 'react';

import './AboutContent.css'
import { Link } from 'react-router-dom';
import reactdevimg1 from "../../assets/react-js-developer.jpg"
import reactdevimg2 from "../../assets/react-js-developer.png"

const AboutContent = () => {
  return (
    <div className='about'>
        <div className="left">
            <h1>Who Am I?</h1>
            <p>Im a react font-end developer. I create responsive websites for my clients.</p>
            <Link to="/contact">
                <button className='btn'>Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={reactdevimg1} alt="true" className='reactimg' />
                </div>
                <div className="img-stack bottom">
                    <img src={reactdevimg2} alt="true" className='reactimg' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent