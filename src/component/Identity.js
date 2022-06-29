const Identity = () => {
  return (
    <div className="px-32 mt-20 ">
      <h2 className="text-[#FF87B7] text-3xl"> Hello ! I am</h2>
      <h1 className="text-white text-5xl font-bold ">MD MASUM RANA</h1>

      <div className="mt-10">
        <h1 className="text-[#FF87B7] text-3xl font-bold ">Web Developer</h1>
        <p className="text-2xl text-white font-bold">
          Front End Developer || Web developer || React Developer
        </p>
        <div className="mt-5">
          <a
            className="bg-[#FF87B7] text-black px-4 py-3 rounded mr-1  font-bold"
            href="https://drive.google.com/file/d/1mTzp_TEzS612L4OLUAsDJmk0khjlEdo6/view?usp=sharing"
            download="GFG"
            target="_blank"
          >
            {" "}
            RESUME
          </a>
          <a className="btn btn-primary font-bold" href="#about">
            About Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Identity;
