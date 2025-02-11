import React from "react";
import signature from '../assets/signature.png'
const Footer = () => {
  return (
    <footer className="border-t py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo and Links */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          {/* Logo */}
          <img src={signature} alt="logo"
                     className="w-[10rem] font-semibold" 
          />

          {/* Navigation Links */}
          <nav className="flex space-x-6">
            <a href="#" className="text-gray-700 hover:underline">
              GitHub Profile
            </a>
            <a href="#" className="text-gray-700 hover:underline">
              LinkedIn Profile
            </a>
            <a href="#" className="text-gray-700 hover:underline">
              Portfolio Site
            </a>
            <a href="#" className="text-gray-700 hover:underline">
              Blog Posts
            </a>
            <a href="#" className="text-gray-700 hover:underline">
              Contact Me
            </a>
          </nav>
        </div>

        {/* Subscription Section */}
        <div className="mt-6 md:mt-0">
          <h4 className="text-lg font-bold mb-2">Join</h4>
          <div className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="border p-2 rounded w-64"
            />
            <button className="px-4 py-2 border rounded bg-gray-100 hover:bg-gray-200">
              Join
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            By subscribing, you agree to our Privacy Policy.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t mt-8 pt-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <p className="text-sm text-gray-500 mt-4 md:mt-0">
            © 2025. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
