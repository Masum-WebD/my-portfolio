import React from 'react';
import Identity from './Identity';
import Navbar from './Navbar';
import About from './About'
import Skills from './Skills';
import Contact from './Contact';

const Home = () => {
    return (
        <div>
           <Navbar></Navbar> 
           <Identity></Identity>
           <About></About>
           <Skills></Skills>
           <Contact></Contact>
        </div>
    );
};

export default Home;