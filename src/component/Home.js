import React from 'react';
import Identity from './Identity';
import Navbar from './Navbar';
import About from './About'
import Skills from './Skills';
import Contact from './Contact';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
           <Navbar></Navbar> 
           <Identity></Identity>
           <About></About>
           <Skills></Skills>
           <Contact></Contact>
           <Footer></Footer>
        </div>
    );
};

export default Home;