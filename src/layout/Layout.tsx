import { ReactNode, useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { SiDevpost } from 'react-icons/si';
import { Link } from 'react-scroll';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <div className="bg-[#2b303b] ">
      <header className="fixed w-full h-[40px] flex justify-between items-center px-4 bg-[#252932] text-white">
        {/* logo */}
        <div className="w-full flex items-center">
          <SiDevpost size={27} color={'#2FA4FF'} />
        </div>

        {/* Menu */}
        <ul className="hidden md:flex md:text-md w-8/12 justify-around">
          <li className="hover:text-[#2FA4FF] cursor-pointer">
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="hover:text-[#2FA4FF] cursor-pointer">
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="hover:text-[#2FA4FF] cursor-pointer">
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className="hover:text-[#2FA4FF] cursor-pointer">
            <Link to="work" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li className="hover:text-[#2FA4FF] cursor-pointer">
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>

        {/* Hamburger Menu */}
        <div className="md:hidden z-10" onClick={handleClick}>
          {!nav ? <FaBars size={25} /> : <FaTimes size={25} />}
        </div>

        {/* Mobile Menu */}
        <ul
          className={
            !nav
              ? 'hidden'
              : 'absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-[#2F333F]'
          }
        >
          <li className="py-6 text-xl">
            <Link onClick={handleClick} to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="py-6 text-xl">
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="py-6 text-xl">
            <Link
              onClick={handleClick}
              to="skills"
              smooth={true}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li className="py-6 text-xl">
            <Link onClick={handleClick} to="work" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li className="py-6 text-xl">
            <Link
              onClick={handleClick}
              to="contact"
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
          <ul>
            {/* Linkedin */}
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#0e52c4]">
              <a
                href="https://www.linkedin.com/in/david-cervellon/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-around items-center w-full text-gray-300"
              >
                Linkedin <FaLinkedin size={27} />
              </a>
            </li>

            {/* GitHub */}
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
              <a
                href="https://github.com/edavid72"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-around items-center w-full text-gray-300"
              >
                GitHub <FaGithub size={27} />
              </a>
            </li>

            {/* Personal Email */}
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#f60000]">
              <a
                href="mailto:david.cervellon72@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-around items-center w-full text-gray-300"
              >
                Email <HiOutlineMail size={27} />
              </a>
            </li>

            {/* Personal Resume */}
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#787A91]">
              <a
                href={'resume'}
                rel="noopener noreferrer"
                className="flex justify-around items-center w-full text-gray-300"
              >
                Resume <BsFillPersonLinesFill size={27} />
              </a>
            </li>
          </ul>
        </div>
      </header>

      {children}
      <footer className="bg-green-400 w-full">Footer</footer>
    </div>
  );
};

export default Layout;
