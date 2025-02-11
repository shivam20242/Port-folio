import React from "react";

const SoftSkillsSection = () => {
  return (
    <div className="container mx-auto p-8">
      {/* Section Heading */}
      <h2 className="text-xl font-bold mb-4">Skills</h2>
      <h3 className="text-3xl font-bold mb-6">
        Essential Soft Skills for Success
      </h3>
      <p className="text-lg mb-8">
        Effective communication and collaboration are vital in any team
        environment. Mastering time management, adaptability, and
        problem-solving ensures success in dynamic projects.
      </p>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Skill 1 */}
        <div className="flex flex-col items-center text-center p-4 border rounded shadow">
          <div className="bg-gray-200 p-4 rounded-full mb-4">
            {/* Replace this with an icon or image */}
            <span className="text-4xl">🛠️</span>
          </div>
          <h4 className="font-bold text-lg mb-2">Communication and Collaboration</h4>
          <p>Fluent communication fosters teamwork and clarity.</p>
        </div>

        {/* Skill 2 */}
        <div className="flex flex-col items-center text-center p-4 border rounded shadow">
          <div className="bg-gray-200 p-4 rounded-full mb-4">
            {/* Replace this with an icon or image */}
            <span className="text-4xl">⏱️</span>
          </div>
          <h4 className="font-bold text-lg mb-2">
            Time Management and Adaptability
          </h4>
          <p>Effective time management allows for flexibility in tasks.</p>
        </div>

        {/* Skill 3 */}
        <div className="flex flex-col items-center text-center p-4 border rounded shadow">
          <div className="bg-gray-200 p-4 rounded-full mb-4">
            {/* Replace this with an icon or image */}
            <span className="text-4xl">💡</span>
          </div>
          <h4 className="font-bold text-lg mb-2">Problem-Solving Mindset</h4>
          <p>A strong problem-solving mindset drives innovative solutions.</p>
        </div>
      </div>
    </div>
  );
};

export default SoftSkillsSection;
