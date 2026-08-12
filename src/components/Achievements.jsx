import React from 'react';
import { personalDetails } from '../Data/personalDetails';
import { FaTrophy, FaCertificate, FaExternalLinkAlt, FaAward, FaStar } from 'react-icons/fa';

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 sm:py-24 bg-dark-950 relative w-full max-w-full overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-72 sm:w-80 h-72 sm:h-80 bg-blue-600/10 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-0 w-72 sm:w-80 h-72 sm:h-80 bg-sky-500/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-2.5 sm:space-y-3">
          <div className="inline-block text-sky-400 text-xs sm:text-sm font-semibold tracking-wider uppercase bg-blue-500/10 px-3.5 py-1 rounded-full border border-sky-400/30">
            Honors & Certifications
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Key <span className="text-gradient-blue">Achievements</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-base">
            Competitive programming accolades and professional credentials.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {personalDetails.achievements.map((item, index) => {
            const isCodeVita = item.title.includes('CodeVita');
            return (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 sm:p-8 hover:border-sky-400/50 hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Accent corner glow */}
                <div className="absolute top-0 right-0 w-28 h-28 bg-sky-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-colors"></div>

                <div>
                  {/* Top Icon Badge & Tag */}
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-tr from-blue-600 to-sky-400 p-0.5 shadow-glow-subtle flex items-center justify-center">
                      <div className="w-full h-full bg-dark-900 rounded-[10px] flex items-center justify-center text-sky-300">
                        {isCodeVita ? <FaTrophy size={18} className="text-yellow-400" /> : <FaCertificate size={18} className="text-sky-400" />}
                      </div>
                    </div>

                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-blue-500/20 text-sky-300 border border-blue-400/30 flex items-center gap-1">
                      <FaStar className="text-yellow-400 text-[9px]" />
                      {item.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-2xl font-bold text-white mb-1.5 sm:mb-2 group-hover:text-sky-300 transition-colors">
                    {item.title}
                  </h3>

                  {/* Organization */}
                  <div className="flex items-center gap-1.5 text-xs sm:text-sm text-sky-400 font-semibold mb-3 sm:mb-4">
                    <FaAward className="text-xs" />
                    <span>{item.organization}</span>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-xs sm:text-base leading-relaxed mb-5 sm:mb-6">
                    {item.desc}
                  </p>
                </div>

                {/* Verification Link */}
                <div className="pt-3 sm:pt-4 border-t border-blue-500/20 flex items-center justify-between">
                  <span className="text-[11px] sm:text-xs text-slate-400">Status: <strong className="text-emerald-400 font-semibold">Verified</strong></span>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-sky-300 hover:text-white transition-colors"
                  >
                    <span>{item.linkText}</span>
                    <FaExternalLinkAlt className="text-[9px]" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Achievements;
