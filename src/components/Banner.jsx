import React from 'react';
import { personalDetails } from '../Data/personalDetails';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload, FaArrowRight, FaCode } from 'react-icons/fa';

const Banner = () => {
  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16 overflow-hidden w-full max-w-full"
    >
      {/* Background Electric Blue & Cyan Aura Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 md:left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-blue-600/15 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/2 translate-x-1/2 md:right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-sky-500/15 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="w-full max-w-7xl mx-auto relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16">
        
        {/* Left Content */}
        <div className="w-full md:w-7/12 text-center md:text-left space-y-5 sm:space-y-6">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-sky-400/30 text-sky-300 text-xs sm:text-sm font-medium tracking-wide shadow-sm max-w-full text-center">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span className="truncate">{personalDetails.status}</span>
          </div>

          {/* Heading */}
          <div className="space-y-1.5 sm:space-y-2">
            <p className="text-slate-400 font-medium text-base sm:text-lg">Hello, I'm</p>
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight break-words">
              {personalDetails.name.split(' ')[0]}{' '}
              <span className="text-gradient-blue">{personalDetails.name.split(' ')[1]}</span>
            </h1>
            <h2 className="text-lg sm:text-2xl lg:text-3xl font-semibold text-slate-200">
              {personalDetails.role}
            </h2>
          </div>

          {/* Bio Description */}
          <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto md:mx-0">
            {personalDetails.about}
          </p>

          {/* Quick Highlight Stats Pills */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 pt-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-800 border border-blue-500/20 text-xs text-sky-300 font-medium">
              <FaCode className="text-sky-400 shrink-0" />
              <span>TCS CodeVita: <strong>Rank 4958</strong></span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-800 border border-blue-500/20 text-xs text-sky-300 font-medium">
              <span>MCA CGPA: <strong>9.53</strong> @ HIT</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start pt-2">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 bg-gradient-to-r from-blue-600 to-sky-500 text-white rounded-full font-bold shadow-lg shadow-blue-600/30 hover:shadow-glow-blue hover:from-blue-700 hover:to-sky-600 transition-all duration-300 hover:scale-[1.02] text-xs sm:text-base"
            >
              <span>View Projects</span>
              <FaArrowRight className="text-xs" />
            </a>

            <a
              href={personalDetails.socials.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 bg-dark-800 border border-blue-500/30 text-sky-300 rounded-full font-semibold hover:bg-blue-600/20 hover:border-sky-400 transition-all duration-300 hover:scale-[1.02] text-xs sm:text-base"
            >
              <FaGithub className="text-sm sm:text-base" />
              <span>GitHub</span>
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 bg-dark-700/70 border border-slate-700 text-slate-200 rounded-full font-semibold hover:text-white hover:border-sky-400 transition-all duration-300 text-xs sm:text-base"
            >
              <FaFileDownload className="text-xs text-sky-400" />
              <span>Resume</span>
            </a>
          </div>

          {/* Quick Social Links */}
          <div className="flex items-center gap-3 sm:gap-4 justify-center md:justify-start pt-2 text-slate-400 text-xs sm:text-sm">
            <span>Connect:</span>
            <div className="flex gap-2.5 sm:gap-3">
              <a
                href={personalDetails.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-dark-800 border border-blue-500/20 flex items-center justify-center text-slate-300 hover:text-sky-400 hover:border-sky-400 transition-colors shadow-sm shrink-0"
              >
                <FaGithub size={15} />
              </a>
              <a
                href={personalDetails.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-dark-800 border border-blue-500/20 flex items-center justify-center text-slate-300 hover:text-sky-400 hover:border-sky-400 transition-colors shadow-sm shrink-0"
              >
                <FaLinkedin size={15} />
              </a>
              <a
                href={`mailto:${personalDetails.email}`}
                aria-label="Email Me"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-dark-800 border border-blue-500/20 flex items-center justify-center text-slate-300 hover:text-sky-400 hover:border-sky-400 transition-colors shadow-sm shrink-0"
              >
                <FaEnvelope size={15} />
              </a>
            </div>
          </div>

        </div>

        {/* Right Content: Profile Image with Responsive Size & Glowing Frame */}
        <div className="w-full md:w-5/12 flex justify-center shrink-0">
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 max-w-full">
            {/* Animated Electric Glow Backdrop */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 via-sky-500 to-indigo-600 rounded-full blur-2xl opacity-50"></div>

            {/* Glowing Accent Border Ring */}
            <div className="absolute -inset-1.5 rounded-full border border-sky-400/40"></div>

            {/* Profile Avatar Container */}
            <div className="relative w-full h-full rounded-full border-3 sm:border-4 border-sky-400/50 overflow-hidden shadow-2xl bg-dark-900 shadow-glow-blue">
              <img
                src="/images/profile.png"
                alt={personalDetails.name}
                className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop";
                }}
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Banner;