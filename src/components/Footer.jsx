import React, { useState } from 'react';
import { personalDetails } from '../Data/personalDetails';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaCheck, FaCopy, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const [copiedType, setCopiedType] = useState(null);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => {
      setCopiedType(null);
    }, 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-dark-950 text-white pt-24 pb-12 border-t border-blue-500/20 relative">
      {/* Background Subtle Electric Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-blue-600/15 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
          
          {/* Left Column: Heading & Call to Action */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="inline-block text-sky-400 text-sm font-semibold tracking-wider uppercase bg-blue-500/10 px-3.5 py-1 rounded-full border border-sky-400/30">
              Get In Touch
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              Let's Connect & <span className="text-gradient-blue">Collaborate</span>
            </h2>
            
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              I am actively seeking software development roles, frontend/full-stack opportunities, and AI/ML projects. Let's build something exceptional together!
            </p>
            
            {/* Social Icons */}
            <div className="flex justify-center lg:justify-start gap-4 pt-2">
              <a
                href={personalDetails.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-12 h-12 rounded-xl bg-dark-800 border border-blue-500/30 flex items-center justify-center text-sky-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/40"
              >
                <FaGithub size={20} />
              </a>

              <a
                href={personalDetails.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-12 h-12 rounded-xl bg-dark-800 border border-blue-500/30 flex items-center justify-center text-sky-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/40"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href={`mailto:${personalDetails.email}`}
                aria-label="Email"
                className="w-12 h-12 rounded-xl bg-dark-800 border border-blue-500/30 flex items-center justify-center text-sky-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/40"
              >
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>

          {/* Right Column: Contact Info Cards */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            
            {/* Email Card */}
            <div className="glass-card p-5 rounded-2xl flex items-center justify-between gap-4 group hover:border-sky-400/50 transition-colors">
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-400/30 flex items-center justify-center text-sky-400 shrink-0">
                  <FaEnvelope size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-slate-400 font-medium">Email Address</p>
                  <a
                    href={`mailto:${personalDetails.email}`}
                    className="font-semibold text-white hover:text-sky-300 transition-colors text-sm sm:text-base truncate block"
                  >
                    {personalDetails.email}
                  </a>
                </div>
              </div>

              <button
                onClick={() => handleCopy(personalDetails.email, 'email')}
                title="Copy Email"
                className="p-2.5 rounded-lg bg-dark-800 hover:bg-blue-600 text-slate-300 hover:text-white transition-all shrink-0 text-sm flex items-center gap-1.5"
              >
                {copiedType === 'email' ? (
                  <>
                    <FaCheck className="text-emerald-400" />
                    <span className="text-xs text-emerald-400 font-medium hidden sm:inline">Copied</span>
                  </>
                ) : (
                  <>
                    <FaCopy />
                    <span className="text-xs hidden sm:inline">Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Phone Card */}
            <div className="glass-card p-5 rounded-2xl flex items-center justify-between gap-4 group hover:border-sky-400/50 transition-colors">
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-400/30 flex items-center justify-center text-sky-400 shrink-0">
                  <FaPhoneAlt size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-slate-400 font-medium">Phone / WhatsApp</p>
                  <a
                    href={`tel:${personalDetails.phone}`}
                    className="font-semibold text-white hover:text-sky-300 transition-colors text-sm sm:text-base truncate block"
                  >
                    {personalDetails.phone}
                  </a>
                </div>
              </div>

              <button
                onClick={() => handleCopy(personalDetails.phone, 'phone')}
                title="Copy Phone"
                className="p-2.5 rounded-lg bg-dark-800 hover:bg-blue-600 text-slate-300 hover:text-white transition-all shrink-0 text-sm flex items-center gap-1.5"
              >
                {copiedType === 'phone' ? (
                  <>
                    <FaCheck className="text-emerald-400" />
                    <span className="text-xs text-emerald-400 font-medium hidden sm:inline">Copied</span>
                  </>
                ) : (
                  <>
                    <FaCopy />
                    <span className="text-xs hidden sm:inline">Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Location Card */}
            <div className="glass-card p-5 rounded-2xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-400/30 flex items-center justify-center text-sky-400 shrink-0">
                <FaMapMarkerAlt size={18} />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">Location</p>
                <p className="font-semibold text-white text-sm sm:text-base">
                  {personalDetails.location}
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright & Back To Top */}
        <div className="border-t border-blue-500/20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="text-slate-400 text-sm">
              Designed & Developed by{' '}
              <span className="text-sky-300 font-semibold">{personalDetails.name}</span>
            </p>
            <p className="text-slate-500 text-xs mt-1">
              © {currentYear} {personalDetails.name}. All rights reserved.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-dark-800 hover:bg-blue-600 text-xs font-semibold text-slate-300 hover:text-white border border-blue-500/20 hover:border-blue-600 transition-all duration-300 shadow-md"
          >
            <span>Back to top</span>
            <FaArrowUp className="text-[10px]" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;