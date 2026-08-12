import React from 'react';
import { personalDetails } from '../Data/personalDetails';
import { FaGithub, FaExternalLinkAlt, FaFolderOpen, FaCheckCircle } from 'react-icons/fa';

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-dark-900 relative">
      {/* Background Ambient Glow */}
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-block text-sky-400 text-sm font-semibold tracking-wider uppercase bg-blue-500/10 px-3.5 py-1 rounded-full border border-sky-400/30">
            Portfolio Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Featured <span className="text-gradient-blue">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Real-world software applications, AI/ML models, and deployed full-stack systems from my portfolio.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {personalDetails.projects.map((project, index) => (
            <div
              key={project.id || index}
              className="glass-card rounded-2xl overflow-hidden hover:border-sky-400/50 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
            >
              {/* Card Accent Top Bar */}
              <div className="h-1.5 bg-gradient-to-r from-sky-400 via-blue-600 to-indigo-600"></div>

              <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
                
                <div>
                  {/* Top Icon & Featured Pill */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-400/30 flex items-center justify-center text-sky-400 shadow-sm">
                      <FaFolderOpen size={20} />
                    </div>
                    {project.featured && (
                      <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-500/20 text-sky-300 border border-blue-400/40 shadow-glow-subtle">
                        Featured Project
                      </span>
                    )}
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                    {project.title}
                  </h3>

                  {/* Bullet Points from Resume */}
                  <ul className="space-y-2 mb-6 mt-3 text-slate-300 text-xs sm:text-sm">
                    {project.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 leading-relaxed">
                        <FaCheckCircle className="text-sky-400 text-xs mt-1 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 mb-6 pt-3 border-t border-blue-500/20">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-medium bg-dark-800 text-sky-300 px-2.5 py-1 rounded-md border border-blue-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons: Live Demo + GitHub */}
                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600 px-4 py-2.5 rounded-xl shadow-glow-subtle transition-all duration-200"
                      >
                        <FaExternalLinkAlt className="text-xs" />
                        <span>Live Demo</span>
                      </a>
                    )}

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className={`inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-slate-200 bg-dark-700 hover:bg-dark-600 hover:text-white px-4 py-2.5 rounded-xl border border-blue-500/30 hover:border-sky-400 transition-all duration-200 ${
                        project.liveDemo ? 'flex-1' : 'w-full'
                      }`}
                    >
                      <FaGithub className="text-base text-sky-400" />
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;