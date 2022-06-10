import facebook from "../Asset/image/facebook.png";
import github from "../Asset/image/github.png";
import linkedin from "../Asset/image/linkedin.png";

const Footer = () => {
  return (
    <footer className="mt-10 footer items-center p-4 bg-neutral text-neutral-content ">
      <div className="grid place-items-center  lg:grid-cols-2 sm:grid-cols-1">
        <div className="items-center grid-flow-col">
          <p>Copyright © 2022 - Masum_Web Developer</p>
        </div>
        <div className=" flex gap-4 md:place-self-center md:justify-self-end">
          <a
            href="https://www.linkedin.com/in/md-masum-rana-a87195222/"
            target="_blank"
          >
            <img className="w-10 h-10" src={linkedin} alt="" />
          </a>
          <a href="https://github.com/Masum-WebD" target="_blank">
            <img className="w-10 h-10" src={github} alt="" />
          </a>
          <a href="https://www.facebook.com/Masum3940 " target="_blank">
            <img className="w-10 h-10" src={facebook} alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
