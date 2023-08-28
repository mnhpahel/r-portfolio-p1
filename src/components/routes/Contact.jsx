import React from 'react';

import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import HeroImg2 from '../navbar/HeroImg2';
import Form from '../contactdetails/Form';
const Contact = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="CONTACT." text="Lets have a chat"/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact