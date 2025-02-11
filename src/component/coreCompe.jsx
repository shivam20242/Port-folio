import React from "react";
import fun from '../assets/fun-img.png'
import '../styles/core.css'
const CoreCompetencies = () => {
  const competencies = [
    {
      title: "Frontend Technologies and Frameworks I Excel In",
      img:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg",
      img2:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain-wordmark.svg",
      img3:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg",
      img4:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg",
      img5:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      img6:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      img7:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
      description:
        "Frontend: HTML5, CSS3, JavaScript (Advanced), TypeScript, React.js Styling: Tailwind CSS, Bootstrap, ChakraUI, shadcn/ui",
      linkText: "Learn More",
    },
    {
      title: "Version Control and Collaboration Tools I Use",
      img:fun,
      img2:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
      img3:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      img4:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
      img5:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg",
      img6:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg",
      img7:fun,
      description:
        "State Management: Redux Toolkit Version Control: Git, GitHub Development Tools: Command Line Interface (CLI), Firebase",
      linkText: "Explore",
    },
    {
      title: "Integrating APIs and Leveraging AI Tools",
      img:fun,
      img2:fun,
      img3:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg",
      img4:"https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/openai.svg",
      img5:fun,
      img6:fun,
      img7:fun,

      description:
        "API Integration & Backend Communication AI Tools & LLM Knowledge",
      linkText: "Discover",
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">
          Frontend Development and Cutting-Edge Technologies
        </h2>
        <p className="text-gray-600 mb-10">
         I specialize in frontend technologies, styling frameworks, state management, API integration, and version control for seamless, responsive interfaces.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {competencies.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="flex items-center justify-center w-full md:w-3/4 lg:w-1/2 h-auto bg-gray-200 rounded-full mb-4" >
              <img src={item.img} alt="HTML5" class="logo-section"/>
              <img src={item.img2} alt="CSS5" class="logo-section"/>
              <img src={item.img3} alt="CSS5" class="logo-section"/>
              <img src={item.img4} alt="CSS5" class="logo-section"/>
              <img src={item.img5} alt="CSS5" class="logo-section"/>
              <img src={item.img6} alt="CSS5" class="logo-section"/>
              <img src={item.img7} alt="CSS5" class="logo-section"/>
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
