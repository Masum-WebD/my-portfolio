import React from 'react';
import Identity from './Identity';
import Navbar from './Navbar';
import About from './About'
import Skills from './Skills';
import Contact from './Contact';
import Projects from './Projects';

const Home = () => {
    return (
        <div >
           <Identity></Identity>
           <About></About>
           <Skills></Skills>
           <Projects></Projects>
           <Contact></Contact>
        </div>
    );
};

export default Home;