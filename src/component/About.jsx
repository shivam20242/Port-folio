import React from "react";
import final_img from '../assets/final_img.png'

const AboutSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-white p-8 rounded-lg shadow-md border border-gray-200 max-w-6xl mx-auto mt-10 ml-0 mr-0 h-[30rem]">
      {/* Text Section */}
      <div className="md:w-2/5 ml-7">
        <h1 className="text-2xl font-bold mb-4">About Me: My Journey in Tech</h1>
        <p className="text-gray-600 leading-relaxed mb-4">
        I'm a passionate front-end developer with a strong foundation in web technologies and a dedication to engineering excellence. With over 1,200 hours of coding at Masai School, I've developed expertise in problem-solving, clean code practices, and user-centric design, ensuring seamless, responsive, and engaging web experiences for users.
        </p>
        <div>
         
          <a
            href="#"
            className="inline-block ml-4 border border-blue-500 text-blue-500 px-4 py-2 rounded-md shadow hover:bg-blue-500 hover:text-white transition duration-300"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="md:w-1/3 flex justify-center items-center bg-gray-100 border border-dashed border-gray-400 h-40 w-full md:h-52 rounded-lg mt-6 md:mt-0">
        <img src={final_img} alt="" />
      </div>
    </div>
  );
};

export default AboutSection;
