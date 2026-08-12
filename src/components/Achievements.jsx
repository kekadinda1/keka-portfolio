import React from 'react';
import { personalDetails } from '../Data/personalDetails';
import { FaTrophy, FaCertificate, FaExternalLinkAlt, FaAward, FaStar } from 'react-icons/fa';

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 bg-dark-950 relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-sky-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-block text-sky-400 text-sm font-semibold tracking-wider uppercase bg-blue-500/10 px-3.5 py-1 rounded-full border border-sky-400/30">
            Honors & Certifications
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Key <span className="text-gradient-blue">Achievements</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Competitive programming accolades and professional credentials.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {personalDetails.achievements.map((item, index) => {
            const isCodeVita = item.title.includes('CodeVita');
            return (
              <div
                key={index}
                className="glass-card rounded-2xl p-8 hover:border-sky-400/50 hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Accent corner glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-colors"></div>

                <div>
                  {/* Top Icon Badge & Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-600 to-sky-400 p-0.5 shadow-glow-subtle flex items-center justify-center">
                      <div className="w-full h-full bg-dark-900 rounded-[10px] flex items-center justify-center text-sky-300">
                        {isCodeVita ? <FaTrophy size={22} className="text-yellow-400" /> : <FaCertificate size={22} className="text-sky-400" />}
                      </div>
                    </div>

                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-500/20 text-sky-300 border border-blue-400/30 flex items-center gap-1.5">
                      <FaStar className="text-yellow-400 text-[10px]" />
                      {item.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                    {item.title}
                  </h3>

                  {/* Organization */}
                  <div className="flex items-center gap-2 text-sm text-sky-400 font-semibold mb-4">
                    <FaAward className="text-xs" />
                    <span>{item.organization}</span>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                {/* Verification Link */}
                <div className="pt-4 border-t border-blue-500/20 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Credential Status: <strong className="text-emerald-400">Verified</strong></span>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-sky-300 hover:text-white transition-colors"
                  >
                    <span>{item.linkText}</span>
                    <FaExternalLinkAlt className="text-[10px]" />
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
