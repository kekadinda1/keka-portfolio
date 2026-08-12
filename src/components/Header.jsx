import React, { useState, useEffect } from 'react';
import { personalDetails } from '../Data/personalDetails';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav shadow-lg shadow-black/50 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex justify-between items-center">
        {/* Brand Logo */}
        <a
          href="#home"
          className="text-2xl font-bold tracking-tight text-white group flex items-center gap-2 focus:outline-none"
        >
          <span className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-sky-400 font-extrabold text-lg group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-glow-subtle">
            KD
          </span>
          <span className="font-semibold text-white">{personalDetails.name.split(' ')[0]}</span>
          <span className="text-gradient-blue font-bold">{personalDetails.name.split(' ')[1]}</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 font-medium text-sm text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-sky-400 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-sky-400 after:to-blue-600 hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full bg-blue-600/20 border border-blue-400/40 text-sky-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 font-semibold text-sm shadow-sm hover:shadow-glow-blue"
          >
            Get In Touch
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-blue-500/10 border border-transparent hover:border-blue-500/30 transition-colors focus:outline-none"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isMenuOpen && (
        <div className="md:hidden glass-card border-b border-blue-500/20 px-6 py-6 flex flex-col gap-4 text-slate-200 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-base font-medium hover:text-sky-400 py-2 border-b border-blue-500/10"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="mt-2 text-center py-3 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 text-white font-semibold shadow-glow-blue hover:from-blue-700 hover:to-sky-600 transition-all"
          >
            Get In Touch
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;