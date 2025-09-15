import React, { useState, useEffect } from "react";
import IDEImg from "../assets/IDEImg.png"; // replace with actual image of your IDE project
import "../styles/style.css";

const ProjectShowcase = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const projects = [
    {
      title: "Collaborative Real-Time Code Editor (Web IDE with Rooms, Chat, and Live Sync)",
      img: IDEImg,
      description: `Built a full-stack, real-time collaborative code editor supporting room-based sessions with live chat and 
      code synchronization. Designed and implemented secure JWT authentication, protected routes, and persistence of content, 
      versions, and memberships. Integrated the Monaco Editor to provide an IDE-like experience, real-time text sync via Socket.IO, 
      and a terminal supporting JavaScript execution locally with multi-language execution powered by the Piston API. 
      Backend was developed with Node.js, Express.js, and MongoDB, with REST APIs for users, rooms, and documents. 
      The project was deployed using Render for backend and Vercel/Netlify for frontend, optimized with responsive design, 
      error handling, and modern styling. Future plans include CRDT/OT-based conflict resolution, multi-file project support, 
      role-based access control, and containerized sandboxes for isolated execution.`,
      tags: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Socket.IO",
        "Monaco Editor",
        "Piston API",
        "JWT Auth",
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Section Title */}
      <h2 className="text-3xl font-bold mb-6 text-center">
        Highlighted Projects Showcase
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Explore my innovative web development project.
      </p>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition duration-300"
          >
            {/* Image */}
            <div className="bg-gray-100 flex justify-center items-center border-b border-gray-300 w-full h-auto">
              <img src={project.img} alt={project.title} />
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
                href="https://colllaborativeide.onrender.com/" // replace with your live link
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline text-sm font-medium"
              >
                View project →
              </a>
              <a
                href="https://github.com/shivam20242/collaborativeIDE/tree/frontend" // replace with your live link
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline text-sm font-medium"
              >
                View github →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;
