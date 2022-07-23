import { Link } from "react-router-dom";
import img from "../Asset/logo.png";

const Navbar = () => {
  return (
    <div className="navbar z-40 px-10 lg:max-w-96 sm:max-w-100  sticky top-0  bg-[#373737]">
      <div className="navbar-start ">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52"
          >
            <li>
              <a className="uppercase" href="#about">
                About
              </a>
              <a className="uppercase" href="#skill">
                Skill
              </a>
              <a className="uppercase" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl" href=" ">
          <img src={img} width={50} height={40} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 text-white">
          <li>
            <a className="uppercase" href="#about">
              About
            </a>
            <a className="uppercase" href="#skill">
              Skill
            </a>
            <a className="uppercase" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a
          className="btn bg-[#FF87B7] px-3 text-white"
          href="https://drive.google.com/file/d/1mTzp_TEzS612L4OLUAsDJmk0khjlEdo6/view?usp=sharing"
          download="GFG"
          target="_blank"
          rel="noreferrer"
        >
          RESUME
        </a>
      </div>
    </div>
  );
};

export default Navbar;
