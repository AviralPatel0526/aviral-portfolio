import React from "react";
import Jadoo from '../assets/Jadoo.png'
import Codeutsava from '../assets/Codeutsava.png'
import Blog from '../assets/Blog.png'

const ProjectSection = () => {
  const projects = [
    {
      name: "Jadoo",
      description: "Hackathon Winning Project",
      link: "https://jadoohomes.onrender.com/",
      image: Jadoo, // Placeholder image
    },
    {
      name: "Codeutsava 7.O",
      description: "Website for the Annual Coding Fest of NIT Raipur",
      link: "https://codeutsava7.netlify.app/",
      image: Codeutsava, // Placeholder image
    },
    {
      name: "Blog Application",
      description: "Full-stack blog application",
      link: "https://github.com/AviralPatel0526/Blogapplication",
      image: Blog, // Placeholder image
    },
  ];

  return (
    <div className="bg-black text-white lg:px-0 px-8" id="project">
      <div className="space-y-12">
      <div className="lg:text-left text-center">
        <h1 className="md:text-7xl lg:text-8xl text-4xl font-bold uppercase ">Recent</h1>
        <h1 className="md:text-7xl lg:text-8xl text-4xl font-bold text-gray-700 uppercase">Projects</h1>
      </div>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex items-center justify-between space-x-6"
            >
              <div className="lg:w-40 lg:h-28 w-28 h-16">
                <img
                  src={project.image}
                  alt={project.name}
                  className="rounded-md shadow-md border border-gray-700 lg:w-40 lg:h-28 w-28 h-16"
                />
              </div>
              <div className="flex-1 space-y-1">
                <h3 className="lg:text-xl font-bold text-md">{project.name}</h3>
                <p className="text-gray-400 text-sm">{project.description}</p>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 text-xl hover:text-orange-500"
              >
                ↗
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
