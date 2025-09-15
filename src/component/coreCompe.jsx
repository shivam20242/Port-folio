import React from "react";
import fun from "../assets/funImg.png";
import "../styles/core.css";

const CoreCompetencies = () => {
  const competencies = [
    {
      title: "Frontend Technologies and Frameworks I Excel In",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      img2: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      img3: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      img4: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      img5: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      img6: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      img7: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      description:
        "Frontend: HTML5, CSS3, JavaScript (Advanced), TypeScript, React.js | Styling: Tailwind CSS, Bootstrap, ChakraUI, shadcn/ui | Responsive UI/UX and modern design principles",
      linkText: "Learn More",
    },
    {
      title: "Backend Development and API Expertise",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      img2: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      img3: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
      img4: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
      img5: fun,
      img6: fun,
      img7: fun,
      description:
        "Backend: Node.js, Express.js | APIs: REST APIs, Microservices | Real-time: WebSocket, Cron Jobs | Secure Authentication & Data Pipelines",
      linkText: "Explore",
    },
    {
      title: "Database Management and Deployment",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      img2: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
      img3: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
      img4: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg",
      img5: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      img6: fun,
      img7: fun,
      description:
        "Database: MongoDB | Cloud & Storage: AWS S3 | Deployment Platforms: Render, Vercel, Heroku, Netlify | Scalable and optimized DB schema design",
      linkText: "Discover",
    },
    {
      title: "Automation and Web Scraping Tools",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/puppeteer/puppeteer-original.svg",
      img2: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/playwright/playwright-original.svg",
      img3: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg",
      img4: fun,
      img5: fun,
      img6: fun,
      img7: fun,
      description:
        "Automation & Scraping: Puppeteer, Playwright, Selenium | LegalTech data automation | Concurrent scraping, data ingestion pipelines",
      linkText: "Learn More",
    },
    {
      title: "Version Control and Collaboration Tools I Use",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
      img2: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      img3: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      img4: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
      img5: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      img6: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
      img7: fun,
      description:
        "State Management: Redux | Version Control: Git, GitHub | Tools: Postman, Firebase, CLI | Collaboration with Agile and Git-based workflows",
      linkText: "Explore",
    },
    {
      title: "Integrating APIs and Leveraging AI Tools",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg",
      img2: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      img3: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openai/openai-original.svg",
      img4: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
      img5: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kaggle/kaggle-original.svg",
      img6: fun,
      img7: fun,
      description:
        "API Integration & Documentation: Swagger | AI Tools & LLMs: OpenAI | Data Science & ML: Kaggle, Python, Jupyter | End-to-end API testing and integration",
      linkText: "Discover",
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">
          Core Skills and Technical Competencies
        </h2>
        <p className="text-gray-600 mb-10">
          I specialize in frontend and backend development, automation,
          databases, version control, API integration, and leveraging AI tools
          for modern applications.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {competencies.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
                <img src={item.img} alt="logo" className="logo-section" />
                <img src={item.img2} alt="logo" className="logo-section" />
                <img src={item.img3} alt="logo" className="logo-section" />
                <img src={item.img4} alt="logo" className="logo-section" />
                <img src={item.img5} alt="logo" className="logo-section" />
                <img src={item.img6} alt="logo" className="logo-section" />
                <img src={item.img7} alt="logo" className="logo-section" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <a
                href="#"
                className="text-blue-600 font-semibold hover:underline"
              >
                {item.linkText} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreCompetencies;