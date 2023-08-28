import React from 'react';

import Navbar from '../navbar/Navbar';
import HeroImg2 from '../navbar/HeroImg2';
import AboutContent from '../aboutdetails/AboutContent';
import Footer from '../footer/Footer';

const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="ABOUT." text="Im a friendly Front-End-Developer"/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About