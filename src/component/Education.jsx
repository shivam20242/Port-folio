import React from "react";
import MumbaiUniversity from '../assets/MumbaiUniversity.png'
import masai from '../assets/masaiLogo.png'
import MSBTE from '../assets/MSBTE.png'

const EducationSection = () => {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-xl font-bold mb-4">Education</h2>
      <h3 className="text-3xl font-bold mb-6">
        My Educational Background and Training
      </h3>
      <p className="text-lg mb-8">
      Electronics graduate with a strong technical foundation and Masai School training, 1,200+ coding hours, blending expertise for innovative solutions.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="border p-4 rounded shadow">
          <img src={MumbaiUniversity} alt="" />
          <h4 className="font-bold text-lg mb-2">
            Bachelor's in Engineering
          </h4>
          <p>Electronic Engneering(2024)</p>
        </div>
        <div className="border p-4 rounded shadow">
          <img src={masai} alt="" />
          <h4 className="font-bold text-lg mb-2">
            Masai School Training Overview
          </h4>
          <p>My training at Masai School focused on practical coding skills.</p>
        </div>
        <div className="border p-4 rounded shadow">
          <img src={MSBTE} alt="" />
          <h4 className="font-bold text-lg mb-2">
            Diploma In Engineering
          </h4>
          <p>Mechanical Engineering (2021)</p>
        </div>
      </div>
      <div className="mt-8 flex items-center">
        
      </div>
    </div>
  );
};

export default EducationSection;
