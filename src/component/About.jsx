import React from "react";
import final_img from "../assets/final_img.png";

const AboutSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-white p-8 rounded-lg shadow-md border border-gray-200 max-w-6xl mx-auto mt-10 ml-0 mr-0 h-auto">
      {/* Text Section */}
      <div className="md:w-2/5 ml-7">
        <h1 className="text-2xl font-bold mb-4">About Me: My Journey in Tech</h1>
        <p className="text-gray-600 leading-relaxed mb-4">
          I’m an Associate Software Developer with expertise in building{" "}
          <span className="font-semibold">
            scalable backend systems, APIs, and automation pipelines
          </span>
          , along with a strong foundation in frontend development. At Areness
          Foundation, I worked on{" "}
          <span className="font-semibold">E-Court Case Management Systems</span>,
          integrating Supreme Court and High Court portals using{" "}
          <span className="font-semibold">
            Node.js, Express.js, MongoDB, Puppeteer, Playwright, and AWS S3
          </span>
          . My focus has been on{" "}
          <span className="font-semibold">
            data automation, microservices, and real-time notifications
          </span>{" "}
          to make judicial data more accessible and reliable.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          Beyond backend, I have hands-on experience with{" "}
          <span className="font-semibold">React.js, Redux, and modern UI frameworks</span>,
          enabling me to deliver seamless full-stack solutions. With a problem-solving mindset
          and continuous learning drive, I aim to craft software that balances{" "}
          <span className="font-semibold">performance, reliability, and user experience</span>.
        </p>
        <div className="flex gap-4">
          {/* Contact Button */}
          <a
            href="#"
            className="inline-block border border-blue-500 text-blue-500 px-4 py-2 rounded-md shadow hover:bg-blue-500 hover:text-white transition duration-300"
          >
            Contact
          </a>

          {/* Download Resume Button */}
          <a
            href="https://drive.google.com/file/d/1UIVwtBZjX61Mqe2-0yoW-1igMOFp4Lro/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-green-500 text-green-500 px-4 py-2 rounded-md shadow hover:bg-green-500 hover:text-white transition duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="md:w-1/3 flex justify-center items-center bg-gray-100 border border-dashed border-gray-400 h-60 w-full md:h-72 rounded-lg mt-6 md:mt-0">
        <img src={final_img} alt="Shivam Mishra" className="rounded-lg" />
      </div>
    </div>
  );
};

export default AboutSection;
