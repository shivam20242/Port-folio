import React from "react";
import back from "../assets/back.png"; // Background image
import '@fontsource/roboto'; // Defaults to weight 400
import '@fontsource/roboto/300.css'; // For weight 300
import '@fontsource/roboto/500.css'; // For weight 500
import signature from '../assets/signature.png'

const PortfolioHeader = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center px-8 py-4 bg-white shadow-sm">
        {/* Name with custom font */}
        <img src={signature} alt="logo"
           className="w-[10rem] font-semibold" 
        />
        <ul className="flex space-x-6 text-sm">
          <li>
            <a href="#about" className="text-gray-700 hover:text-black">
              About Me
            </a>
          </li>
          <li>
            <a href="#projects" className="text-gray-700 hover:text-black">
              skills
            </a>
          </li>
          <li>
            <a href="#projects" className="text-gray-700 hover:text-black">
              Projects
            </a>
          </li>
          <li>
            <a href="#projects" className="text-gray-700 hover:text-black">
              Education
            </a>
          </li>
          <li>
            <a href="#projects" className="text-gray-700 hover:text-black">
              Soft Skills
            </a>
          </li>
        </ul>
        <button className="bg-black text-white text-sm px-4 py-2 rounded hover:bg-gray-800">
          contact
        </button>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col w-full h-1/2">
        {/* Background Image */}
        <div className="flex-1 bg-gray-200">
          <img
            src={back}
            alt="Placeholder"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Hero Content */}
        <div className="flex-1 bg-white flex flex-col items-center justify-center text-center p-8">
          <h1
            className="text-4xl font-bold"
            style={{ fontFamily: "'Playwrite IN', serif" }}
          >
            Frontend Developer | Aspiring Software Engineer
          </h1>
          <p
            className="text-gray-600 mt-4 max-w-md text-base"
            style={{ fontFamily: "'Playwrite IN', sans-serif" }}
          >
           Building exceptional web experiences with modern technologies. Focused on becoming a top 1% Software Engineer through continuous learning and innovation."
          </p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioHeader;





