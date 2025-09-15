import React from "react";
import back from "../assets/back.png"; // Background image
import "@fontsource/roboto"; // Defaults to weight 400
import "@fontsource/roboto/300.css"; // For weight 300
import "@fontsource/roboto/500.css"; // For weight 500
import signature from "../assets/signature.png";

const PortfolioHeader = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center px-8 py-4 bg-white shadow-sm">
        {/* Signature / Logo */}
        <img
          src={signature}
          alt="logo"
          className="w-[10rem] font-semibold"
        />
        <ul className="flex space-x-6 text-sm">
          <li>
            <a href="#about" className="text-gray-700 hover:text-black">
              About Me
            </a>
          </li>
          <li>
            <a href="#skills" className="text-gray-700 hover:text-black">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="text-gray-700 hover:text-black">
              Projects
            </a>
          </li>
          <li>
            <a href="#education" className="text-gray-700 hover:text-black">
              Education
            </a>
          </li>
          <li>
            <a href="#softskills" className="text-gray-700 hover:text-black">
              Soft Skills
            </a>
          </li>
        </ul>
        <button className="bg-black text-white text-sm px-4 py-2 rounded hover:bg-gray-800">
          Contact
        </button>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col w-full h-1/2">
        {/* Background Image */}
        <div className="flex-1 bg-gray-200">
          <img
            src={back}
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Hero Content */}
        <div className="flex-1 bg-white flex flex-col items-center justify-center text-center p-8">
          <h1
            className="text-4xl font-bold"
            style={{ fontFamily: "'Playwrite IN', serif" }}
          >
            Full-Stack Developer | Associate Software Engineer
          </h1>
          <p
            className="text-gray-600 mt-4 max-w-xl text-base leading-relaxed"
            style={{ fontFamily: "'Playwrite IN', sans-serif" }}
          >
            I’m Shivam Mishra, an Associate Software Developer experienced in{" "}
            <span className="font-semibold">
              backend automation, microservices, judicial data scraping, and
              scalable APIs
            </span>{" "}
            using Node.js, Express, MongoDB, Puppeteer, and Playwright. 
            Along with strong frontend expertise in React and modern UI frameworks, 
            I focus on building{" "}
            <span className="font-semibold">
              reliable, high-performance, and user-centric applications
            </span>. 
            I am contributed to large-scale LegalTech solutions at
            Areness Foundation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioHeader;
