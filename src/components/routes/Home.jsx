import React from 'react';
import Navbar from '../navbar/Navbar';
import HeroImg from '../navbar/HeroImg';
import Work from '../projectdetails/Work';
import Footer from '../footer/Footer';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Home