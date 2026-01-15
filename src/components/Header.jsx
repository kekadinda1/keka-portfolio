import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-[#1a0b2e]/90 backdrop-blur-sm border-b border-rose-500/20 shadow-lg shadow-rose-500/5 transition-all duration-300">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo Name */}
        <div className="text-2xl font-bold cursor-pointer text-white">
          Keka <span className="text-rose-500">Dinda</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-medium items-center text-gray-300">
          <a href="#home" className="hover:text-rose-400 transition-colors">Home</a>
          <a href="#about" className="hover:text-rose-400 transition-colors">About</a>
          <a href="#skills" className="hover:text-rose-400 transition-colors">Skills</a>
          <a href="#education" className="hover:text-rose-400 transition-colors">Education</a>
          <a href="#projects" className="hover:text-rose-400 transition-colors">Projects</a>
          
          <a 
            href="#contact" 
            className="px-5 py-2 rounded-full border border-rose-500 text-rose-400 hover:bg-rose-500 hover:text-white transition-all duration-300 font-semibold"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#1a0b2e] border-t border-rose-500/20 py-4 px-6 flex flex-col gap-4 text-gray-300">
          <a href="#home" onClick={() => setIsMenuOpen(false)} className="hover:text-rose-400">Home</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-rose-400">About</a>
          <a href="#skills" onClick={() => setIsMenuOpen(false)} className="hover:text-rose-400">Skills</a>
          <a href="#education" onClick={() => setIsMenuOpen(false)} className="hover:text-rose-400">Education</a>
          <a href="#projects" onClick={() => setIsMenuOpen(false)} className="hover:text-rose-400">Projects</a>
        </div>
      )}
    </nav>
  );
};

export default Header;