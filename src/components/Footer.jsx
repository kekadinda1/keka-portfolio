import React from 'react';
import { personalDetails } from '../Data/personalDetails';
import { FaGithub, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'; // Removed FaLinkedin

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#1a0b2e] text-white pt-20 pb-10 border-t border-rose-500/20">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-16">
          
          {/* Left Side: Brand & Text */}
          <div className="text-center md:text-left md:w-1/2">
            <h2 className="text-4xl font-bold mb-4">
              Let's <span className="text-rose-500">Connect</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              I am currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            {/* Social Icons */}
            <div className="flex justify-center md:justify-start gap-6">
              <a 
                href={`mailto:${personalDetails.email}`}
                className="w-12 h-12 rounded-full bg-[#24123a] border border-rose-500/30 flex items-center justify-center text-rose-400 hover:bg-rose-500 hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-rose-500/10"
              >
                <FaEnvelope size={20} />
              </a>
              <a 
                href="https://github.com/kekadinda-student" 
                target="_blank" 
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-[#24123a] border border-rose-500/30 flex items-center justify-center text-rose-400 hover:bg-rose-500 hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-rose-500/10"
              >
                <FaGithub size={20} />
              </a>
            </div>
          </div>

          {/* Right Side: Contact Info Cards */}
          <div className="flex flex-col gap-6 md:w-1/3 w-full">
            {/* Email Card */}
            <div className="flex items-center gap-4 bg-[#11071F] p-4 rounded-xl border border-rose-500/20 hover:border-rose-500/50 transition-colors">
              <div className="w-12 h-12 bg-rose-500/10 rounded-full flex items-center justify-center text-rose-500">
                <FaEnvelope />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="font-medium text-white">{personalDetails.email}</p>
              </div>
            </div>

            {/* Phone Card */}
            <div className="flex items-center gap-4 bg-[#11071F] p-4 rounded-xl border border-rose-500/20 hover:border-rose-500/50 transition-colors">
              <div className="w-12 h-12 bg-rose-500/10 rounded-full flex items-center justify-center text-rose-500">
                <FaPhoneAlt />
              </div>
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="font-medium text-white">{personalDetails.phone}</p>
              </div>
            </div>

            {/* Location Card */}
            <div className="flex items-center gap-4 bg-[#11071F] p-4 rounded-xl border border-rose-500/20 hover:border-rose-500/50 transition-colors">
              <div className="w-12 h-12 bg-rose-500/10 rounded-full flex items-center justify-center text-rose-500">
                <FaMapMarkerAlt />
              </div>
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="font-medium text-white">{personalDetails.location}</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            Designed & Built by <span className="text-rose-400 font-medium"></span><span className="text-white font-medium">{personalDetails.name}</span>
          </p>
          <p className="text-gray-600 text-xs mt-2">
            © 2026 All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;