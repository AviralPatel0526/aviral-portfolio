

import React from "react";
import { FaHome, FaFolderOpen, FaWrench, FaEdit } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = ({ isMobile }) => {
  return (
    <div
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 bg-white opacity-75 text-black rounded-md shadow-lg gap-6 flex px-5 py-3 mx-auto z-10 ${
        isMobile ? "lg:hidden" : "hidden lg:flex"
      }`}
    >
      <Link
        to="home"
        smooth={true}
        duration={500}
        containerId={isMobile ? "" : "scroll-container"}
        className="hover:text-orange-500"
      >
        <FaHome className="text-xl" />
      </Link>
      <Link
        to="project"
        smooth={true}
        duration={500}
        containerId={isMobile ? "" : "scroll-container"}
        className="hover:text-orange-500"
      >
        <FaFolderOpen className="text-xl" />
      </Link>
      <Link
        to="tools"
        smooth={true}
        duration={500}
        containerId={isMobile ? "" : "scroll-container"}
        className="hover:text-orange-500"
      >
        <FaWrench className="text-xl" />
      </Link>
      <a
        href="https://drive.google.com/file/d/13UxC9wV5lHXa8Cb_GV9dmRZq93sfIxXm/view?usp=sharing"
        className="hover:text-orange-500"
        target="_blank"
      >
        <FaEdit className="text-xl" />
      </a>
    </div>
  );
};

export default Navbar;
