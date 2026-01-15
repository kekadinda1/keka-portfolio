import React from 'react';
import { personalDetails } from '../Data/personalDetails';

// Import Icons
import { FaPython, FaJava, FaHtml5, FaCss3Alt, FaReact, FaGithub, FaGitAlt } from 'react-icons/fa';
import { SiC, SiCplusplus, SiMysql, SiTailwindcss, SiJavascript } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const Skills = () => {
  
  // Helper to get Icon and Color
  const getSkillConfig = (skillName) => {
    const name = skillName.toLowerCase();
    
    if (name.includes('python')) return { icon: <FaPython />, color: 'text-yellow-400' };
    if (name.includes('java') && !name.includes('script')) return { icon: <FaJava />, color: 'text-orange-500' };
    if (name.includes('html')) return { icon: <FaHtml5 />, color: 'text-orange-600' };
    if (name.includes('css')) return { icon: <FaCss3Alt />, color: 'text-blue-500' };
    if (name.includes('javascript')) return { icon: <SiJavascript />, color: 'text-yellow-300' };
    if (name.includes('react')) return { icon: <FaReact />, color: 'text-cyan-400' };
    if (name.includes('tailwind')) return { icon: <SiTailwindcss />, color: 'text-cyan-300' };
    if (name.includes('mysql')) return { icon: <SiMysql />, color: 'text-blue-500' };
    if (name === 'c') return { icon: <SiC />, color: 'text-blue-400' };
    if (name.includes('c++')) return { icon: <SiCplusplus />, color: 'text-blue-600' };
    if (name.includes('git') && !name.includes('hub')) return { icon: <FaGitAlt />, color: 'text-red-500' };
    if (name.includes('github')) return { icon: <FaGithub />, color: 'text-white' };
    if (name.includes('vs code')) return { icon: <VscVscode />, color: 'text-blue-500' };
    
    return { icon: <FaHtml5 />, color: 'text-gray-400' };
  };

  return (
    <section id="skills" className="py-20 bg-[#11071F]">
      <div className="container mx-auto px-6">
        
        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          My <span className="text-rose-500">Skills</span>
        </h2>

        {/* Categories Grid (Like your screenshot) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {personalDetails.skills.map((category, index) => (
            <div 
              key={index}
              className="bg-[#1a0b2e] border border-rose-500/20 rounded-2xl p-8 hover:shadow-xl hover:shadow-rose-500/10 transition-shadow duration-300"
            >
              {/* Category Title */}
              <h3 className="text-2xl font-bold text-center text-rose-400 mb-8">
                {category.title}
              </h3>
              
              {/* Skills Pills Layout */}
              <div className="flex flex-wrap justify-center gap-4">
                {category.skills.map((skill, idx) => {
                  const { icon, color } = getSkillConfig(skill);
                  return (
                    <div 
                      key={idx}
                      className="flex items-center gap-3 bg-[#24123a] border border-rose-500/30 px-4 py-3 rounded-lg hover:bg-rose-500/20 transition-colors duration-300 cursor-default"
                    >
                      <span className={`text-2xl ${color}`}>{icon}</span>
                      <span className="text-gray-200 font-medium">{skill}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;