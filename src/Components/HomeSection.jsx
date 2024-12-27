import React from "react";

const HomeSection = () => {
  return (
    <div className="flex flex-col justify-center  text-white bg-black min-h-screen lg:px-0 px-8 w-full" id="hom7"> 
      {/* Heading Section */}
      <div className="lg:text-left text-center">
        <h1 className="md:text-7xl lg:text-8xl text-4xl font-bold uppercase ">Software</h1>
        <h1 className="md:text-7xl lg:text-8xl text-4xl font-bold text-gray-700 uppercase">Engineer</h1>
      </div>

      {/* Description Section */}
      <p className="mt-4 text-gray-400 text-lg max-w-lg self-center lg:self-start lg:text-left text-center">
        Passionate about creating intuitive and engaging user experiences.
        Specialize in transforming ideas into beautifully crafted products.
      </p>

      {/* Statistics Section */}
      <div className="flex mt-8 space-x-8 justify-center lg:justify-start">
        <div className="text-center">
          <h2 className="md:text-6xl text-3xl font-bold text-white">+6</h2>
          <p className="text-gray-400 text-sm mt-2 uppercase">Hackathons Participated</p>
        </div>
        <div className="text-center">
          <h2 className="md:text-6xl text-3xl font-bold text-white">+2</h2>
          <p className="text-gray-400 text-sm mt-2 uppercase">Hackathon Wins</p>
        </div>
        <div className="text-center">
          <h2 className="md:text-6xl text-3xl font-bold text-white">+20</h2>
          <p className="text-gray-400 text-sm mt-2 uppercase">Projects Completed</p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        {/* Card 1 */}
        <a href="https://drive.google.com/drive/folders/11RoA7476pkD4yDggFrujRQPnyKTxUWbu?usp=drive_link" target="_blank"><div className="relative bg-orange-500 rounded-lg p-6 py-20 lg:px-6 px-16">
          <div className="absolute top-0 left-0 w-full h-full bg-white opacity-5"></div>
          <h3 className="text-2xl font-bold uppercase">Certifications</h3>
          <button className="absolute bottom-4 right-4 text-white">
            <span className="text-xl">&rarr;</span>
          </button>
        </div>
        </a>

        {/* Card 2 */}
        <a href="https://drive.google.com/file/d/13UxC9wV5lHXa8Cb_GV9dmRZq93sfIxXm/view?usp=sharing" target="_blank">
        <div className="relative bg-lime-400 rounded-lg p-6 py-20 lg:px-6 px-16">
          <div className="absolute top-0 left-0 w-full h-full bg-white opacity-5"></div>
          <h3 className="text-2xl font-bold uppercase">
            Resume
          </h3>
          <button className="absolute bottom-4 right-4 text-black">
            <span className="text-xl">&rarr;</span>
          </button>
        </div>
          </a>
      </div>
    </div>
  );
};

export default HomeSection;
