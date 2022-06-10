import img from "../Asset/logo.png";

const Navbar = () => {
  return (
    <div class="navbar px-10 lg:max-w-96 sm:max-w-100  sticky top-0  bg-[#373737]">
      <div class="navbar-start ">
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
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52"
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
        <a to="" class="btn btn-ghost normal-case text-xl" href=" ">
          <img src={img} width={50} height={40} alt="" />
        </a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">
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
      <div class="navbar-end">
        <a
          class="btn bg-[#FF87B7] px-3 text-white"
          href="https://drive.google.com/file/d/1VGXBmxlrrmhTnLM8xalywS_BGF3FTonE/view?usp=sharing"
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
