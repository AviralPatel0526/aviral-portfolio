import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import Me from '../assets/Me.jpg'
const TitlePage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="flex flex-col justify-center items-center bg-white rounded-2xl p-6 w-auto">
        {/* Image Section */}
        <div className="">
          <img
            src={Me} // Replace with your image URL
            alt="Profile"
            className="rounded-lg w-[230px] h-[270px]"
          />
          
        </div>

        {/* Name Section */}
        <div className="mt-6 text-center">
          <h1 className="text-2xl font-bold text-black">Aviral Patel</h1>
        </div>

        {/* Description Section */}
        <div className="flex items-center justify-center md:mt-12 mt-8 w-[290px]">
          <p className="ml-2 text-center text-sm text-gray-500">
            Btech Candidate in Information Technology at National Institute of Technology Raipur
          </p>
        </div>

        {/* Icons Section */}
        <div className="flex justify-center mt-6 space-x-6 text-gray-500">
          {/* Replace # with actual links */}
          <a href="https://github.com/AviralPatel0526" target="_blank" className="text-orange-500">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/aviralpatel/" target="_blank" className="text-orange-500">
            <FaLinkedin size={20} />
          </a>
          <a href="https://www.instagram.com/aviral.patel.26/profilecard/?igsh=djJrdWJ5MWI3azho" target="_blank" className="text-orange-500">
            <FaInstagram size={20} />
          </a>
          <a href="mailto:aviralpatel2603@gmail.com" target="_blank" className="text-orange-500">
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TitlePage;
