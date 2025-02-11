import React from "react";
import train2 from '../assets/triain4s.png'
import cricDash from '../assets/cricDash.png'
import Dashboard from '../assets/DashboardUI.png'
import Rapid from '../assets/Rapid.png'

import { useState,useEffect } from "react";
import '../styles/style.css'
const ProjectShowcase = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const projects = [
    {
      title: "Rapid GRID: Traffic Optimizer & Emergency Assistant",
      img:Rapid,
      description: "Led the development of a full-stack web platform combining emergency services with user-focused features. Built a dual-mode SOS system with Google Maps for real-time tracking, secure authentication, and a food ordering system with live tracking. Added a multi-category entertainment section. Technologies: React, Google Maps API, Authentication Services, Responsive Web Design",
      tags: ["React", "google-cloud", "tailwindCSS","google authentication"],
    },
    {
      title: "Dashboard UI App",
      img:Dashboard,
      description: "Designed a feature-rich dashboard UI for an e-commerce startup, focusing on visualizing key business metrics and enhancing user experience. The dashboard included sections for tracking earnings, customer insights, orders, employees, and interactive graphs. Added productivity tools such as a Kanban board, calendar, text editor, and color picker. Delivered a responsive and visually appealing interface tailored for scalability and intuitive navigation",
      tags: ["React", "CSS", "JavaScript"],
    },
    {
      title: "Cricket-Dashboard",
      img:cricDash,
      description: "An engaging project analyzing match statistics and player performance.",
      tags: ["JavaSript","tailwindCSS", "Webscrapping"],
    },
    {
      title: "Train Helper App",
      img:train2,
      description: "An innovative solution to track train schedules and routes effectively.",
      tags: ["React", "Express.js", "SQL"],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Section Title */}
      <h2 className="text-3xl font-bold mb-6 text-center">Highlighted Projects Showcase</h2>
      <p className="text-center text-gray-600 mb-8">
        Explore my innovative web development projects.
      </p>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition duration-300"
          >
            {/* Placeholder for Image */}
            <div className="bg-gray-100 flex justify-center items-center border-b border-gray-300 w-full md:w-3/4 lg:w-full h-auto
            ">
              <img
                src={project.img}
                alt={project.title}
              />
            </div>
            {/* Project Details */}
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-3">{project.description}</p>
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-100 text-blue-600 text-sm font-medium px-2 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="#"
                className="text-blue-500 hover:underline text-sm font-medium"
              >
                View project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;
