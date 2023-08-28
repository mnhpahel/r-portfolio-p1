import React from 'react';
import './App.css';
// importing components
import Home from './components/routes/Home';
import About from './components/routes/About';
import Project from './components/routes/Project';
import Contact from './components/routes/Contact';

// importing routes
import { Routes, Route } from 'react-router-dom';
// import NoMatch from './components/routes/NoMatch';


const App = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        {/* <Route path='*' element={<NoMatch/>}/> */}
      </Routes>
    </>
  )
}

export default App