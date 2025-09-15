import React, { useState, useEffect } from "react";
import "../styles/style.css";

const ProfessionalExperience = () => {
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

  const experiences = [
    {
      title: "Case Management System – E-Court Integration",
      role: "Associate Software Engineer - Areness",
      duration: "Mar 2025 – Present",
      description: `As part of my professional role at Areness, I worked on developing an E-Court integration system 
      that unified case data across multiple courts into a centralized backend. 
      Implemented data crawlers and APIs to fetch case details, ordersheets, hearing updates, and party information 
      directly from the E-Court portal, ensuring accuracy and real-time synchronization. 
      Designed a pipeline to standardize raw scraped data, structured with MongoDB schemas for consistent storage. 
      Optimized backend for concurrent scraping and data ingestion, reducing latency during high-volume requests. 
      Added user-centric features such as smart case tracking, multi-parameter search, and keyword-based alerts 
      with Email/WhatsApp notifications. This project streamlined access to judicial data and enabled legal professionals 
      to stay updated in real time.`,
      tags: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Puppeteer",
        "Playwright",
        "AWS S3",
        "Cron Jobs",
        "Data Pipelines",
      ],
    },
    {
      title: "Case Management System – Supreme Court of India",
      role: "Associate Software Engineer - Areness",
      duration: "Oct 2024 – Dec 2024",
      description: `In my professional capacity at Areness, I designed and implemented an automated data extraction 
      and case management system for the Supreme Court of India. 
      Built backend services to capture case metadata, orders, case progress, advocates, and party details 
      directly from official portals. Integrated AWS S3 pipelines to securely manage large volumes of documents. 
      Developed modular backend architecture with MongoDB schemas ensuring structured storage and fast retrieval. 
      Enhanced performance using parallel scraping and request optimization, reducing processing time for bulk cases. 
      Added advanced search features and an alert system where predefined keywords triggered real-time case monitoring 
      with Email/WhatsApp notifications.`,
      tags: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "AWS S3",
        "Data Pipelines",
        "Parallel Scraping",
        "Automation",
      ],
    },
    {
      title: "Case Management System – Chandigarh High Court",
      role: "Associate Software Engineer - Areness",
      duration: "Jul 2024 – Sep 2024",
      description: `At Areness, I developed a crawler API and scraping solution for the Chandigarh High Court 
      to automate case data collection. Implemented scraping of case details, history, hearing information, 
      and ordersheets. Ordersheets were automatically downloaded, uploaded to AWS S3, and retrieved via APIs. 
      Optimized backend for concurrent requests, ensuring reliable and fast data ingestion. 
      Created MongoDB schemas to structure case data with a backend pipeline moving cases from 
      Untracked → Scraped → Stored. Added live case search by party name, case number, or advocate, 
      plus daily keyword-based cron jobs for automated alerts via Email/WhatsApp.`,
      tags: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "AWS S3",
        "Crawler API",
        "Web Scraping",
        "Cron Jobs",
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Section Title */}
      <h2 className="text-3xl font-bold mb-6 text-center">
        Professional Experience
      </h2>
      <p className="text-center text-gray-600 mb-8">
        <span className="font-bold">
          I am worked at Areness, where I have been actively
          involved in building and delivering large-scale LegalTech solutions.
        </span>{" "}
        These include major projects like E-Court Integration, Supreme Court Automation, 
        and Chandigarh High Court Automation — along with several other initiatives 
        around automation, APIs, and microservices.
      </p>

      {/* Experience Grid */}
      <div className="grid grid-cols-1 gap-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition duration-300"
          >
            {/* Details */}
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
              <p className="text-sm text-gray-500 mb-1">
                {exp.role} | {exp.duration}
              </p>
              <p className="text-gray-600 mb-3">{exp.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-3">
                {exp.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-green-100 text-green-700 text-sm font-medium px-2 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalExperience;
