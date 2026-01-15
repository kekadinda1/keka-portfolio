import React from 'react';
import { personalDetails } from '../Data/personalDetails';

const Banner = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 pt-20 bg-[#1a0b2e]">
      
      {/* Left Side: Text */}
      <div className="md:w-1/2 space-y-6 text-center md:text-left order-2 md:order-1 mt-10 md:mt-0">
        <h3 className="text-2xl text-rose-400 font-medium">Hello, I am</h3>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
          {personalDetails.name}
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-gray-400 font-semibold">
          {personalDetails.title}
        </h2>
        
        <p className="text-gray-400 max-w-lg mx-auto md:mx-0 leading-relaxed text-lg">
          {personalDetails.about}
        </p>
        
        {/* Buttons */}
        <div className="flex gap-4 justify-center md:justify-start pt-4">
          <a 
            href="#contact" 
            className="px-8 py-3 bg-rose-600 text-white rounded-full font-bold shadow-lg shadow-rose-600/30 hover:bg-rose-700 transition-all hover:scale-105"
          >
            Contact Me
          </a>
          <a 
            href="/resume.pdf" 
            target="_blank" 
            className="px-8 py-3 border border-rose-500 text-rose-400 rounded-full font-bold hover:bg-rose-500/10 transition-all hover:scale-105"
          >
            Resume
          </a>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="md:w-1/2 flex justify-center order-1 md:order-2">
        <div className="relative w-72 h-72 md:w-96 md:h-96">
          {/* Glowing Effect behind image */}
          <div className="absolute inset-0 bg-rose-600 rounded-full blur-[80px] opacity-40 animate-pulse"></div>
          
          {/* Image Container */}
          <div className="relative w-full h-full rounded-full border-4 border-rose-500/30 overflow-hidden shadow-2xl shadow-rose-900/50">
            <img 
              src="/images/profile.png" 
              alt={personalDetails.name} 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
      </div>

    </section>
  );
};

export default Banner;