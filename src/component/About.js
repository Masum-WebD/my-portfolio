import React from "react";
import img from '../Asset/masum.png'

const about = () => {
  return (
    <div className="mx-20">
      <div className="flex justify-center mt-14">
        <h1 className="text-4xl text-white font-bold ">About me </h1>
        <div className="w-52 mt-7 ml-1 h-1 bg-[#FF87B7]"></div>
      </div>
      <div class="hero min-h-screen bg-[#2A303C] mt-5">
        <div class="hero-content flex-col lg:flex-row-reverse mt-5">
          <img
            src={img}
            alt=""
            class="max-w-sm h-[400px] rounded-lg shadow-2xl"
          />
          <div className='w-50'>
            <p  className='text-3xl text-white'>
             Hello! I'm MD Masum Rana , a web developer.I love programming. My favorite programming language is JavaScript, I like to work with JavaScript. I'm a front-end developer now, and I'm looking forward to full-stack development. I love making the web more open to the world. I am available for any kind of job opportunity that suits my interests.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
