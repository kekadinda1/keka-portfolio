import React from 'react';
import { personalDetails } from '../Data/personalDetails';
import { FaGithub } from 'react-icons/fa'; // Removed FaExternalLinkAlt

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-[#11071F]">
      <div className="container mx-auto px-6">
        
        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-white mb-4">
          My <span className="text-rose-500">Projects</span>
        </h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Here are some of the projects I have worked on.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {personalDetails.projects.map((project, index) => (
            <div 
              key={index}
              className="bg-[#1a0b2e] border border-rose-500/20 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-rose-500/10 transition-all duration-300 hover:-translate-y-2 group"
            >
              
              {/* Top Banner (Decoration) */}
              <div className="h-2 bg-gradient-to-r from-rose-500 to-violet-600"></div>

              <div className="p-8">
                {/* Project Title */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-rose-400 transition-colors">
                  {project.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed text-sm h-20 overflow-hidden">
                  {project.desc}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.split(', ').map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="text-xs font-medium bg-rose-500/10 text-rose-300 px-3 py-1 rounded-full border border-rose-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 text-white bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors text-sm font-medium"
                  >
                    <FaGithub /> View Code
                  </a>
                  {/* You can add a Live Demo button here if she has one */}
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