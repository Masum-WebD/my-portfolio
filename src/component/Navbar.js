import React from "react";
import { Link } from "react-router-dom";
import img from '../Asset/logo.png'


const Navbar = () => {
  return (
    <div class="navbar px-10 bg-[#373737]">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to='' className='uppercase'>About</Link>
              <Link to='' className='uppercase'>Skill</Link>
              <Link to='' className='uppercase'>Contact</Link>
            </li>
          </ul>
        </div>
        <a to='' class="btn btn-ghost normal-case text-xl" href=" ">
        <img src={img} width={50} height={40}  alt="" />
     
        </a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">
          <li>
             <Link to='' className='uppercase'>About</Link>
              <Link to='' className='uppercase'>Skill</Link>
              <Link to='' className='uppercase'>Contact</Link>
          </li>
        </ul>
      </div>
      <div class="navbar-end">
        <Link to='' class="btn bg-[#FF87B7] px-3 text-white" href=" ">
          RESUME
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
