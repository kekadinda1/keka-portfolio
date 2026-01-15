import React from 'react';
import { personalDetails } from '../Data/personalDetails';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-[#1a0b2e] text-white">
      <div className="container mx-auto px-6">
        
        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-4">
          My <span className="text-rose-500">Education</span>
        </h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          My academic journey and qualifications.
        </p>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-rose-500/30 rounded-full"></div>

          {/* Education Cards */}
          <div className="space-y-12">
            {personalDetails.education.map((edu, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row items-center justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Empty Space for alignment */}
                <div className="hidden md:block w-5/12"></div>

                {/* Center Dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#1a0b2e] border-4 border-rose-500 rounded-full z-10 shadow-[0_0_15px_rgba(244,63,94,0.6)]"></div>

                {/* Content Card */}
                <div className="w-full md:w-5/12 pl-12 md:pl-0">
                  <div className="bg-[#11071F] border border-rose-500/20 p-6 rounded-xl shadow-lg hover:shadow-rose-500/10 transition-all hover:-translate-y-1 relative">
                    {/* Tiny Arrow pointing to dot */}
                    <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-[#11071F] border-b border-l border-rose-500/20 transform rotate-45 ${index % 2 === 0 ? '-left-2 border-r-0 border-t-0' : '-right-2 border-l-0 border-b-0 border-t border-r'}`}></div>

                    <h3 className="text-xl font-bold text-rose-400 mb-1">{edu.degree}</h3>
                    <h4 className="text-lg font-semibold text-white mb-2">{edu.institution}</h4>
                    
                    <div className="flex justify-between items-center text-sm text-gray-400 mt-4 border-t border-rose-500/10 pt-4">
                      <span className="bg-rose-500/10 px-3 py-1 rounded-full text-rose-300 font-medium">
                        {edu.year}
                      </span>
                      <span className="font-semibold text-gray-300">
                        {edu.score}
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;