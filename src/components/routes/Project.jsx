import React from 'react';

import Navbar from '../navbar/Navbar';
import HeroImg2 from '../navbar/HeroImg2';
import Work from '../projectdetails/Work';
import PriceingCard from '../projectdetails/PriceingCard';
import Footer from '../footer/Footer';

const Project = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="PROJECTS." text="Some of my most recent works."/>
      <Work/>
      <PriceingCard/>
      <Footer/>
    </div>
  )
}

export default Project