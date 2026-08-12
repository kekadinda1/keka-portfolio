import React from 'react';
import { personalDetails } from '../Data/personalDetails';
import { FaGraduationCap, FaCalendarAlt, FaAward, FaMapMarkerAlt } from 'react-icons/fa';

const Education = () => {
  return (
    <section id="education" className="py-20 sm:py-24 bg-dark-950 relative text-white w-full max-w-full overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/3 right-0 w-72 sm:w-80 h-72 sm:h-80 bg-blue-600/10 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-72 sm:w-72 h-72 sm:h-72 bg-sky-500/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20 space-y-2.5 sm:space-y-3">
          <div className="inline-block text-sky-400 text-xs sm:text-sm font-semibold tracking-wider uppercase bg-blue-500/10 px-3.5 py-1 rounded-full border border-sky-400/30">
            Qualifications
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Academic <span className="text-gradient-blue">Journey</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-base">
            My formal education credentials and academic track record.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative w-full">
          {/* Vertical Center Line on Desktop, Left on Mobile */}
          <div className="absolute left-3.5 md:left-1/2 md:-translate-x-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-sky-400 via-blue-600 to-indigo-600/30 rounded-full"></div>

          {/* Timeline Nodes */}
          <div className="space-y-8 sm:space-y-12">
            {personalDetails.education.map((edu, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-start md:items-center w-full ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Empty Spacer for desktop alternating side */}
                  <div className="hidden md:block md:w-1/2"></div>

                  {/* Center Node Indicator */}
                  <div className="absolute left-3.5 md:left-1/2 -translate-x-1/2 w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-dark-900 border-2 border-sky-400 flex items-center justify-center text-sky-300 shadow-glow-blue z-20 shrink-0">
                    <FaGraduationCap className="text-xs sm:text-sm" />
                  </div>

                  {/* Card Content */}
                  <div className="w-full md:w-1/2 pl-9 sm:pl-12 md:pl-0 md:px-8">
                    <div className="glass-card p-5 sm:p-7 rounded-2xl border border-blue-500/20 hover:border-sky-400/50 hover:shadow-card-hover transition-all duration-300 group">
                      
                      {/* Degree Badge & Year */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5 sm:mb-3">
                        <span className="text-[11px] sm:text-xs font-semibold px-2.5 py-0.5 rounded-md bg-blue-500/20 text-sky-300 border border-blue-400/30">
                          {edu.type || 'Degree'}
                        </span>
                        <div className="flex items-center gap-1 text-[11px] sm:text-xs text-slate-400 font-medium">
                          <FaCalendarAlt className="text-sky-400 text-[10px]" />
                          <span>{edu.year}</span>
                        </div>
                      </div>

                      {/* Degree Title */}
                      <h3 className="text-base sm:text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                        {edu.degree}
                      </h3>

                      {/* Institution Name & Location */}
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm text-slate-300 mt-1 mb-3 sm:mb-4">
                        <span className="font-medium">{edu.institution}</span>
                        {edu.location && (
                          <span className="inline-flex items-center gap-1 text-xs text-slate-400">
                            <FaMapMarkerAlt className="text-sky-400 text-[10px]" />
                            {edu.location}
                          </span>
                        )}
                      </div>

                      {/* Score Highlight */}
                      <div className="pt-2.5 sm:pt-3 border-t border-blue-500/20 flex items-center justify-between">
                        <span className="text-[11px] sm:text-xs text-slate-400">Score</span>
                        <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-[11px] sm:text-xs font-bold shadow-sm">
                          <FaAward className="text-emerald-400 text-xs" />
                          <span>{edu.score}</span>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;