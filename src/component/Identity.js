import React from 'react';
import { Link } from 'react-router-dom';

const Identity = () => {
    return (
        <div className='px-32 mt-20 '>
            <h2 className='text-[#FF87B7] text-3xl'> Hello ! I am</h2>
            <h1 className='text-white text-5xl font-bold '>MD MASUM RANA</h1>
            
            <div className='mt-10'>
                <h1 className='text-[#FF87B7] text-3xl font-bold '>Web Developer</h1>
                <p className='text-1xl font-bold'>Front End Developer || Web developer || React Developer</p>
                <div className='mt-5'>
                <Link to='' className='bg-[#FF87B7] text-black px-4 py-3 rounded mr-1  font-bold'> RESUME</Link>
                <button class="btn btn-outline font-bold ">About Me</button>
                </div>
            </div>
        </div>
    );
};

export default Identity;