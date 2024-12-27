import React from "react";
import ReactJS from '../assets/ReactJS.png'
import Tailwind from '../assets/Tailwind.png'
import nodejs from '../assets/nodejs.png'
import Mongodb from '../assets/Mongodb.png'
import Express from '../assets/Express.png'
import Java from '../assets/Java.png'
const TechnicalTools = () => {
  return (
    <div className="bg-black text-white px-8 lg:px-0">
      <div className="mb-8 text-center lg:text-left">
        <h1 className="md:text-7xl lg:text-8xl text-4xl font-bold uppercase ">Technical</h1>
        <h1 className="md:text-7xl lg:text-8xl text-4xl font-bold text-gray-700 uppercase">Tools</h1>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 mt-4">
        <div className="flex items-center gap-4">
          <div className="bg-white p-4 rounded-lg">
            <img
              src={ReactJS}
              alt="ReactJS"
              className="h-10 w-10"
            />
          </div>
          <div>
            <div className="text-xl font-semibold">ReactJS</div>
            <div className="text-gray-500 text-sm">Frontend Framework</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-white p-4 rounded-lg">
            <img
              src={Mongodb}
              alt="MongoDB"
              className="h-10 w-10"
            />
          </div>
          <div>
            <div className="text-xl font-semibold">MongoDB</div>
            <div className="text-gray-500 text-sm">NoSQL Database</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-white p-4 rounded-lg">
            <img
              src={Express}
              alt="Express"
              className="h-10 w-10"
            />
          </div>
          <div>
            <div className="text-xl font-semibold">Express</div>
            <div className="text-gray-500 text-sm">Backend Framework</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-white p-4 rounded-lg">
            <img
              src={nodejs}
              alt="NodeJS"
              className="h-10 w-10"
            />
          </div>
          <div>
            <div className="text-xl font-semibold">NodeJS</div>
            <div className="text-gray-500 text-sm">Runtime Environment</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-white p-4 rounded-lg">
            <img
              src={Tailwind}
              alt="TailwindCSS"
              className="h-10 w-10"
            />
          </div>
          <div>
            <div className="text-xl font-semibold">TailwindCSS</div>
            <div className="text-gray-500 text-sm">CSS Framework</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-white p-4 rounded-lg">
            <img
              src={Java}
              alt="Java"
              className="h-10 w-10"
            />
          </div>
          <div>
            <div className="text-xl font-semibold">Java</div>
            <div className="text-gray-500 text-sm">Primary Language</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalTools;
