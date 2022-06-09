import React from "react";

const Skills = () => {
  return (
    <div>
      <div className="flex justify-center mt-14">
        <div className="w-52 mt-7 ml-1 h-1 bg-[#FF87B7]"></div>
        <h1 className="text-4xl text-white font-bold ">My Skill </h1>

      </div>
      <div className=" ml-72 grid  lg:grid-cols-2 sm:grid-cols-1 ">
            <div className='mt-10 mr-10'>
                <div className='mb-5'>
                <p className='text-white font-bold text-2xl'>HTML</p>
                <h2 className='text-white text-2xl pl-[275px] '>85%</h2>
                <progress class="progress bg-white h-5 progress-secondary w-80" value="85" max="100"></progress>
                </div>
                <div className='mb-5'>
                <p className='text-white font-bold text-2xl'>CSS</p>
                <h2 className='text-white text-2xl pl-[275px] '>85%</h2>
                <progress class="progress bg-white h-5 progress-secondary w-80" value="85" max="100"></progress>
                </div>
                <div className='mb-5'>
                <p className='text-white font-bold text-2xl'>BootStrap</p>
                <h2 className='text-white text-2xl pl-[275px] '>85%</h2>
                <progress class="progress bg-white h-5 progress-secondary w-80" value="85" max="100"></progress>
                </div>
            </div>
            <div className='mt-10'>
                <div className='mb-5'>
                <p className='text-white font-bold text-2xl'>Tailwind css</p>
                <h2 className='text-white text-2xl pl-[275px] '>80%</h2>
                <progress class="progress bg-white h-5 progress-secondary w-80" value="80" max="100"></progress>
                </div>
                <div className='mb-5'>
                <p className='text-white font-bold text-2xl'>JavaScript</p>
                <h2 className='text-white text-2xl pl-[275px] '>60%</h2>
                <progress class="progress bg-white h-5 progress-secondary w-80" value="60" max="100"></progress>
                </div>
                <div className='mb-5'>
                <p className='text-white font-bold text-2xl'>ReactJs</p>
                <h2 className='text-white text-2xl pl-[275px] '>70%</h2>
                <progress class="progress bg-white h-5 progress-secondary w-80" value="70" max="100"></progress>
                </div>
            </div>
      </div>
    </div>
  );
};

export default Skills;
