import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaXmark,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    { path: "/", link: "Home" },
    { path: "/blog", link: "Blog" },
    { path: "/services", link: "Services" },
    { path: "/about", link: "About" },
    { path: "/contact", link: "Contact" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="bg-black text-white fixed left-0 top-0 w-full">
        <nav className="px-6 py-4 flex justify-between items-center md:px-20">
          <a href="/" className="text-2xl text-white font-bold ">
            Blog<span className="text-orange-500">X</span>
          </a>

          {/* Displaying navItems  */}
          <ul className="md:flex gap-10 text-lg font-semibold ml-48 hidden">
            {navItems.map(({ path, link }) => (
              <li
                key={path}
                className="text-white hover:text-orange-500 transition duration-300 "
              >
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? "text-orange-500" : ""
                  }
                >
                  {link}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* right side navItems  */}
          <div className="text-white flex gap-4 items-center ">
            <span className="md:flex gap-4 hidden">
              <a
                href="/"
                className="hover:text-orange-400 transition duration-300"
              >
                <FaFacebook />
              </a>
              <a
                href="/"
                className="hover:text-orange-400 transition duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="/"
                className="hover:text-orange-400 transition duration-300"
              >
                <FaTwitter />
              </a>
            </span>

            <Link to="/login" className="ml-44 md:ml-0">
              <button className="bg-orange-500 rounded font-semibold md:font-bold md:py-2 md:px-6 px-3 py-1 hover:text-orange-500 hover:bg-white transition duration-500 ">
                Login
              </button>
            </Link>

            <Link to="/signup" className="md:flex hidden">
              <button className="border border-solid border-orange-500 py-2 px-4 rounded font-bold text-orange-500 hover:bg-orange-500 hover:text-white transition duration-500">
                SignUp
              </button>
            </Link>
          </div>

          {/* Mobile menu btn  */}
          <div className="md:hidden flex items-center">
            <button className="cursor-pointer" onClick={toggleMenu}>
              {isMenuOpen ? <FaXmark /> : <FaBars />}
            </button>
          </div>

          {/* Menu Items For Mobile Devices */}
        </nav>

        <ul
          className={`md:hidden gap-12 text-lg block space-y-2 py-4 mt-14 bg-black text-center font-bold transition-all duration-300 ${
            isMenuOpen ? "fixed top-0 left-0 w-full " : "hidden"
          }`}
        >
          {navItems.map(({ path, link }) => (
            <li key={path} onClick={toggleMenu}>
              <NavLink
                to={path}
                className={` ${({ isActive }) =>
                  isActive ? "text-orange-500" : ""} `}
              >
                {link}
              </NavLink>
            </li>
          ))}
        </ul>
      </header>
    </>
  );
};

export default Navbar;
